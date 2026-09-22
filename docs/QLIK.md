# Qlik Cloud connector

SahaIQ's Qlik integration is server-side. Credentials are never exposed to browser code.

## Authentication

The proof-of-connection adapter supports a runtime API key. Qlik recommends OAuth for most application and interactive scenarios; API keys are useful for testing and scripting but inherit the permissions of the creating user. Production deployments should prefer an appropriately scoped OAuth design.

## Current implementation

- GET /api/qlik tests the tenant identity endpoint.
- If QLIK_APP_ID is set, it reads app metadata through the Apps REST API.
- Analytics extraction is deliberately not faked. Qlik app data is accessed through the QIX JSON-RPC / Associative Engine interface, which uses a stateful WebSocket session.

## Runtime variables

QLIK_TENANT_URL=https://your-tenant.region.qlikcloud.com
QLIK_API_KEY=runtime-secret
QLIK_APP_ID=app-id

Never commit these values.

## Data path

Qlik Cloud → server-side auth → app/QIX adapter → field mapping → normalized SahaIQ records → analytics/action engine.
