# Architecture

SahaIQ is being structured as a vendor-neutral sales intelligence platform.

## Layers

1. **Connectors** — Excel/CSV first; Qlik Cloud as an optional connector.
2. **Mapping & normalization** — converts source-specific fields into a stable customer, product, sale and activity model.
3. **Storage** — local/deployment database without source credentials.
4. **Analytics** — RFM, ABC, trend, risk and opportunity calculations.
5. **Action Engine** — deterministic rules that convert signals into explainable recommended actions.
6. **CRM workflow** — visits, notes, tasks, routes and follow-up.
7. **AI layer** — optional summaries and natural-language assistance; core analytics must remain usable without an AI provider.

## Data isolation

The public edition ships only with synthetic demo data. Production deployments are responsible for their own data access, credentials and authorization policies.

## Connector contract

A connector should return normalized records rather than leaking vendor-specific structures into the analytics layer. Qlik-specific authentication and API logic therefore remains inside the Qlik connector.
