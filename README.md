# 🌿 Paradise Nursery

A React-based online plant shop where users can browse plants, manage a shopping cart, and learn about the store.

## Features

- Browse 18 plants across 3 categories (Air Purifying, Aromatic, Insect Repellent)
- Filter plants by category
- Add plants to cart and manage quantities
- Dynamic cart badge showing total item count
- Order summary with subtotal, tax, and total
- About Us page

## Tech Stack

- **React** — UI components
- **Redux Toolkit** — global cart state (`cartSlice.jsx`)
- **React Router** — client-side navigation
- **Vite** — build tool

## Project Structure

```
src/
├── components/
│   ├── Header.jsx        # Sticky nav with cart badge
│   ├── ProductCard.jsx   # Individual plant card
│   ├── ProductList.jsx   # Plant grid with category filter
│   └── CartItem.jsx      # Single cart row (image, qty, price)
├── pages/
│   ├── LandingPage.jsx   # Hero, features, CTA
│   ├── CartPage.jsx      # Cart with order summary
│   └── AboutUs.jsx       # Company info
├── store/
│   ├── store.js
│   └── cartSlice.jsx     # add / remove / increase / decrease / clear
└── data/
    └── plants.js         # 18 plant records
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
