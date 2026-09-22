# SahaIQ

**AI-assisted Sales Intelligence & Field CRM**

SahaIQ is an open-source project for turning sales data into customer priorities, risk signals and next-best actions. It is designed for field sales teams that need more than a static dashboard.

> Public edition by **Uğurhan Horasanlı**. This repository uses demo/synthetic data only and contains no employer, customer or confidential production data.

## Planned capabilities

- Customer 360 and sales timeline
- RFM and ABC segmentation
- YoY trend and account-risk signals
- Rule-based next-best-action engine
- Visit, route and task management
- Product / brand / category opportunity analysis
- Excel and CSV import with configurable column mapping
- Optional AI-assisted account summaries
- Pluggable data-source connectors
- Qlik Cloud integration (planned)

## Qlik integration architecture

SahaIQ will not require tenant URLs, API keys or credentials to be stored in the repository.

```
Qlik Cloud
   ↓
Connector / Auth
   ↓
Dataset mapping
   ↓
Normalized SahaIQ model
   ↓
Analytics + Action Engine
```

Each deployment will supply its own credentials through environment variables or an external secret store.

## Status

Early public productization. The production-inspired private prototype is being generalized into a reusable edition with synthetic demo data and vendor-neutral terminology.

## Security

Never commit real customer exports, database files, tenant credentials, API keys or authentication secrets. See `.env.example` for supported configuration placeholders.

## Author

**Uğurhan Horasanlı**

Sales intelligence, automation and applied AI projects.
