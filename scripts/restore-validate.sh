#!/usr/bin/env bash
set -euo pipefail
: "${RESTORE_DATABASE_URL:?RESTORE_DATABASE_URL must point to an isolated validation database}"
backup="${1:?backup directory required}"
(cd "$backup" && sha256sum -c SHA256SUMS)
pg_restore --clean --if-exists --no-owner --dbname "$RESTORE_DATABASE_URL" "$backup/database.dump"
psql "$RESTORE_DATABASE_URL" -v ON_ERROR_STOP=1 -c "SELECT version,applied_at FROM schema_migrations ORDER BY applied_at DESC LIMIT 1"
psql "$RESTORE_DATABASE_URL" -v ON_ERROR_STOP=1 -c "SELECT count(*) AS audit_events FROM audit_events"
echo "Restore validation completed; execute application smoke and referential-integrity suites before acceptance."
