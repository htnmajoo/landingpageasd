/*
  # Create tracking and leads tables

  1. New Tables
    - `click_events`
      - `id` (uuid, primary key)
      - `type` (text) - Type of click (trial/whatsapp)
      - `created_at` (timestamp)
    
    - `leads`
      - `id` (uuid, primary key)
      - `name` (text)
      - `whatsapp` (text)
      - `business_type` (text)
      - `needs` (text)
      - `source` (text) - Which CTA generated this lead
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for inserting data
*/

-- Click events table
CREATE TABLE IF NOT EXISTS click_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  type text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE click_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert click events"
  ON click_events
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can view click events"
  ON click_events
  FOR SELECT
  TO anon
  USING (true);

-- Leads table
CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  whatsapp text NOT NULL,
  business_type text NOT NULL,
  needs text,
  source text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert leads"
  ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can view leads"
  ON leads
  FOR SELECT
  TO anon
  USING (true);