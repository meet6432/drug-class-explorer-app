-- Enable RLS and add safe policies for reference/content tables

-- Helper macro via DO blocks to avoid errors if tables already have RLS/policies

-- clinical_cases
alter table if exists public.clinical_cases enable row level security;
drop policy if exists "Public read access for clinical_cases" on public.clinical_cases;
drop policy if exists "Admins can manage clinical_cases" on public.clinical_cases;
create policy "Public read access for clinical_cases" on public.clinical_cases for select using (true);
create policy "Admins can manage clinical_cases" on public.clinical_cases for all using (public.is_admin()) with check (public.is_admin());

-- drug_side_effects
alter table if exists public.drug_side_effects enable row level security;
drop policy if exists "Public read access for drug_side_effects" on public.drug_side_effects;
drop policy if exists "Admins can manage drug_side_effects" on public.drug_side_effects;
create policy "Public read access for drug_side_effects" on public.drug_side_effects for select using (true);
create policy "Admins can manage drug_side_effects" on public.drug_side_effects for all using (public.is_admin()) with check (public.is_admin());

-- drug_interactions
alter table if exists public.drug_interactions enable row level security;
drop policy if exists "Public read access for drug_interactions" on public.drug_interactions;
drop policy if exists "Admins can manage drug_interactions" on public.drug_interactions;
create policy "Public read access for drug_interactions" on public.drug_interactions for select using (true);
create policy "Admins can manage drug_interactions" on public.drug_interactions for all using (public.is_admin()) with check (public.is_admin());

-- dosage_formulas
alter table if exists public.dosage_formulas enable row level security;
drop policy if exists "Public read access for dosage_formulas" on public.dosage_formulas;
drop policy if exists "Admins can manage dosage_formulas" on public.dosage_formulas;
create policy "Public read access for dosage_formulas" on public.dosage_formulas for select using (true);
create policy "Admins can manage dosage_formulas" on public.dosage_formulas for all using (public.is_admin()) with check (public.is_admin());

-- bills
alter table if exists public.bills enable row level security;
drop policy if exists "Admins can manage bills" on public.bills;
create policy "Admins can manage bills" on public.bills for all using (public.is_admin()) with check (public.is_admin());

-- notifications
alter table if exists public.notifications enable row level security;
drop policy if exists "Admins can manage notifications" on public.notifications;
create policy "Admins can manage notifications" on public.notifications for all using (public.is_admin()) with check (public.is_admin());

-- pharmacokinetics_data
alter table if exists public.pharmacokinetics_data enable row level security;
drop policy if exists "Public read access for pharmacokinetics_data" on public.pharmacokinetics_data;
drop policy if exists "Admins can manage pharmacokinetics_data" on public.pharmacokinetics_data;
create policy "Public read access for pharmacokinetics_data" on public.pharmacokinetics_data for select using (true);
create policy "Admins can manage pharmacokinetics_data" on public.pharmacokinetics_data for all using (public.is_admin()) with check (public.is_admin());

-- easy_quiz_questions
alter table if exists public.easy_quiz_questions enable row level security;
drop policy if exists "Public read access for easy_quiz_questions" on public.easy_quiz_questions;
drop policy if exists "Admins can manage easy_quiz_questions" on public.easy_quiz_questions;
create policy "Public read access for easy_quiz_questions" on public.easy_quiz_questions for select using (true);
create policy "Admins can manage easy_quiz_questions" on public.easy_quiz_questions for all using (public.is_admin()) with check (public.is_admin());

-- medium_quiz_questions
alter table if exists public.medium_quiz_questions enable row level security;
drop policy if exists "Public read access for medium_quiz_questions" on public.medium_quiz_questions;
drop policy if exists "Admins can manage medium_quiz_questions" on public.medium_quiz_questions;
create policy "Public read access for medium_quiz_questions" on public.medium_quiz_questions for select using (true);
create policy "Admins can manage medium_quiz_questions" on public.medium_quiz_questions for all using (public.is_admin()) with check (public.is_admin());

-- hard_quiz_questions
alter table if exists public.hard_quiz_questions enable row level security;
drop policy if exists "Public read access for hard_quiz_questions" on public.hard_quiz_questions;
drop policy if exists "Admins can manage hard_quiz_questions" on public.hard_quiz_questions;
create policy "Public read access for hard_quiz_questions" on public.hard_quiz_questions for select using (true);
create policy "Admins can manage hard_quiz_questions" on public.hard_quiz_questions for all using (public.is_admin()) with check (public.is_admin());

-- drug_class_relationships
alter table if exists public.drug_class_relationships enable row level security;
drop policy if exists "Public read access for drug_class_relationships" on public.drug_class_relationships;
drop policy if exists "Admins can manage drug_class_relationships" on public.drug_class_relationships;
create policy "Public read access for drug_class_relationships" on public.drug_class_relationships for select using (true);
create policy "Admins can manage drug_class_relationships" on public.drug_class_relationships for all using (public.is_admin()) with check (public.is_admin());
