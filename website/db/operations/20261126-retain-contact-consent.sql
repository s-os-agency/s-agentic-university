-- Add once on the verified applications database before deploying the matching code.
-- Inspect existing columns first; do not rerun if either column already exists.
-- Existing rows remain NULL: historical consent is unknown.
ALTER TABLE applications
  ADD COLUMN contact_consent BOOLEAN NULL,
  ADD COLUMN contact_consent_at TIMESTAMP NULL DEFAULT NULL;
