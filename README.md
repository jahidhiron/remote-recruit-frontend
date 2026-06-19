# RemoteRecruit — Frontend

[![License](https://img.shields.io/badge/license-MIT-blue.svg)]()
[![React](https://img.shields.io/badge/react-18-61dafb.svg)]()
[![TypeScript](https://img.shields.io/badge/typescript-5.6-3178c6.svg)]()
[![Vite](https://img.shields.io/badge/vite-6-646cff.svg)]()
[![Tailwind CSS](https://img.shields.io/badge/tailwindcss-3-38bdf8.svg)]()

A frontend application built with **React 18**, **TypeScript**, and **Vite 6** for the RemoteRecruit platform — a fee-free global hiring marketplace.
The project showcases a professional-grade architecture using **Redux Toolkit + Redux Saga**, a custom `useList` hook for paginated list management, an `AuthContext` layer for session verification, and a fully typed Axios instance with silent 401 refresh.

---

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Running the Service](#running-the-service)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Architecture](#architecture)
- [Contributing](#contributing)
- [Code of Conduct](#code-of-conduct)
- [Support](#support)
- [License](#license)

---

## Features

- ⚡ Built with [Vite 6](https://vitejs.dev/) for near-instant HMR and optimized production builds
- ⚛️ [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) in strict mode
- 🎨 [Tailwind CSS 3](https://tailwindcss.com/) with a custom `brand` color scale (`~#1f45ec`) and `navy` dark background (`#0f1829`)
- 🗄️ [Redux Toolkit](https://redux-toolkit.js.org/) + [Redux Saga](https://redux-saga.js.org/) for scalable, side-effect-driven state management
- 💾 [Redux Persist](https://github.com/rt2zz/redux-persist) for seamless session rehydration across page reloads
- 🌐 Professional [Axios](https://axios-http.com/) instance with Bearer token injection, `x-request-id` tracing, silent 401 token refresh, and dev-only request logging
- 🔔 Custom toast notification system built on [react-hot-toast](https://react-hot-toast.com/) with [Lucide](https://lucide.dev/) icons and auto-scaled duration
- 📋 Generic `useList` hook — pagination, sorting, 500 ms debounced search, and global refresh trigger
- 🔒 `AuthContext` layer with session verification on mount (PersistGate-aware)
- 🎞️ Scroll animations via `IntersectionObserver` with fade-left / fade-right / fade-up entrance variants
- 🖊️ Code formatting and linting with [Prettier](https://prettier.io/) & [ESLint](https://eslint.org/)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- [pnpm](https://pnpm.io/) (recommended)

### Clone the repository

```bash
git clone git@github.com:jahidhiron/remote-recruit-frontend.git
cd remote-recruit-frontend
```

### Install dependencies

```bash
pnpm install
```

---

## Environment Variables

Below is an example of the `.env` file used on the local machine for the **RemoteRecruit** project. Refer to the `.env.example` file for guidance.

```env
# App
VITE_APP_ENV=development
VITE_APP_PORT=5173

# API — Base URL for all HTTP requests (no trailing slash)
VITE_API_BASE_URL=https://api.remoterecruit.com/api/v1

# Redux Persist
VITE_REDUX_PERSIST_KEY=remote-recruit
```

> **Important:** Create a `.env.development` file in the root directory and use `.env.example` as a template. Vite loads mode-specific files automatically — use `.env.production` for production builds. Never commit real secrets.

| Variable                 | Description                                                         |
| ------------------------ | ------------------------------------------------------------------- |
| `VITE_APP_ENV`           | Application environment (`development` / `production`)              |
| `VITE_APP_PORT`          | Local dev server port (default `5173`)                              |
| `VITE_API_BASE_URL`      | Base URL for all API requests — no trailing slash                   |
| `VITE_REDUX_PERSIST_KEY` | Storage key used by Redux Persist                                   |

---

## Running the Service

### Development

```bash
pnpm run dev
```

The dev server starts at `http://localhost:5173` by default. API requests matching the path in `VITE_API_BASE_URL` are proxied to the backend, eliminating CORS issues in development.

### Production build

```bash
pnpm run build
```

Runs `tsc -b` for type-checking then `vite build --mode production`.

### Preview production build locally

```bash
pnpm run preview
```

---

## Project Structure

```bash
.
├── src/
│   ├── App.tsx                         # Navbar + Home + Footer + ScrollToTop + NotificationProvider
│   ├── main.tsx                        # Provider + PersistGate + AuthProvider wrapping App
│   ├── index.css                       # Tailwind directives + Inter font + toast animations
│   ├── lib/
│   │   └── utils.ts                    # cn() = twMerge(clsx())
│   ├── services/
│   │   └── config/
│   │       └── index.ts                # Single source of truth for all env vars
│   ├── pages/
│   │   └── Home.tsx                    # Composes all 7 home sections in order
│   ├── data/
│   │   └── mock-data.ts                # FaqItem[] + PricingPlan[] (saga fallback data)
│   ├── utils/
│   │   ├── axios.instance.ts           # Bearer token, x-request-id, dev logs, 401 refresh+retry
│   │   ├── build-url-from-query.ts     # Serialise params object → query string
│   │   ├── get-value-safely.ts         # Dot-notation safe object accessor
│   │   ├── date-format.ts              # formatFullDate, formatRelativeTime, formatShortDate
│   │   ├── copy-to-clipboard.ts        # Clipboard write + toast feedback
│   │   └── capitalize.ts              # capitalize(), titleCase()
│   ├── hooks/
│   │   ├── interfaces/
│   │   │   └── index.ts                # UseListOptions<TFilter> generic interface
│   │   ├── use-list.tsx                # Pagination + sorting + debounced search + refresh
│   │   └── use-scroll-animation.tsx    # IntersectionObserver + useScrollToTop
│   ├── context/
│   │   ├── interfaces/
│   │   │   ├── auth-context-type.interface.ts
│   │   │   └── index.ts
│   │   ├── AuthContext.tsx             # AuthProvider with session verification on mount
│   │   ├── useAuth.ts                  # useAuth() typed context hook
│   │   └── index.ts                    # Barrel re-export
│   ├── store/
│   │   ├── index.ts                    # configureStore + sagaMiddleware + persistor
│   │   ├── typedSelector.ts            # useTypedSelector: TypedUseSelectorHook<RootState>
│   │   ├── actions/
│   │   │   ├── auth.actions.types.ts   # SIGN_IN, SIGN_UP, SIGN_OUT, GET_PROFILE, password actions
│   │   │   ├── faq.actions.type.ts     # FAQ_LIST
│   │   │   └── pricing.actions.type.ts # PRICING_LIST
│   │   ├── slices/
│   │   │   ├── index.ts                # combineReducers(app,auth,faq,pricing) + persistReducer
│   │   │   ├── app.slice.ts            # { loading, refresh } + setLoading + triggerRefresh
│   │   │   ├── auth.slice.ts           # { userDetails, token, isAuthenticated }
│   │   │   ├── faq.slice.ts            # { faqItems, isLoaded }
│   │   │   ├── pricing.slice.ts        # { pricingPlans, isLoaded }
│   │   │   └── interfaces/auth/        # IAuthState, IToken, IUserDetails
│   │   ├── sagas/
│   │   │   ├── index.ts                # rootSaga: AuthSaga + FaqSaga + PricingSaga
│   │   │   ├── auth.saga.ts            # signIn, signUp, signOut, getProfile, forgot/reset/changePassword
│   │   │   ├── faq.saga.ts             # fetchFaqList — API-first + mock fallback
│   │   │   ├── pricing.saga.ts         # fetchPricingList — API-first + mock fallback
│   │   │   ├── types/index.ts          # Callback type
│   │   │   └── interfaces/
│   │   │       ├── action-payload.interface.ts
│   │   │       ├── saga-api-response.interface.ts
│   │   │       ├── base-api-response.interface.ts
│   │   │       ├── auth/               # Payload + response interfaces for all auth operations
│   │   │       ├── faq/response/
│   │   │       └── pricing/response/
│   │   └── services/
│   │       ├── http.client.ts          # Generic httpClient saga
│   │       ├── interfaces/             # HttpClientParams, SagaGenerator, IApiSuccessResponse
│   │       └── utils/
│   │           ├── http-error.ts       # handleHttpError — per-status toast, 404 silent
│   │           └── interfaces/         # ServerErrorResponse, FieldError
│   └── components/
│       ├── layout/
│       │   ├── Navbar.tsx              # Transparent, stacked logo, Sign In + Sign Up, hamburger
│       │   └── Footer.tsx              # #0f1829 bg, stacked logo, 6 social icons
│       ├── common/
│       │   └── ScrollToTop.tsx         # Fixed bottom-right, appears after 400 px scroll
│       ├── ui/
│       │   ├── button.tsx              # forwardRef, variants: primary / outline / ghost / white
│       │   └── badge.tsx               # Variants: default / primary / success / warning / hot
│       ├── helper/notification/
│       │   ├── notifications.tsx       # showToast, successMessage, errorMessage, warningMessage, infoMessage
│       │   ├── notificationProviders.tsx # <NotificationProvider /> — mount once at app root
│       │   └── index.tsx               # Barrel re-export
│       └── home/
│           ├── HeroSection.tsx         # Blue gradient, "RemoteRecruit's Difference", wave SVG
│           ├── FeatureSectionGlobal.tsx # "Global Reach" + FindWorkMockup
│           ├── FeatureSectionFeesFree.tsx # PremiumCardMockup + "Actually Free Hire"
│           ├── FeatureSectionShowcase.tsx # "Custom Profile" + ProfileMockup
│           ├── FeatureSectionHelp.tsx   # AppInterfaceMockup + "Are you ready?" dark bg
│           ├── FaqSection.tsx           # Dispatches faqList, skeleton → accordion
│           └── PricingSection.tsx       # Dispatches pricingList, skeleton → Free+Premium cards
├── index.html
├── vite.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
├── .prettierrc
├── .env.example
├── package.json
└── pnpm-lock.yaml
```

---

## Scripts

| Script          | Description                                                      |
| --------------- | ---------------------------------------------------------------- |
| `dev`           | Start dev server with HMR at `http://localhost:5173`             |
| `build`         | Type-check then bundle for production                            |
| `build:dev`     | Type-check then build in development mode                        |
| `build:prod`    | Type-check then build in production mode                         |
| `preview`       | Serve the production `dist/` folder locally                      |
| `preview:dev`   | Serve the development `dist/` folder locally                     |
| `type-check`    | Run `tsc --noEmit` against `tsconfig.app.json` (zero errors)     |
| `lint`          | Run ESLint with auto-fix across all `.ts` / `.tsx` files         |
| `lint:check`    | Run ESLint in check-only mode (CI-safe, no writes)               |
| `format`        | Format all files with Prettier                                   |
| `format:check`  | Check formatting with Prettier (CI-safe, no writes)              |

---

## Architecture

### Redux Store

The store is configured with Redux Toolkit, Redux Saga middleware, and Redux Persist. Transient slices (`app`) are blacklisted from persistence so `loading` and `refresh` never survive a page reload.

```
store/
├── index.ts              → configureStore + sagaMiddleware.run(rootSaga) + persistStore
├── slices/
│   ├── app.slice.ts      → global loading state + refresh counter
│   ├── auth.slice.ts     → userDetails, token, isAuthenticated
│   ├── faq.slice.ts      → faqItems, isLoaded
│   └── pricing.slice.ts  → pricingPlans, isLoaded
└── sagas/
    ├── index.ts          → rootSaga: all([AuthSaga, FaqSaga, PricingSaga])
    ├── auth.saga.ts      → signIn, signUp, signOut, getProfile, forgot/reset/changePassword
    ├── faq.saga.ts       → API-first + mock fallback
    └── pricing.saga.ts   → API-first + mock fallback
```

**Persisted slices:** `auth`, `faq`, `pricing`  
**Blacklisted slices:** `app` (loading / refresh counter — transient)

---

### API-First + Mock-Data Fallback Pattern

Every worker saga calls the real API first. On any failure — including a 404 when the backend is not yet live — it silently falls back to local mock data. The UI always renders.

```ts
const { error, result }: ISagaApiResponse<IFaqListResponse> = yield call(httpClient, {
  payload: { method: 'get', url: 'faqs' },
  isLoader: true,
})

if (error) {
  yield put(faqSlice.actions.setFaqItems(mockFaqItems)) // silent fallback
} else {
  yield put(faqSlice.actions.setFaqItems(result.data.items))
}
```

---

### HTTP Client

All worker sagas funnel through the generic `httpClient` saga (`store/services/http.client.ts`).

**Responsibilities:**

1. Toggle the global loading indicator (`appSlice.actions.setLoading`)
2. Execute the request via the shared Axios instance
3. On failure: run `handleHttpError` (shows toast, handles 401 retry)
4. Return `{ error, result }` — worker sagas decide whether to fall back to mock data

**`handleHttpError` status map:**

| Status | Behaviour                                              |
| ------ | ------------------------------------------------------ |
| `400`  | Toast — validation error message from response body    |
| `401`  | Toast — session expired; caller retries once           |
| `403`  | Toast — access forbidden                               |
| `404`  | **Silent** — caller falls back to mock data            |
| `422`  | Toast — unprocessable request                          |
| `429`  | Toast — rate limit exceeded                            |
| `500+` | Toast — server error                                   |
| `0`    | **Silent** — network / CORS / timeout                  |

---

### Axios Instance

The shared Axios instance (`src/utils/axios.instance.ts`) provides:

- **Bearer token** — reads `accessToken` from `localStorage` and injects the `Authorization` header on every request
- **Request tracing** — attaches a unique `x-request-id` header for distributed log correlation
- **Dev logging** — grouped `console` logs for every request and response, suppressed in production
- **401 silent refresh** — on a 401 response, automatically POSTs to `/auth/refresh`, stores the new token, and replays the original request once

---

### Auth Context

`AuthProvider` (`context/AuthContext.tsx`) wraps the app inside `PersistGate`. Redux Persist guarantees rehydration before this component renders, so `userDetails` is accurate on first evaluation.

**On mount:** if persisted `userDetails` exist, `GET_PROFILE` is dispatched to verify the session with the server. `authChecking` stays `true` until the callback fires — use it to block protected routes from rendering stale state.

```tsx
// main.tsx
<Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </PersistGate>
</Provider>
```

```ts
// anywhere in the component tree
const { isAuthenticated, user, authChecking } = useAuth()
```

**`AuthContextType`:**

| Field             | Type                    | Description                                              |
| ----------------- | ----------------------- | -------------------------------------------------------- |
| `isAuthenticated` | `boolean`               | Derived from `!!userDetails` in Redux                    |
| `user`            | `IUserDetails \| null`  | Full user object from Redux                              |
| `loading`         | `boolean`               | Reserved for future async auth operations                |
| `authChecking`    | `boolean`               | `true` while the session verification saga is in flight  |

---

### `useList` Hook

Located at `hooks/use-list.tsx`. A generic, reusable hook for any paginated, sortable, filterable list view.

**Options:**

| Option            | Type                | Default           | Description                             |
| ----------------- | ------------------- | ----------------- | --------------------------------------- |
| `fetchFunction`   | `(payload) => void` | required          | Dispatched with the full query payload  |
| `initialPage`     | `number`            | `1`               | Starting page number                    |
| `initialPageSize` | `number`            | `10`              | Items per page                          |
| `initialSort`     | `string`            | `updated_at-desc` | `"column-order"` string                 |
| `initialFilters`  | `Partial<TFilter>`  | `{}`              | Seed filter values                      |
| `enabled`         | `boolean`           | `true`            | Skip auto-fetch on mount when `false`   |

**Returns:** `{ loading, pageSize, sortOption, searchQuery, filters, currentPage, setCurrentPage, setPageSize, setSortOption, setFilters, handleSearch, fetchItems, refetch }`

**Example usage:**

```ts
const { loading, handleSearch, setCurrentPage } = useList({
  fetchFunction: (payload) => dispatch({ type: FAQ_LIST, payload: { data: payload } }),
  initialPageSize: 5,
  initialSort: 'created_at-desc',
})
```

The hook reads `state.app.refresh`. Calling `dispatch(appSlice.actions.triggerRefresh())` after a mutation causes all active `useList` instances to re-fetch automatically.

---

### Notification System

Located at `components/helper/notification/`. Mount the provider once at the app root, then call the helper functions anywhere in the codebase.

**Mount the provider:**

```tsx
// App.tsx
<NotificationProvider />
```

**Available functions:**

```ts
import { successMessage, errorMessage, warningMessage, infoMessage } from '@/components/helper/notification'

successMessage('Profile saved successfully')
errorMessage('Failed to connect to the server')
warningMessage('Your session will expire in 5 minutes')
infoMessage('A new version is available')
```

All functions accept optional `position` and `duration` overrides. Duration auto-scales with message length (capped at 15 seconds).

**Toast colour map:**

| Type      | Background     | Icon colour   | Base duration |
| --------- | -------------- | ------------- | ------------- |
| `success` | `bg-green-50`  | `green-500`   | 4 000 ms      |
| `error`   | `bg-red-50`    | `red-500`     | 6 000 ms      |
| `warning` | `bg-yellow-50` | `yellow-500`  | 5 000 ms      |
| `info`    | `bg-blue-50`   | `blue-500`    | 5 000 ms      |

---

### Redux Persist

| Slice     | Persisted | Reason                                             |
| --------- | --------- | -------------------------------------------------- |
| `app`     | No        | `loading` and `refresh` are transient              |
| `auth`    | Yes       | Session survives page reload                       |
| `faq`     | Yes       | Avoids a redundant API call on every revisit       |
| `pricing` | Yes       | Avoids a redundant API call on every revisit       |

---

# Contributing to RemoteRecruit Frontend

We welcome contributions to this project! To get started, fork the repository and clone it to your local machine. Here are some guidelines to follow:

## Reporting Issues

Please create a new issue for any bugs or suggestions you have. Be sure to provide clear details about the problem, including steps to reproduce.

## Submitting Pull Requests

- Fork the repository and clone it locally.
- Create a new branch (`git checkout -b feature-name`).
- Write your code and run all checks.
- Commit your changes (`git commit -am 'Add new feature'`).
- Push your branch to your fork (`git push origin feature-name`).
- Submit a pull request.

## How to Contribute

1. **Fork the repository**
2. **Clone your fork**
   ```bash
   git clone git@github.com:jahidhiron/remote-recruit-frontend.git
   cd remote-recruit-frontend
   ```
3. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Write your code**, following the existing patterns
5. **Run checks before committing**
   ```bash
   pnpm run type-check
   pnpm run lint
   pnpm run format:check
   ```
6. **Commit and push**
   ```bash
   git commit -am 'feat: add your feature'
   git push origin feature/your-feature-name
   ```

---

## Code of Conduct

We are committed to maintaining a positive and inclusive environment for all contributors. By participating, you agree to uphold these standards and contribute positively to the community.

---

## Support

If you need help or have questions, feel free to reach out:

📧 **Email:** **[namehiron.96@gmail.com](mailto:namehiron.96@gmail.com)**

---

## License

This project is licensed under the MIT License.  
See the [LICENSE](LICENSE) file for details.
