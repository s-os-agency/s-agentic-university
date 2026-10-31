# s-agentic-university — Agent execution instructions

**Portfolio:** 7/16 (source row 7); **Lead agent:** Gemini; **specialty:** Learning content, Google/Supabase workflow and UX; **independent reviewer:** ChatGPT (Enrollment and identity policy review).
**Repository:** https://github.com/s-os-agency/s-agentic-university
**Authoritative gates:** https://docs.google.com/spreadsheets/d/1MMk4Tx0k5rS7e_vOIFg-Dg022VEqXsdwqHibT9-3uOI/edit#gid=20261034
**Release dashboard:** https://docs.google.com/spreadsheets/d/1MMk4Tx0k5rS7e_vOIFg-Dg022VEqXsdwqHibT9-3uOI/edit#gid=20261035
**Disposition:** ACTIVATE; **accountable proposed engineering role:** Learning Systems Engineer.

## Mandatory operating rules
- Existing root AGENTS.md owner instruction controls: do not add, restore or run software test suites, test-only workflows or scaffolding. Existing spreadsheet references to tests are superseded: obtain real source/build/configuration and operational readback evidence within the owner policy. Never claim tests were run or passed.
- Inspect canonical README, source, existing diffs and deployments before changes. Make the smallest reversible implementation change required. Do not merely write plans or invent launch statuses.
- The named lead is a proposed execution assignment, **not proof of an active external agent session**, OpenRouter invocation, or authority to use another agent's account. A reviewer is an independent second-pass assignment, not an approval already provided.
- Use only scoped provider access actually available. No blind deployment, destructive migrations, new permissions, purchases or exposure of credentials. Preserve backups and rollback.
- Attach evidence URL, UTC date, version/commit, deployed environment and observed result to the corresponding Exact Completion Gates row. Mark VERIFIED only for evidence-backed completion. Leave other gates OPEN; no fabricated real customer, revenue, PayPal or Ziina status.
- Production launch requires a provider-backed deployment receipt and actual live runtime observation, not a green document or UI screenshot.

## Exact execution order

### Gate 7.1 — SOURCE
**Action:** Reconcile canonical University repo, Kimi-hosted website and intake source; remove stale admission claims.
**Acceptance outcome:** Source-to-host diff checked, no misleading enrollment, certification or semester guarantees.
**Evidence required:** actual source/commit, environment, timestamp, direct output/receipt, and reviewer; record in sheet. **Initial state: OPEN.**

### Gate 7.2 — DATA
**Action:** Confirm Supabase interest form write permissions, RLS, abuse control, PII notice and authorized admin read.
**Acceptance outcome:** Safe synthetic submission persists and anonymous read/replay denied.
**Evidence required:** actual source/commit, environment, timestamp, direct output/receipt, and reviewer; record in sheet. **Initial state: OPEN.**

### Gate 7.3 — CONTENT
**Action:** Produce one source-attributed learning artifact and assessment with independent claim review.
**Acceptance outcome:** Claim registry + reviewer approval + rubric and published version link exist.
**Evidence required:** actual source/commit, environment, timestamp, direct output/receipt, and reviewer; record in sheet. **Initial state: OPEN.**

### Gate 7.4 — AUTH
**Action:** Before passported learning/certification, verify signed identity and enrollment prerequisite; do not rely on experimental Cloudflare component.
**Acceptance outcome:** Unauthorized or revoked Passport denied in end-to-end test.
**Evidence required:** actual source/commit, environment, timestamp, direct output/receipt, and reviewer; record in sheet. **Initial state: OPEN.**

### Gate 7.5 — DEPLOY
**Action:** Publish corrected canonical website/intake to intended hosted surfaces and record both deployed commits.
**Acceptance outcome:** HTTPS pages match committed content and persistence endpoint; rollback documented.
**Evidence required:** actual source/commit, environment, timestamp, direct output/receipt, and reviewer; record in sheet. **Initial state: OPEN.**

### Gate 7.6 — LIVE PROOF
**Action:** From public URL submit synthetic interest, verify admin receipt; separately verify one learning release.
**Acceptance outcome:** Timestamped public form receipt, redacted persistence readback, published content and reviewer evidence.
**Evidence required:** actual source/commit, environment, timestamp, direct output/receipt, and reviewer; record in sheet. **Initial state: OPEN.**

### Gate 7.7 — COMMERCIAL
**Action:** Do not assert paid students, enrollments or credentials from a public interest form.
**Acceptance outcome:** Only verified signed enrollment/order and settled provider payment can support customer/revenue status.
**Evidence required:** actual source/commit, environment, timestamp, direct output/receipt, and reviewer; record in sheet. **Initial state: OPEN.**

## Completion handoff
Update each gate's verification state in Google Sheets and attach proof. Distinguish implementation from launch, customer acceptance from inquiries and settled payments from checkout creation. The lead produces the change receipt; the reviewer checks evidence independently. Do not announce completion until all required applicable gates pass. Report any unavoidable external authorization boundary specifically.

**Agent document author:** GPT-6 (instructions only; not a launch attestation).
