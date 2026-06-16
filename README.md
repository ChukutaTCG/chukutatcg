# Chukuta Tactical Consulting Group™ — Website

> _Designing for Advantage. Delivering for Outcomes._

A modern, premium consulting-firm website. A **NestJS** API backend and a
**React + TypeScript** frontend (Vite + Tailwind CSS), styled to the Chukuta
brand: deep-navy theme with gold/yellow gradient accents.

## Project structure

```
chukuta-website/
├── backend/          # NestJS API (services + contact form)
│   └── src/
│       ├── main.ts
│       ├── app.module.ts
│       ├── common/logger.middleware.ts
│       ├── contact/  # POST /api/contact + DTO validation
│       └── services/ # GET /api/services
├── frontend/         # React + TS + Tailwind (Vite)
│   └── src/
│       ├── components/  # Header, Hero, About, Services, Expertise, Contact, Footer
│       └── lib/api.ts
├── docker-compose.yml
└── README.md
```

## Prerequisites

- Node.js 18+ (built and tested on Node 24)
- npm 9+

## Getting started (local development)

Run the backend and frontend in two terminals.

**1. Backend (NestJS) — http://localhost:3001/api**

```bash
cd backend
npm install
npm run start:dev
```

**2. Frontend (Vite) — http://localhost:5173**

```bash
cd frontend
npm install
npm run dev
```

The Vite dev server proxies `/api/*` to the backend on port 3001, so no CORS
configuration is needed during development.

## API

| Method | Endpoint        | Description                                  |
| ------ | --------------- | -------------------------------------------- |
| GET    | `/api/health`   | Health check                                 |
| GET    | `/api/services` | List of core services                        |
| POST   | `/api/contact`  | Submit a contact / consultation request      |
| GET    | `/api/contact`  | List submissions (dev/admin convenience)     |

### `POST /api/contact` payload

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "company": "Acme Corp",
  "phone": "+1 555 0100",
  "message": "We'd like to discuss an emerging-tech strategy engagement.",
  "scheduleConsultation": true
}
```

Validation is enforced by NestJS `ValidationPipe` + `class-validator`. For the
MVP, submissions are stored in memory and logged to the console.

## Production build

**Backend**

```bash
cd backend
npm run build      # → dist/
npm run start:prod # node dist/main
```

**Frontend**

```bash
cd frontend
npm run build      # → dist/ (static assets, deploy to any CDN/host)
npm run preview    # preview the production build locally
```

## Environment variables (backend)

Copy `backend/.env.example` to `backend/.env`:

| Variable               | Default                  | Purpose                              |
| ---------------------- | ------------------------ | ------------------------------------ |
| `PORT`                 | `3001`                   | API port                             |
| `CORS_ORIGIN`          | `http://localhost:5173`  | Comma-separated allowed origins      |
| `CONTACT_NOTIFY_EMAIL` | `erick@chukutatcg.com`   | Notification target (Phase 2 email)  |

## Docker (optional)

```bash
docker compose up --build
```

Backend is served on `:3001`. See `docker-compose.yml`.

## Design system

| Token            | Value                       | Usage                       |
| ---------------- | --------------------------- | --------------------------- |
| Primary Dark     | `#0a1f3f`                   | Main background             |
| Secondary Dark   | `#0d2748`                   | Cards, alternating sections |
| Accent Gold      | `#ffd700`                   | Highlights, hover, buttons  |
| Accent Yellow    | `#ffed4e`                   | Gradient companion          |
| Text Primary     | `#ffffff`                   | Body text                   |
| Text Secondary   | `#e0e0e0`                   | Metadata, secondary copy    |

Tailwind tokens live in `frontend/tailwind.config.js`.

## Accessibility

- Semantic landmarks (`header`, `main`, `nav`, `footer`, `section`)
- Skip-to-content link, visible focus rings, `aria-*` on form fields
- `prefers-reduced-motion` respected for all animations
- AA-contrast palette (white / light-gray on deep navy)

## Roadmap (Phase 2)

- Email confirmation + admin notification (Nodemailer / SES)
- Persist submissions to PostgreSQL or MongoDB
- Blog / case studies, team profiles, testimonials carousel
- SEO structured data + analytics
- Admin dashboard for content & submissions
