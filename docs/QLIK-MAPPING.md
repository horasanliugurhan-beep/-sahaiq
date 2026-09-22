# Qlik → SahaIQ mapping

SahaIQ does not assume a company's Qlik field names.

Required normalized fields:
- customer_id
- customer_name
- date
- quantity

Optional:
- revenue
- product
- brand
- region

A deployment selects Qlik dimensions/measures and maps their returned columns to this schema. This keeps private app structure and business terminology out of the public codebase.

## QIX extraction

The connector foundation now includes:
- tenant/app WebSocket URL generation
- bearer authorization headers
- JSON-RPC request correlation
- OpenDoc
- CreateSessionObject
- GetLayout
- GetHyperCubeData
- generic hypercube definitions
- QIX cell → row normalization

The browser does not receive the API key. A production Next.js deployment should establish the QIX WebSocket from its server runtime and expose only authorized normalized data to the UI.
