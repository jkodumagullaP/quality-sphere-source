#!/usr/bin/env bash
set -euo pipefail
: "${DATABASE_URL:?DATABASE_URL is required}"
out="${1:-./artifacts/backup-$(date -u +%Y%m%dT%H%M%SZ)}"
mkdir -p "$out"
pg_dump --format=custom --no-owner --file "$out/database.dump" "$DATABASE_URL"
sha256sum "$out/database.dump" > "$out/SHA256SUMS"
printf '{"format":"quality-sphere-backup-v1","createdAt":"%s","schemaMigration":"001_enterprise_core"}\n' "$(date -u +%FT%TZ)" > "$out/metadata.json"
echo "Database backup created. Object storage must be snapshotted consistently by its native versioned/encrypted backup mechanism."
