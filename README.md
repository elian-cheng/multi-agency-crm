# Multi-Agency CRM Syntro

SaaS Website Builder, Project Management And Dashboard With Stripe using Nextjs14, Bun, Stripe Connect, Prisma, Postgres (Supabase), Docker, Tailwind

## Deploy

https://eliancheng.vercel.app/

## Table of Contents

- [Features](#features)
- [Quick Start](#quick-start)
- [Commands](#commands)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)

## Features

- 🤯 Multivendor B2B2B Saas
- 🏢 Agency and Subaccounts
- 🌐 Unlimited funnel hosting
- 🚀 Full Website & Funnel builder
- 💻 Role-based Access
- 🔄 Stripe Subscription plans
- 🛒Stripe add-on products
- 🔐 Connect Stripe accounts for all users! - Stripe Connect
- 💳 Charge application fee per sale and recurring sales
- 💰 Custom Dashboards
- 📊 Media Storage
- 📈 Stripe Product Sync
- 📌Custom checkouts on funnels
- 📢 Get leads from funnels
- 🎨 Khanban board
- 📂 Project management system
- 🔗 Notifications
- 📆 Funnel performance metrics
- 🧾 Agency and subacc metrics
- 🌙 Graphs and charts
- ☀️ Light & Dark mode
- 📄 Functioning landing page

## Quick Start

Clone the repo:

```bash
git clone https://github.com/elian-cheng/multi-agency-crm
cd multi-agency-crm
```

Install the dependencies:

```bash
bun install
```

Set the environment variables:

```bash
cp .env.example .env

# open .env and modify the environment variables
```

## Commands

Running locally:

```bash
bun run dev
```

Running in production:

```bash
bun run start
```

Linting:

```bash
bun run lint
```

Start local DB with Docker:

```bash
bun run docker:db
```

Start Stripe webhook locally:

```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

## Environment Variables

The environment variables can be found and modified in the `.env` file. They come with these default values:

```bash
# Connect to Supabase via connection pooling with Supavisor.
# For local DB use only DATABASE_URL is required
DATABASE_URL=
# Direct connection to the database. Used for migrations.
DIRECT_URL=""

# Clerk users auth required env variables
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/agency/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/agency/sign-up

# Uploadthing token to upload media files
UPLOADTHING_TOKEN=

# Stripe API keys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
# webhook secret for local testing
STRIPE_WEBHOOK_SECRET=
# Stripe Connect client ID
NEXT_PUBLIC_STRIPE_CLIENT_ID=

# Stripe product ID of the platform service with 3 subscription plans
NEXT_SYNTRO_PRODUCT_ID=
```

## Project Structure

```
src\
 |--app\            # Application-specific components and pages
 |--components\     # Reusable React components
 |--hooks\          # Custom React hooks
 |--lib\            # Library and utility functions
 |--providers\      # Context providers
 |--middleware.ts   # Middleware configuration
public\
 |--assets\         # Static assets
prisma\
 |--schema.prisma   # Prisma ORM schema
```
