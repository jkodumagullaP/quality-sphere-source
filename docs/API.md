# REST API outline

All mutation endpoints require the `qs_session` cookie and `x-csrf-token`. Every response carries `x-request-id` and `x-correlation-id`.

- `GET /api/v1/bootstrap/status`
- `POST /api/v1/bootstrap`
- `POST /api/v1/auth/login`, `POST /api/v1/auth/logout`, `GET /api/v1/auth/me`
- `POST /api/v1/users/{id}/password`
- `GET /api/v1/projects`, `GET /api/v1/projects/{projectId}`
- `GET|POST /api/v1/projects/{projectId}/requirements`
- `POST /api/v1/projects/{projectId}/requirements/{id}/versions`
- `POST /api/v1/projects/{projectId}/files`
- `POST /api/v1/projects/{projectId}/executions`
- `GET /api/v1/projects/{projectId}/executions/{id}`
- `POST /api/v1/projects/{projectId}/executions/{id}/cancel`
- `POST /api/v1/workers/register`, `POST /api/v1/workers/{id}/heartbeat`

Generate a reviewed OpenAPI 3.1 contract before public API stability is declared.
