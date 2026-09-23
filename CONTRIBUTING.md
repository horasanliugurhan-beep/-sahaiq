# Contributing

Thanks for considering a contribution to SahaIQ.

## Development

1. Fork the repository and create a focused branch.
2. Install dependencies with `npm install`.
3. Run `npm test`.
4. Run `npm run build`.
5. Open a pull request describing the behavior changed.

## Data and secrets

Do not commit real customer data, company exports, tenant URLs, API keys, access tokens, credentials or proprietary business documents. Use synthetic data in tests and examples.

## Connector changes

Keep vendor-specific authentication and extraction logic behind the connector layer. Normalize external data into SahaIQ's generic schema before analytics rules consume it.
