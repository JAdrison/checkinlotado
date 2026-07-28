DROP POLICY IF EXISTS "Anyone can insert leads" ON public.leads;

CREATE POLICY "Public can submit leads with valid data"
ON public.leads
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(trim(name)) BETWEEN 1 AND 200
  AND length(trim(email)) BETWEEN 3 AND 320
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND length(trim(whatsapp)) BETWEEN 6 AND 40
  AND length(trim(accommodation_type)) BETWEEN 1 AND 100
  AND (utm_source IS NULL OR length(utm_source) <= 200)
);