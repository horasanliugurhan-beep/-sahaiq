# Security model

SahaIQ public edition follows these rules:

- No production customer data in Git.
- No Qlik tenant, API key, OAuth secret, password hash or AI key in source.
- Runtime credentials belong in environment variables or a deployment secret store.
- Data-source connectors are isolated from analytics.
- Imported data must be authorized by the operator.
- Synthetic sample data is used for the public repository.
- A deployment should apply least-privilege access to external systems.

Before enabling a production Qlik connector, validate the current authentication method supported by that tenant and deployment environment.
