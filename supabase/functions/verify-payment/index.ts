
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
// removed unused createHash import

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, difficulty } = await req.json()

    const razorpayKeySecret = Deno.env.get('RAZORPAY_KEY_SECRET')
    
    if (!razorpayKeySecret) {
      throw new Error('Razorpay secret not configured')
    }

    // Derive authenticated user from JWT
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY')!
    const authHeader = req.headers.get('Authorization') || ''
    const token = authHeader.replace('Bearer ', '')
    const authClient = createClient(supabaseUrl, supabaseAnonKey)
    const { data: userData, error: userErr } = await authClient.auth.getUser(token)
    if (userErr || !userData.user) throw new Error('Not authenticated')

    // Verify signature
    const body = razorpay_order_id + '|' + razorpay_payment_id
    const expectedSignature = await computeHmacSHA256(razorpayKeySecret, body)
    
    if (expectedSignature !== razorpay_signature) {
      throw new Error('Invalid payment signature')
    }

    // Service role client for DB writes
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabase = createClient(supabaseUrl, supabaseKey)

    // Check if user already has this quiz level
    const { data: existingPurchase } = await supabase
      .from('quiz_purchases')
      .select('*')
      .eq('user_id', userData.user.id)
      .eq('difficulty', difficulty)
      .maybeSingle()

    if (existingPurchase) {
      return new Response(
        JSON.stringify({ success: true, message: 'Already purchased' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Record the purchase
    const amountRupees = difficulty === 'easy' ? 1500 : difficulty === 'medium' ? 2000 : 3000
    const { error } = await supabase
      .from('quiz_purchases')
      .insert({
        user_id: userData.user.id,
        difficulty,
        payment_id: razorpay_payment_id,
        order_id: razorpay_order_id,
        amount: amountRupees,
        status: 'completed'
      })

    if (error) {
      throw new Error('Failed to record purchase')
    }

    return new Response(
      JSON.stringify({ success: true }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400 
      }
    )
  }
})

async function computeHmacSHA256(secret: string, data: string): Promise<string> {
  const encoder = new TextEncoder()
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  )
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(data))
  return Array.from(new Uint8Array(signature))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
}
