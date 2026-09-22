# SahaIQ

**Open Sales Intelligence & Field CRM**

SahaIQ turns sales data into customer segments, risk signals and explainable next-best actions.

Built by **Uğurhan Horasanlı** as a reusable, vendor-neutral public edition of a field-sales intelligence concept.

## What works today

- RFM customer scoring and segmentation
- Explainable rule-based action engine
- Sales decline and follow-up signals
- Synthetic demo dashboard
- CSV import and configurable field mapping
- Normalized customer/sales schema
- Server-side Qlik Cloud REST connection test
- Qlik app metadata adapter
- QIX JSON-RPC / hypercube extraction foundation
- Automated core/import/Qlik/QIX tests
- Secret-safe environment template

## Run locally

~~~bash
npm install
npm test
npm run dev
~~~

Open the local Next.js URL, then use **Import** for your own CSV data.

## Data model

Required: `customer_id`, `customer_name`, `date`, `quantity`

Optional: `revenue`, `product`, `brand`, `region`

## Qlik Cloud

SahaIQ keeps Qlik credentials server-side. Configure runtime values in `.env.local` using `.env.example`. See `docs/QLIK.md` and `docs/QLIK-MAPPING.md`.

Qlik-specific fields are mapped into SahaIQ's vendor-neutral schema, so the CRM is not tied to one company or app.

## Privacy & security

This public repository contains synthetic demo data only. Never commit production exports, database files, tenant URLs, API keys, OAuth secrets or customer information.

## Status

Public alpha. Core analytics and connector foundations are implemented; production deployments should validate their own authorization, persistence and data-governance requirements.

## Author

**Uğurhan Horasanlı**  
Sales intelligence, automation and applied AI projects.
