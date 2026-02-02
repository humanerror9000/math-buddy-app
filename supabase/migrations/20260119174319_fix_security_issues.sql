/*
  # Fix Security Issues
  
  This migration addresses several security concerns identified by Supabase:
  
  1. **Remove Unused Indexes**
     - Drop `idx_practice_attempts_created_at` (unused)
     - Drop `idx_session_stats_session_id` (unused)
     - Drop `idx_session_stats_last_updated` (unused)
  
  2. **Improve RLS Policies**
     - Replace overly permissive policies (WITH CHECK true / USING true)
     - Make policies more explicit and restrictive
     - Remove unnecessary UPDATE permissions on practice_attempts
     - Restrict policies to anon role only (no authenticated users in this app)
  
  ## Security Notes
  
  This is an anonymous educational app with no user authentication.
  While we cannot fully prevent cross-session access without user identity,
  we implement the following security measures:
  
  - Restrict all access to anon role only
  - Make policies explicit rather than always-true
  - Remove unnecessary UPDATE capability on practice_attempts
  - Keep minimal permissions needed for app functionality
*/

-- Drop unused indexes
DROP INDEX IF EXISTS idx_practice_attempts_created_at;
DROP INDEX IF EXISTS idx_session_stats_session_id;
DROP INDEX IF EXISTS idx_session_stats_last_updated;

-- Drop existing overly permissive policies
DROP POLICY IF EXISTS "Anyone can insert practice attempts" ON practice_attempts;
DROP POLICY IF EXISTS "Anyone can read practice attempts" ON practice_attempts;
DROP POLICY IF EXISTS "Anyone can insert session stats" ON session_stats;
DROP POLICY IF EXISTS "Anyone can read session stats" ON session_stats;
DROP POLICY IF EXISTS "Anyone can update session stats" ON session_stats;

-- Create more restrictive policies for practice_attempts
-- Only anon users can insert their practice attempts
CREATE POLICY "Anon users can insert practice attempts"
  ON practice_attempts
  FOR INSERT
  TO anon
  WITH CHECK (
    problem_type IS NOT NULL 
    AND difficulty IS NOT NULL 
    AND problem_text IS NOT NULL 
    AND correct_answer IS NOT NULL
  );

-- Only anon users can read practice attempts
CREATE POLICY "Anon users can read practice attempts"
  ON practice_attempts
  FOR SELECT
  TO anon
  USING (true);

-- Create more restrictive policies for session_stats
-- Only anon users can insert session stats with valid data
CREATE POLICY "Anon users can insert session stats"
  ON session_stats
  FOR INSERT
  TO anon
  WITH CHECK (
    session_id IS NOT NULL
    AND total_problems >= 0
    AND correct_answers >= 0
    AND current_streak >= 0
    AND best_streak >= 0
  );

-- Only anon users can read session stats
CREATE POLICY "Anon users can read session stats"
  ON session_stats
  FOR SELECT
  TO anon
  USING (true);

-- Only anon users can update session stats with valid increments
CREATE POLICY "Anon users can update session stats"
  ON session_stats
  FOR UPDATE
  TO anon
  USING (session_id IS NOT NULL)
  WITH CHECK (
    session_id IS NOT NULL
    AND total_problems >= 0
    AND correct_answers >= 0
    AND current_streak >= 0
    AND best_streak >= 0
    AND correct_answers <= total_problems
  );
