# S/Agentic University source candidate
Kimi owns the existing original publication at https://hdbmlg6savxqe.kimi.page. Local source integration and builds do not update it. Do not create a competing canonical destination.

## Current public flow
Public pages describe a developing learning initiative and interest-only registration. Spring2027 is a planning target; no seat, admission, enrollment, published fees, credential, named faculty, campus or research outcome is promised. Prepared materials are not live teaching or learner results.
All registration links use the same publication's #/apply route. The reviewed interest form uses the existing tRPC provider/API, not the old hardcoded Supabase endpoint. It requires contact consent, normalizes the email, guards concurrent submission and reports a confirmed saved record ID only after the API returns. An unconfirmed 20-second receipt timeout preserves entries and does not cancel or prove absence of the underlying insert; retry may return a duplicate response.
Existing API authentication, private Admin route/passcode and stored status semantics are retained. Faculty/Research/Campus source and assets are preserved but their public routes redirect to accurate informational pages. No unsupported legacy claims are exposed through those routes.
The separate intake/index.html and separately published interest site are historical independent work, preserved here without contacting or modifying their backend. Do not infer current Supabase availability from their source.

## Build and integration
Node22 was used. Install existing dependencies with npm ci --legacy-peer-deps --ignore-scripts --no-audit --no-fund. Run node node_modules/typescript/bin/tsc -b and npm run build --ignore-scripts. Do not run software suites.
The consent columns require the additive operation documented in ../docs/contact-consent-retention-20261126.md. Match the original publication to its real backend/database and existing release path before applying it. No migration, source push, remote PR merge, deployment or genuine registration verification is implied by this candidate.
