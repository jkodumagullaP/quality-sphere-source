# Delivery roadmap

## Foundation — now

Normalized PostgreSQL schema, first-run bootstrap, hardened local authentication, persistent sessions, project RBAC, immutable audit, object-store contract, requirement versions, real execution queue and UI/API workers.

## Execution

Finish ingestion workers (ClamAV, parsers, OCR), evidence registration, cancellation signals, idempotency, retries, browser matrix, worker leases, capacity routing and execution streaming.

## Enterprise identity and integrations

OIDC, SAML, SCIM, managed secrets, GitHub/GitLab/Azure DevOps/Jenkins adapters, k6/JMeter/Gatling, DAST/SAST/SCA and Appium.

## Operations

OpenTelemetry, Prometheus/Grafana, centralized logs, migration orchestration, PostgreSQL PITR, restore drills, high availability, autoscaling and feature flags. Kubernetes is optional; native service deployment remains supported.

## Assurance

ASVS review, complete RBAC/data-isolation matrix, SAST/SCA/DAST, API and authenticated penetration tests, load/soak/failover tests, restore proof and external security assessment.
