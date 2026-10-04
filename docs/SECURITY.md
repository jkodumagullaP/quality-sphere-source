# Security baseline

- No default user or password; bootstrap is one-time and may require an out-of-band token.
- Passwords use scrypt with unique salts and an external pepper. The last five hashes are retained for history validation.
- Password changes use a dedicated endpoint, verify the current password, revoke every session and write an audit event.
- Sessions are persisted in PostgreSQL, represented by random opaque cookies, stored server-side as hashes, and constrained by idle and absolute expiry.
- Cookies are HTTP-only, SameSite Strict and Secure when TLS is enabled. Mutations require a separate CSRF token.
- CORS is limited to the configured web origin; body and upload sizes are bounded; rate limiting and standard security headers are enabled.
- Authorization checks explicit permissions and project scope. Generic user PATCH and generic entity mutation endpoints do not exist.
- Audit events contain request/correlation context and form a SHA-256 chain. A database trigger rejects updates/deletes.
- Object records track SHA-256, malware scan and extraction state. In production, files must not be consumed before scan status is CLEAN.

Before launch: integrate a managed secrets store, OIDC/SAML and SCIM, enforce TLS at the edge, add key rotation, database RLS defense-in-depth, scanner sandboxing, CSP nonces, egress policies, ASVS verification and an external penetration test.
