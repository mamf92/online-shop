# Skretcher Online Shop

Live demo: https://genuine-sundae-0c12fa.netlify.app

Next.js App Router storefront built for the Noroff JavaScript Frameworks assignment. It highlights product browsing, search/sort/filter, cart checkout, and a validated contact form while consuming the Noroff online-shop API.

## Table of Contents

- About
- Features
- Tech Stack
- Getting Started
- API and Data
- App Structure
- State and Forms
- Room for Improvement
- Contact

## About

A small, responsive storefront that fetches products from the Noroff API, lets users search and filter, view details, add to cart with persisted state, and submit a validated contact form. Built with TypeScript, Tailwind, and Next.js 16.

## Features

- Product browse and detail pages with discount badge, price comparisons, tags, and reviews.
- Search, filter (All/Fashion/Shoes/Electronics/Beauty), and sort (title/price/discountedPrice/rating) with URL-driven state.
- Cart and checkout powered by Zustand with persisted storage; quantity adjust, remove, and order summary on success.
- Contact form with react-hook-form and Zod validation (subject, name, email, message) and inline errors.
- Responsive UI with shared header/footer and category hero/tiles.

## Tech Stack

- Next.js 16 (App Router), React 19, TypeScript.
- Tailwind CSS 4, custom Google fonts.
- Zustand for state management and persistence.
- react-hook-form + Zod for forms and validation.
- Noroff API client with typed responses and error handling.

## Getting Started

Prerequisites: Node 18+ recommended.

Install and run:

```
npm install
npm run dev
```

Build and serve production:

```
npm run build
npm start
```

Lint/format (optional):

```
npm run lint
npm run format
```

No environment variables are required.

## API and Data

- Base URL: https://v2.api.noroff.dev
- Endpoints: `/online-shop` (paginated) and `/online-shop/:id`.
- Client-side pagination loops pages because the API lacks server-side filters; sorting is delegated to the API, filtering/search happens in-app.

## App Structure

```
/online-shop
├── app/                      # App Router pages
│   ├── page.tsx              # Home (hero, categories, search/sort/filter)
│   ├── products/[id]/page.tsx# Product detail + reviews
│   ├── categories/[category]/page.tsx
│   ├── cart/page.tsx         # Cart
│   ├── checkout/page.tsx     # Checkout
│   └── checkout/success/page.tsx
├── components/
│   ├── features/             # Domain UI + logic
│   │   ├── products/         # Cards, grid, search UI, product service
│   │   ├── cart/             # Shared cart list
│   │   ├── checkout/         # Success overview
│   │   ├── categories/       # Category hero/divider
│   │   └── contact/          # Contact section/form
│   ├── layout/               # Header, Footer
│   └── ui/                   # Buttons, logo, hero image, etc.
├── lib/noroff/api-client.ts  # API helper
├── store/cartStore.ts        # Zustand cart + persistence
├── schemas/                  # Zod (contact, search)
├── types/                    # Product and API types
├── public/images/            # Assets
└── README.md
```

## State and Forms

- Cart state is handled by Zustand with persisted storage key `cart-storage`; checkout copies cart items into `orderSummary` and clears the cart before redirecting to success.
- Contact form uses `react-hook-form` with `zodResolver` and inline accessibility attributes for errors; submission currently shows a friendly alert and resets the form.

## Room for Improvement

- Add server-side filtering/pagination or caching to avoid fetching the full catalog on every search/sort.
- Harden accessibility (focus states, keyboard controls for dropdowns, aria-live on form errors).
- Replace alert-based contact handling with a real submission endpoint.
- Expand test coverage and error boundaries; improve empty states and loading skeletons.
- More design polish and performance checks (image optimization, bundle trimming).
- Broader backlog is tracked in the GitHub project: https://github.com/mamf92/online-shop

## Contact

- GitHub: https://github.com/Malin-Malin
- GitHub: https://github.com/mamf92
- LinkedIn: https://www.linkedin.com/in/malin-skrettingland
- LinkedIn: https://www.linkedin.com/in/mamf92/
