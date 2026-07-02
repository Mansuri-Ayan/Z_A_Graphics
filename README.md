# Z.A Graphics | Premium E-Commerce Platform

![ZA Graphics Cover](https://via.placeholder.com/1200x400/050505/ffffff?text=Z.A+Graphics+Premium+Platform)

**Z.A Graphics** is a high-end, production-ready web application designed for a premium printing and design agency. The platform features an ultra-modern aesthetic, seamless animations, cinematic video backgrounds, and a highly polished e-commerce customer dashboard.

## 🚀 Key Features

* **Cinematic Landing Page:** A breathtaking, full-screen video hero section with glassmorphic overlays and high-impact typography.
* **Premium E-Commerce Dashboards:** A custom-built, loyalty-driven customer portal featuring real-time active order tracking, reward point widgets, and paginated data tables.
* **Flawless Mobile Responsiveness:** Every component, from floating navbars to dynamic product grids, has been stress-tested and perfectly scaled for mobile viewports.
* **High-End Authentication Flow:** Stunning split-screen Login and Registration pages that utilize dark-mode branding, glowing orbs, and bespoke input micro-interactions.
* **Custom UI Architecture:** Completely custom-built UI components (e.g., dropdowns, mobile navigation pills) to replace clunky native browser defaults.

## 🛠 Tech Stack

This project is built on the bleeding edge of modern frontend technologies:

* **Framework:** [React](https://react.dev/) (v19)
* **Build Tool:** [Vite](https://vitejs.dev/) (v6)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v4)
* **Routing:** [React Router](https://reactrouter.com/) (v6 / `createBrowserRouter` architecture)
* **Icons:** [Lucide React](https://lucide.dev/)

## 📂 Project Structure

```text
frontend/
├── src/
│   ├── components/
│   │   ├── feature/       # Reusable complex UI components (Cards, VideoShowcase)
│   │   └── layout/        # Structural components (Navbar, Footer, MobileNav)
│   ├── layouts/           # Contextual Wrappers (CustomerLayout, AdminLayout)
│   ├── pages/
│   │   ├── admin/         # Admin Dashboard Pages
│   │   ├── auth/          # Authentication flows
│   │   ├── customer/      # Loyalty Dashboard, Orders, Profile
│   │   └── public/        # Home, Products, Checkout, Contact
│   ├── assets/            # Static images and cinematic videos
│   ├── App.jsx            # Global providers
│   ├── index.css          # Tailwind entry and global CSS variables
│   └── router.jsx         # createBrowserRouter route definitions
```

## 💻 Getting Started

Follow these instructions to run the platform locally.

### Prerequisites

* Node.js (v18 or higher recommended)
* npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Z_A_Graphics.git
   cd Z_A_Graphics/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## 🎨 Design Philosophy

Z.A Graphics abandons standard, generic layouts in favor of an **"Agency-Style"** aesthetic. It relies on a deep-black base (`#050505`), high-contrast white text, subtle brand-blue accents, and sheer glassmorphic borders (`backdrop-blur`). The platform prioritizes tactile micro-interactions (hover states, scaling) over static presentation.

## 🤝 Roadmap

- [x] Complete frontend UI/UX overhaul.
- [x] Implement E-Commerce routing and layouts.
- [ ] Connect `mock-data` hooks to live backend APIs.
- [ ] Integrate Stripe / Payment gateways for the checkout flow.
- [ ] Implement headless CMS for portfolio and service management.

---
*Developed with focus, precision, and a commitment to world-class design.*
