# Z.A Graphics E-Commerce Platform - Frontend UI

This is the frontend-only repository for the Z.A Graphics e-commerce platform.

**IMPORTANT: PHASE 1 SCOPE**
This phase is 100% frontend UI using static/mock JSON data. There is no backend, no real database, and no live API integration. Authentication is purely simulated at the UI level.

## Tech Stack
- React (JavaScript, no TypeScript)
- Vite
- Tailwind CSS v4
- React Router DOM
- Axios (configured, but unused until API integration phase)

## Folder Structure
```text
frontend/
├── src/
│   ├── assets/           # Static images, logos, etc.
│   ├── components/
│   │   ├── feature/      # Components specific to a single page/domain (e.g. ProductCard)
│   │   └── shared/       # Reusable UI components (Buttons, Modals, Inputs)
│   ├── hooks/            # Custom React hooks
│   ├── layouts/          # Layout wrappers (Public, Customer, Admin)
│   ├── mock-data/        # JSON fixtures simulating API responses
│   ├── pages/            # Page-level components matching the router
│   │   ├── admin/
│   │   ├── customer/
│   │   └── public/
│   ├── utils/            # Helper functions (formatting, validation)
│   ├── App.jsx           # Router configuration
│   └── index.css         # Tailwind configuration & global styles
├── .env.example          # Environment variables template
├── eslint.config.js      # Linter config
└── vite.config.js        # Vite + Tailwind config
```

## Setup Instructions
1. Clone the repository and `cd` into the `frontend` directory.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the local development server.

## Branching & Collaboration Strategy

We have two developers (Ayan and Aabid) working in parallel. To avoid conflicts, follow these guidelines:

### Branch Naming Convention
Create short-lived feature branches off your respective dev branches (`ayan-dev` or `aabid-dev`).
- `feature/ayan-product-detail`
- `feature/aabid-cart-ui`

### Workflow
1. **Never commit directly to `main`.**
2. Work on your specific feature branch.
3. Once complete, open a Pull Request (PR) against `main`.
4. Review each other's PRs before merging.

### Conflict Avoidance
- **Page Ownership:** Clearly divide the pages. For example, Ayan works on Admin pages, while Aabid works on Customer/Public pages.
- **Shared Components:** If you need a shared component (e.g., a Button), communicate before creating it to avoid duplicating work. Put shared components in `src/components/shared`.
- **CSS:** Use Tailwind utility classes. Avoid writing custom CSS in `index.css` unless it's a global theme token.
