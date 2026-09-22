# Qlik Cloud connector

The Qlik connector is intentionally isolated from the analytics layer.

## Target flow
1. Authenticate against the user's own Qlik Cloud tenant.
2. Select an authorized app/dataset.
3. Map source fields to SahaIQ's normalized schema.
4. Pull only the fields required by the deployment.
5. Pass normalized records to analytics.

Credentials must be supplied at runtime and must never be committed.

Environment placeholders:
- QLIK_TENANT_URL
- QLIK_AUTH_MODE
- QLIK_API_KEY
- QLIK_APP_ID

The first public connector implementation will support explicit user configuration rather than any hard-coded organization tenant.
