# Production gates

This alpha must not be described as production-ready until every gate has evidence and named approval.

1. Architecture: migrations reversible; PostgreSQL PITR tested; object retention tested; queues recover from worker/API restart; capacity model approved.
2. Identity: OIDC/SAML, SCIM, MFA, recovery, invitation and deprovisioning tested; project isolation matrix at 100%.
3. Security: threat model approved; SAST/SCA/secrets/container-host scans clean; OWASP ASVS review; authenticated external penetration test closed.
4. Quality: critical unit/service/API/database/RBAC/integration/UI/worker/backup workflows green; mutation tests for authorization; compatibility matrix approved.
5. Reliability: load, soak, failover, cancellation, retry/idempotency, restore and regional disaster-recovery exercises pass RTO/RPO.
6. Observability: OpenTelemetry traces, golden signals, queue depth, worker health, SLOs, paging routes and runbooks verified.
7. Governance: data classification, retention, privacy, DPA, license/SBOM, evidence chain, audit export and legal approvals complete.
8. Release: signed artifacts, reproducible build, staged rollout, feature flags, rollback, change approval and post-deploy checks complete.
