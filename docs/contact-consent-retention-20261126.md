# Contact consent retention candidate
Executor: Codex / ChatGPT. Base main: 3a2d048f8cd36474ebd618c71afbcc0791f87c79.
Scope: retain the already-required contactConsent literal true and the server's capture time in the same applications INSERT. Existing validation, email/semester unique index, statuses, access checks, public copy and design are preserved. Timestamp records submission capture, not an independent historical opt-in time.
Legacy rows retain NULL/unknown; no default true or invented historical consent.

## Integration and deployment
This isolated source candidate is not deployed. Reconcile with PR12 and any subsequent main before integration. Existing original Kimi publication and live database ownership/configuration must be matched to this backend before release; a Manus checkout does not establish the original publication's backend.
On the verified target database, inspect applications columns and retain the existing backup. Apply website/db/operations/20261126-retain-contact-consent.sql once only when both columns are absent; reconcile partially present columns instead of rerunning blindly. It is a manual additive operation, not a fabricated Drizzle migration history. No migration was applied by this candidate.
Deploy code only after matching columns exist. Verify an actual authorized submission and its matching stored consent/time; do not create a fake learner or claim launch from source alone.

## Recovery
Original server checkout and its uncommitted changes are untouched. Revert only these source changes to roll back the application, retaining additive columns and any genuine recorded consent. Never drop consent columns to roll back this code.
No new dependencies, external messages, provider calls or software suites. Existing installed TypeScript supports syntax transpilation only; full type/build validation requires the current declared dependencies, which are absent from the old server installation. Do not describe syntax acceptance as type/build or runtime proof.

## Exact submission receipt
The insert now captures the generated record ID through the existing Drizzle MySQL adapter and retrieves only that ID. It no longer selects the latest record for an email across all semesters. Missing insert ID or row raises an error instead of reporting an unrelated record as the submitted application. The existing unique email/semester constraint and duplicate response remain unchanged. No synthetic learner or application was submitted.

## 26 November follow-through
Refreshed origin/main and PR12: unchanged at 3a2d048f8cd36474ebd618c71afbcc0791f87c79 and 17d63a74357f951d31f48f5cb59cc32c36d24a92. npm ci --ignore-scripts --no-audit --no-fund --prefer-offline returned exit1; required dependencies remain absent in this isolated worktree. Error detail was not retained, so no root cause is claimed. Package and lockfile unchanged. No full type check or build was executed. Syntax transpilation for schema, router and application queries returned zero syntax diagnostics; git diff --check exit0. No software suite, database write, submission or deployment. Original checkout and earlier consent commit preserved.

## 26 November 20:53 Dubai — build recovery
Node22.23.1/npm10.9.8. Captured the prior npm failure: Cannot read properties of null (reading edgesOut). Same-lock npm ci --legacy-peer-deps then exposed missing lock entries rather than a connectivity failure. Reconciled the existing package-lock.json with npm install --package-lock-only --legacy-peer-deps --ignore-scripts --no-audit --no-fund. The package manifest is unchanged; root lock dependencies/devDependencies match it exactly. Reconciliation changes transitive locked versions and is part of this candidate, not a deployed dependency update.
Reproducible install: npm ci --legacy-peer-deps --ignore-scripts --no-audit --no-fund --fetch-retries=0 --fetch-timeout=15000 returned exit0,566packages. Lifecycle scripts/audit disabled; no suite executed.
First full TypeScript check found four unused imports in Home/Faculty. Removed only those imports, preserving markup, copy and behavior. Final node node_modules/typescript/bin/tsc -b exit0. Final npm run build --ignore-scripts exit0: Vite client and esbuild API bundles generated.
Nonblocking build notices: old Browserslist data and large output chunks; no unrelated dependency updater or bundle redesign.
These current results supersede earlier dependency/type/build blockers; earlier attempt notes remain historical. This branch still requires main/PR12 reconciliation, matching the original publication to its actual backend/database, additive schema deployment and genuine saved-record verification. No database write, synthetic application, live service change, push, merge, deployment or launch.
