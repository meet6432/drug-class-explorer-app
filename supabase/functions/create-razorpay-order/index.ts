
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { difficulty } = await req.json()

    if (!['easy', 'medium', 'hard'].includes(difficulty)) {
      throw new Error('Invalid difficulty')
    }

    // Derive authenticated user
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY')!
    const authHeader = req.headers.get('Authorization') || ''
    const token = authHeader.replace('Bearer ', '')
    const authClient = createClient(supabaseUrl, supabaseAnonKey)
    const { data: userData, error: userErr } = await authClient.auth.getUser(token)
    if (userErr || !userData.user) {
      throw new Error('Not authenticated')
    }

    // Server-side price mapping (INR)
    const priceMap: Record<string, number> = { easy: 1500, medium: 2000, hard: 3000 }
    const amountInPaise = priceMap[difficulty] * 100

    // Create Razorpay order
    const razorpayKeyId = Deno.env.get('RAZORPAY_KEY_ID')
    const razorpayKeySecret = Deno.env.get('RAZORPAY_KEY_SECRET')

    if (!razorpayKeyId || !razorpayKeySecret) {
      throw new Error('Razorpay credentials not configured')
    }

    const orderData = {
      amount: amountInPaise, // Razorpay expects amount in paise
      currency: 'INR',
      receipt: `quiz_${difficulty}_${userData.user.id}_${Date.now()}`,
      notes: {
        quiz_difficulty: difficulty,
        user_id: userData.user.id
      }
    }

    const auth = btoa(`${razorpayKeyId}:${razorpayKeySecret}`)
    
    const response = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    })

    const order = await response.json()

    if (!response.ok) {
      throw new Error(order.error?.description || 'Failed to create order')
    }

    return new Response(
      JSON.stringify({ orderId: order.id, amount: order.amount, key: razorpayKeyId }),
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
