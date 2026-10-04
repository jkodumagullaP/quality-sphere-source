# Architecture

## Control plane

Browser -> React/TypeScript BFF client -> Fastify TypeScript API -> PostgreSQL. Files and evidence are addressed by immutable SHA-256 object keys in local or S3-compatible storage. Redis/BullMQ carries ingestion and execution jobs. Independent workers run real adapters and persist step-level outcomes and evidence references.

## Domain boundaries

Identity and access owns users, sessions, roles, permissions and scoped assignments. Quality owns requirement versions, analysis, scenarios, cases, automation, execution, evidence, defects and traceability. Delivery owns programs, projects, releases, sprints, tasks, resources, leave, skills, training and PIPs. Assurance owns performance, security and mobile adapter contracts. Governance owns audit, reports, backup metadata and integrations.

The initial deployable is a modular monolith plus worker processes—not premature microservices. Every module has normalized tables and explicit boundaries so high-load execution, ingestion and reporting can be separated later without rewriting the domain model.

## Tenancy

Every business aggregate is organization-scoped directly or through a project. Authorization resolves explicit organization/program/project role scopes before data access. Project IDs supplied by clients never grant access by themselves.

## Requirements spine

Requirement -> immutable version -> source files + analysis -> scenario -> versioned test case -> approved automation version -> execution/case/step evidence -> defect -> release gate.

## No artificial execution

Only worker adapter results may transition an execution to PASSED or FAILED. Missing automation is BLOCKED. External adapters throw a configuration error rather than returning synthetic success.
