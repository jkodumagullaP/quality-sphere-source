# Quality Sphere 3.0 — Production Enterprise Architecture Foundation

A native Node.js/TypeScript enterprise rebuild. It replaces JSON persistence with PostgreSQL, adds Redis/BullMQ execution queues, object-storage adapters, persistent HTTP-only sessions, project-scoped permissions, tamper-evident audit events, first-run bootstrap, worker registration and real execution-adapter contracts.

## Status

This is a **production architecture foundation**, not a certified production release. Working foundations and executable service paths are included. Environment-specific identity, scanners, OCR, mobile, performance, security, PDF/PPTX and operations integrations remain explicit gates—never simulated successes.

## Prerequisites

Node.js 24.21.x LTS, npm 11.19.x, PostgreSQL 16+ and Redis 7+. Optional tools include ClamAV, Tesseract, Playwright browsers and S3-compatible object storage. Node.js production applications should use supported LTS lines; this project pins Node 24 rather than accepting any runtime newer than 18.

## Start without containers

```bash
cp .env.example .env
npm ci
npm run migrate
npm run dev
```

Open `http://127.0.0.1:5173/quality-sphere-command-center.html`. First launch creates the organization, administrator and project. There are no default credentials.

## Verify

```bash
npm run typecheck
npm test
npm run build
npm run audit:prod
npm run sbom
```

The application UI places **Delivery directly under Command Center**, giving release leaders one operational flow from planning through release gates. Read `docs/ARCHITECTURE.md`, `docs/SECURITY.md`, `docs/NATIVE-RUNBOOK.md`, `docs/ROADMAP.md` and `docs/PRODUCTION-GATES.md` before deployment.
