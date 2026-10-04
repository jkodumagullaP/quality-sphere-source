# Native runbook (no containers)

## Install services

Use OS-native packages or managed services for PostgreSQL 16+ and Redis 7+. Create a dedicated database, role and strong password. Bind local development services to loopback; production services should be private-network only.

## Application

```bash
nvm install 24.21.0
nvm use
cp .env.example .env
npm ci
npm run migrate
npm run dev
```

For production, create separate operating-system identities for API and workers. Build with `npm run build`; run the API and each worker through systemd, launchd, Windows Service Manager or an approved process supervisor. Put a TLS reverse proxy/load balancer in front of the API. Set `COOKIE_SECURE=true` and `TRUST_PROXY=true` only behind a correctly configured trusted proxy.

## Backup

Use PostgreSQL physical or managed snapshots for point-in-time recovery, versioned and encrypted object storage, and separate Redis recovery only for queue continuity. Keep database and object-store retention coordinated. Test restoration into an isolated environment on a schedule and preserve audit data.

## Health

- `/health/live`: process liveness
- `/health/ready`: database readiness

Production adds Redis, object-store, worker-heartbeat and migration-compatibility readiness checks. Drain workers before maintenance.
