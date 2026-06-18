# RemoteRecruit — Frontend

[![License](https://img.shields.io/badge/license-MIT-blue.svg)]()
[![React](https://img.shields.io/badge/react-18-61dafb.svg)]()
[![TypeScript](https://img.shields.io/badge/typescript-5.6-3178c6.svg)]()
[![Vite](https://img.shields.io/badge/vite-6-646cff.svg)]()

A modern **React 18 + TypeScript** single-page application built with **Vite**, **Tailwind CSS**, **Redux Toolkit**, and **Redux Saga**. Implements the RemoteRecruit home page with an API-first data strategy and local mock-data fallback — so the UI always renders even when the backend is unavailable.

---

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Architecture](#architecture)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)

---

## Features

- ⚡ Built with [Vite 6](https://vitejs.dev/) for near-instant dev server startup
- ⚛️ [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) with strict mode
- 🎨 [Tailwind CSS 3](https://tailwindcss.com/) with custom `brand` and `navy` color tokens
- 🗄️ [Redux Toolkit](https://redux-toolkit.js.org/) + [Redux Saga](https://redux-saga.js.org/) + [Redux Persist](https://github.com/rt2zz/redux-persist)
- 🔌 API-first data strategy with silent mock-data fallback in every saga
- 🔒 Auth context with persistent session verification on mount
- 🌐 Professional Axios instance — Bearer token injection, `x-request-id` tracing, dev logging, 401 silent token refresh + retry
- 🔔 [react-hot-toast](https://react-hot-toast.com/) with custom JSX renderer (Lucide icons + dismiss)
- 📋 Generic `useList` hook — pagination, sorting, debounced search, and filters
- 🎞️ Scroll animations via `IntersectionObserver`
- 🖊️ Code formatting and linting with Prettier & ESLint

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- [npm](https://www.npmjs.com/) (or pnpm / yarn)

### Clone the repository

```bash
git clone git@github.com:jahidhiron/remote-recruit-frontend.git
cd remote-recruit-frontend
```

### Install dependencies

```bash
npm install
```

---

## Environment Variables

Below is an example of the `.env` file used on the local machine for the **RemoteRecruit** project. Refer to the `.env.example` file for guidance.

```env
# App
VITE_APP_ENV=development
VITE_APP_PORT=4000

# API — Base URL for all HTTP requests (no trailing slash)
VITE_API_BASE_URL=http://localhost:3000/api/v1

# Redux Persist
VITE_REDUX_PERSIST_KEY=remote-recruit
```

> **Important:** Create a `.env.development` file in the root directory and use `.env.example` as a template. Never commit real secrets.

---

## Running the App

### Development

```bash
npm run dev
```

The dev server starts on the port defined by `VITE_APP_PORT` (default **4000**) and proxies all `/api/v1` requests to `VITE_API_BASE_URL` to avoid CORS issues.

### Production build

```bash
npm run build
```

Runs `tsc -b` for type-checking and then `vite build --mode production`.

### Preview production build

```bash
npm run preview
```

---

## Project Structure

```bash
.
├── src/
│   ├── main.tsx                        # Entry — Provider + PersistGate + AuthProvider
│   ├── App.tsx                         # Root layout: Navbar + Home + Footer + Toaster
│   ├── index.css                       # Tailwind directives, Inter font, toast animations
│   ├── vite-env.d.ts                   # Typed ImportMetaEnv for all VITE_* variables
│   │
│   ├── services/
│   │   └── config/index.ts             # Single source of truth for all env vars
│   │
│   ├── lib/
│   │   └── utils.ts                    # cn() = twMerge(clsx())
│   │
│   ├── utils/
│   │   ├── axios.instance.ts           # Axios instance: Bearer, x-request-id, 401 refresh
│   │   ├── build-url-from-query.ts     # Serialise params object → query string
│   │   ├── get-value-safely.ts         # Dot-notation safe object accessor
│   │   ├── date-format.ts              # formatFullDate, formatRelativeTime, formatShortDate
│   │   ├── copy-to-clipboard.ts        # Clipboard write + toast feedback
│   │   └── capitalize.ts               # capitalize(), titleCase()
│   │
│   ├── data/
│   │   └── mock-data.ts                # FaqItem[] + PricingPlan[] fallback data
│   │
│   ├── hooks/
│   │   ├── interfaces/index.ts         # UseListOptions<TFilter> interface
│   │   ├── use-list.tsx                # Generic list hook (pagination, sort, debounce, filters)
│   │   └── use-scroll-animation.tsx    # IntersectionObserver + useScrollToTop
│   │
│   ├── context/
│   │   ├── interfaces/
│   │   │   └── auth-context-type.interface.ts
│   │   ├── AuthContext.tsx             # AuthProvider — verifies persisted session on mount
│   │   ├── useAuth.ts                  # useAuth() hook
│   │   └── index.ts                    # Barrel export
│   │
│   ├── store/
│   │   ├── index.ts                    # configureStore + sagaMiddleware + persistor
│   │   ├── typedSelector.ts            # useTypedSelector: TypedUseSelectorHook<RootState>
│   │   │
│   │   ├── actions/
│   │   │   ├── auth.actions.types.ts   # SIGN_IN/UP/OUT, GET_PROFILE, passwords
│   │   │   ├── faq.actions.type.ts     # FAQ_LIST
│   │   │   └── pricing.actions.type.ts # PRICING_LIST
│   │   │
│   │   ├── slices/
│   │   │   ├── index.ts                # combineReducers + persistReducer
│   │   │   ├── app.slice.ts            # { loading, refresh } + triggerRefresh
│   │   │   ├── auth.slice.ts           # { userDetails, token, isAuthenticated }
│   │   │   ├── faq.slice.ts            # { faqItems, isLoaded }
│   │   │   ├── pricing.slice.ts        # { pricingPlans, isLoaded }
│   │   │   └── interfaces/auth/        # IAuthState, IToken, IUserDetails
│   │   │
│   │   ├── sagas/
│   │   │   ├── index.ts                # rootSaga: AuthSaga + FaqSaga + PricingSaga
│   │   │   ├── auth.saga.ts            # signIn, signUp, signOut, getProfile, passwords
│   │   │   ├── faq.saga.ts             # fetchFaqList — API-first + mock fallback
│   │   │   ├── pricing.saga.ts         # fetchPricingList — API-first + mock fallback
│   │   │   ├── types/index.ts          # Callback type
│   │   │   └── interfaces/
│   │   │       ├── action-payload.interface.ts
│   │   │       ├── saga-api-response.interface.ts
│   │   │       ├── base-api-response.interface.ts
│   │   │       ├── auth/               # Payload + response interfaces
│   │   │       ├── faq/response/
│   │   │       └── pricing/response/
│   │   │
│   │   └── services/
│   │       ├── http.client.ts          # Generic httpClient saga
│   │       ├── interfaces/             # HttpClientParams, SagaGenerator, IApiSuccessResponse
│   │       └── utils/
│   │           ├── http-error.ts       # handleHttpError — per-status toast logic
│   │           └── interfaces/         # ServerErrorResponse, FieldError
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx              # Transparent, stacked logo, Sign In + Sign Up
│   │   │   └── Footer.tsx              # #0f1829 bg, stacked logo, social icons
│   │   ├── common/
│   │   │   └── ScrollToTop.tsx         # Fixed bottom-right button, shows after 400 px
│   │   ├── ui/
│   │   │   ├── button.tsx              # Variants: primary / outline / ghost / white
│   │   │   └── badge.tsx               # Variants: default / primary / success / warning / hot
│   │   ├── helper/notification/
│   │   │   ├── notifications.tsx       # successMessage, errorMessage, warningMessage, infoMessage
│   │   │   ├── notificationProviders.tsx # <Toaster position="bottom-right" />
│   │   │   └── index.tsx               # Barrel export
│   │   └── home/
│   │       ├── HeroSection.tsx
│   │       ├── FeatureSectionGlobal.tsx
│   │       ├── FeatureSectionFeesFree.tsx
│   │       ├── FeatureSectionShowcase.tsx
│   │       ├── FeatureSectionHelp.tsx
│   │       ├── FaqSection.tsx
│   │       └── PricingSection.tsx
│   │
│   └── pages/
│       └── Home.tsx                    # Composes all 7 home sections in order
│
├── .env.development                    # Local dev vars (git-ignored)
├── .env.example                        # Committed template with comments
├── .gitignore
├── .prettierrc
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## Scripts

| Script         | Description                                                     |
| -------------- | --------------------------------------------------------------- |
| `dev`          | Start dev server on `VITE_APP_PORT` with hot-module replacement |
| `build`        | Type-check + production build (`--mode production`)             |
| `build:dev`    | Type-check + development build (`--mode development`)           |
| `preview`      | Serve the production `dist/` locally                            |
| `preview:dev`  | Serve the development `dist/` locally                           |
| `type-check`   | Run `tsc --noEmit` without emitting files                       |
| `lint`         | Run ESLint with auto-fix across all `.ts` / `.tsx` files        |
| `lint:check`   | Run ESLint in check-only mode (CI-safe, no writes)              |
| `format`       | Format all files with Prettier                                  |
| `format:check` | Check formatting with Prettier (CI-safe, no writes)             |

---

## Architecture

### API-First + Mock-Data Fallback

Every worker saga follows the same pattern. The real API is always attempted first. On any failure (including network errors and 404s), the saga silently falls back to local mock data — so the UI always renders, even when the backend is unavailable.

```ts
const { error, result } = yield call(httpClient, {
  payload: { method: 'get', url: 'faqs' },
  isLoader: true,
  authorization: false,
})

if (error) {
  yield put(setFaqItems(mockFaqItems))          // silent fallback
} else {
  yield put(setFaqItems(result?.data ?? mockFaqItems))
}
```

### httpClient Saga

All worker sagas funnel through a single generic `httpClient`. It handles:

1. Toggle global loading indicator (`state.app.loading`)
2. Execute the HTTP request via the shared Axios instance
3. On failure: run `handleHttpError` (shows toast per status code)
4. Retry once if a 401 caused a silent token refresh
5. Return `{ error, result }` — workers decide whether to fall back to mock data

### handleHttpError — Status Code Behaviour

| Status | Behaviour                                              |
| ------ | ------------------------------------------------------ |
| `400`  | Toast: validation error message                        |
| `401`  | Toast: session expired                                 |
| `403`  | Toast: permission denied                               |
| `404`  | **Silent** — callers fall back to mock data            |
| `422`  | Toast: unprocessable request                           |
| `429`  | Toast: too many requests                               |
| `500+` | Toast: server error                                    |
| `0`    | **Silent** — network / CORS / timeout (API offline)    |

### Axios Instance

The shared Axios instance (`src/utils/axios.instance.ts`) handles:

- **Bearer token** — reads `accessToken` from `localStorage` and injects `Authorization` header
- **Request tracing** — adds `x-request-id` header for distributed log correlation
- **Dev logging** — grouped console logs for every request/response (suppressed in production)
- **401 silent refresh** — on a 401 response, automatically POSTs to `/auth/refresh`, updates the stored token, and replays the original request once

### Auth Context

`AuthProvider` wraps the app inside `PersistGate`. On mount, if Redux already has persisted `userDetails` (from a previous session), it dispatches `GET_PROFILE` to verify the session is still valid with the server — then sets `authChecking: false` via callback.

```tsx
const { isAuthenticated, user, authChecking } = useAuth()
```

### useList Hook

A generic list management hook for any paginated data view.

```ts
const { loading, currentPage, setCurrentPage, handleSearch, refetch } = useList({
  fetchFunction: (payload) => dispatch(myListAction(payload)),
  initialPage: 1,
  initialPageSize: 10,
  initialSort: 'created_at-desc',
})
```

Fires automatically on mount and whenever `state.app.refresh` increments. Call `dispatch(appSlice.actions.triggerRefresh())` after any mutation to re-fetch all active lists.

### Redux Persist

| Slice     | Persisted | Reason                                    |
| --------- | --------- | ----------------------------------------- |
| `app`     | No        | `loading` and `refresh` are transient     |
| `auth`    | Yes       | Session survives page reload              |
| `faq`     | Yes       | Avoids redundant API call on revisit      |
| `pricing` | Yes       | Avoids redundant API call on revisit      |

---

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add my feature'`)
4. Push to your branch (`git push origin feature/my-feature`)
5. Open a Pull Request

---

## Support

If you need help or have questions, feel free to reach out:

📧 **Email:** **[namehiron.96@gmail.com](mailto:namehiron.96@gmail.com)**

---

## License

This project is licensed under the MIT License.
