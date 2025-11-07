# Admin Dashboard

Modern admin workspace built with React, TypeScript, Redux Toolkit, and Material UI’s Toolpad layout. It ships with live data visualizations, CRUD-friendly tables, messaging utilities, and a strongly typed state layer so you can plug in real APIs with minimal effort.

## Highlights

- **Real navigation + layout** – Toolpad’s Dashboard shell wired to `react-router-dom`, so sidebar items, breadcrumbs and route transitions stay in sync.
- **Typed global state** – Redux Toolkit slices for statistics, sales, users, products, charts, and transactions; includes reusable `useAppDispatch` / `useAppSelector` hooks and memoized selectors.
- **Reusable building blocks** – `PageLayout` for consistent page shells and `EmptyState` for graceful blank slates.
- **Data-rich pages** – Analytics dashboards, sales metrics, interactive tables (users/products), detailed forms (new user & product editor), transaction management, messaging center, inbox, reports, feedback, etc.
- **Chart widgets** – Line chart for user metrics, bar chart for sales, plus KPI cards and statistic boxes, all driven by shared data modules.
- **Type-safe mock data** – Seed datasets in `src/data` mirrored by interfaces in `src/Types`, making it straightforward to replace with API calls.

## Tech Stack

- React 19 + TypeScript
- Redux Toolkit & React Redux
- React Router DOM 7
- Material UI 7 & Toolpad Core Dashboard Layout
- MUI X Charts (LineChart, BarChart)
- Vite 7 build tooling
- ESLint 9 + TypeScript ESLint
- Tailwind CSS (via `@tailwindcss/vite`) for utility classes

## Project Structure

src/
components/
AppBar.tsx # Toolpad dashboard shell + router bridge
PageLayout.tsx # Shared page wrapper
EmptyState.tsx # Reusable empty-state block
StatisticsBox.tsx
SaleStatisticsBox.tsx
SalesChart.tsx
LineChart.tsx
UserList.tsx
LastTransactions.tsx
layout/layout.tsx # Sidebar navigation definition
pages/ # Route components (Home, Analytics, Sales, etc.)
data/ # Mock datasets (users, products, charts, transactions)
Redux/
store.ts
hooks.ts
selectors.ts
reducers/ # Slice definitions
Types/ # TS interfaces shared across app
routes/routes.tsx # Route definitions consumed by useRoutes
main.tsx # React entry (BrowserRouter + App)
App.tsx # Provider + route rendering



## Getting Started

### Requirements

- Node.js 20+
- npm 10+

### Install dependencies

```bash
npm install
Run locally
bash

npm run dev
Visit the printed URL (default http://localhost:5173) to explore the dashboard.

Type-check & build
bash

npm run build   # runs `tsc -b` + Vite production build
Preview production bundle
bash

npm run preview
Key Scripts
npm run dev – start Vite dev server with hot reload
npm run build – type-check via tsc -b and output optimized assets
npm run preview – serve the built bundle locally
npm run lint – run ESLint with the TypeScript config
Customization Tips
Hook up real APIs: Replace datasets in src/data/*.ts with fetches (e.g., RTK Query or thunks). Thanks to slice typing, you get compile-time safety.
Extend state: Add new slices under src/Redux/reducers, export actions, and register them in store.ts. Use createSelector in selectors.ts for derived data.
Add pages: Drop a component in src/pages, register it in routes/routes.tsx, and optionally in layout/layout.tsx to expose it in the sidebar.
Styling: MUI theme lives in AppBar.tsx (createTheme). Adjust CSS variables or add Tailwind utility classes via index.css.
Troubleshooting
Navigation not updating: Ensure routes in src/routes/routes.tsx align with segment values in layout/layout.tsx. The Toolpad router bridge expects lowercase paths (/analytics, /sales, etc.).
State not updating tables: All editable grids use processRowUpdate to dispatch update* actions. Confirm the corresponding slice handles the partial payload.
Chart data mismatch: Types in src/Types enforce shape. Update both type and dataset together to avoid compile errors.
