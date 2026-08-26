# Project Overview

This repository is a small Vuetify CLI scaffold that has already been adapted with two employee-portal-style login pages. The current app is not yet a complete employee portal. It has no API layer, no layout directory, no domain modules, no shared portal widgets, and no production navigation shell.

The active app entry is `src/main.js`, which creates the Vue app, registers plugins from `src/plugins/index.js`, and mounts `src/App.vue`. The root component wraps the file-router page outlet with Vuetify's `v-app` and `v-main`.

The repository is not currently available as a Git repository from this working directory. `npm list --depth=0` also reports missing dependencies because `node_modules` is not installed. Version conclusions below are therefore based on `package.json`, `package-lock.json`, and source files.

# Tech Stack

- Framework: Vue 3 + Vite.
- Language: JavaScript only.
- UI library: Vuetify 4.
- Router: `vue-router` with `vue-router/vite` file routing.
- State management: Pinia.
- Styles: Vuetify styles plus `src/styles/settings.scss`; Roboto loaded through `unplugin-fonts`.
- Icons: Material Design Icons through Vuetify's `mdi-svg` icon set and direct `@mdi/js` path imports.
- Linting: ESLint 9 with `eslint-config-vuetify`, configured with `ts: false`.
- Package manager and scripts: npm.

Declared versions in `package.json`:

- `vue`: `^3.5.30`
- `vite`: `^8.0.0`
- `vuetify`: `^4.0.2`
- `vue-router`: `^5.0.3`
- `pinia`: `^3.0.4`
- `@vitejs/plugin-vue`: `^6.0.5`
- `vite-plugin-vuetify`: `^2.1.3`
- `eslint`: `^9.39.4`

Resolved versions in `package-lock.json`:

- `vue`: `3.5.41`
- `vite`: `8.2.1`
- `vuetify`: `4.1.10`
- `vue-router`: `5.2.0`
- `pinia`: `3.0.4`
- `@vitejs/plugin-vue`: `6.0.8`
- `vite-plugin-vuetify`: `2.1.3`
- `eslint`: `9.39.5`
- `eslint-config-vuetify`: `4.7.2`
- `@mdi/js`: `7.4.47`
- `@mdi/font`: `7.4.47`
- `@fontsource/roboto`: `5.3.0`
- `unplugin-fonts`: `2.0.0`
- `sass-embedded`: `1.102.0`
- `@vuetify/mcp`: `0.5.0`

# Directory Structure

Current top-level files and directories relevant to development:

- `AGENTS.md`: project instructions and restrictions.
- `README.md`: Vuetify scaffold documentation.
- `index.html`: Vite HTML entry, links `/layers.css`, sets title to `Welcome to Vuetify 4`, and mounts `#app`.
- `public/layers.css`: declares CSS cascade layers for Vuetify.
- `package.json`: npm scripts and dependencies.
- `package-lock.json`: resolved dependency graph.
- `vite.config.mjs`: Vite, Vue, Vuetify, fonts, and file-router setup.
- `eslint.config.js`: Vuetify ESLint config with TypeScript disabled.
- `src/main.js`: Vue app bootstrap.
- `src/App.vue`: root Vuetify app shell and router outlet.
- `src/router/index.js`: auto-route router setup.
- `src/plugins/index.js`: global plugin registration.
- `src/plugins/vuetify.js`: Vuetify theme and icon setup.
- `src/stores/app.js`: empty Pinia app store skeleton.
- `src/styles/settings.scss`: Vuetify Sass settings hook, currently only comments.
- `src/components/HelloWorld.vue`: scaffold/demo component.
- `src/pages/index.vue`: custom employee-portal login page.
- `src/pages/login-v2.vue`: Vuetify utility-based employee-portal login page.
- `src/assets/logo.svg` and `src/assets/logo.png`: scaffold logo assets.

Directories requested but not present:

- No `src/layouts`.
- No `src/views`.
- No `src/api`, `src/apis`, `src/services`, or HTTP client directory.
- No `src/config`.
- No table, dialog, PDF, calendar, news, or quick-link component modules.

# Existing Layout Architecture

The only global layout is in `src/App.vue`:

- `v-app`
- `v-main`
- `router-view`

There is no reusable layout component and no `layouts` directory. Page-level layout is implemented inside individual page files.

`src/pages/index.vue` uses a custom two-panel full-screen layout:

- `<main class="login-page">`
- Brand/marketing panel on desktop.
- Form panel.
- Mobile-specific brand header.
- Custom scoped CSS with CSS grid, flexbox, `clamp()`, media queries, and `100svh`.

`src/pages/login-v2.vue` uses mostly Vuetify layout components and utilities:

- `v-sheet`
- `v-container`
- header element with Vuetify flex utility classes.
- centered `v-card`.
- `v-row` and `v-col`.
- desktop-only side panel with `d-none d-md-flex`.
- mobile-only top panel with `d-md-none`.
- footer element using Vuetify utility classes.

# Existing Components

Reusable component inventory is minimal:

- `src/components/HelloWorld.vue` is the only component in `src/components`.
- `src/components/README.md` says components in this folder are automatically imported, but the current `vite.config.mjs` does not show an explicit `unplugin-vue-components` plugin. Treat this README as scaffold guidance, not verified active behavior.
- Existing page components are under `src/pages` and are routed automatically.

Current UI component usage includes:

- `v-app`, `v-main`
- `v-sheet`, `v-container`
- `v-row`, `v-col`
- `v-card`
- `v-avatar`
- `v-icon`
- `v-btn`
- `v-chip`
- `v-alert`
- `v-form`
- `v-text-field`
- `v-checkbox`
- `v-divider`
- `v-list`, `v-list-item`
- `v-snackbar`
- `v-img`, `v-kbd` in the scaffold component

Not currently present:

- `v-dialog`
- `v-tabs`
- `v-table` or `v-data-table`
- `v-navigation-drawer`
- `v-app-bar`
- `v-footer`
- PDF preview component
- Calendar component
- iframe component
- News list component
- Quick-link component

# Design / Theme Rules

Vuetify is configured in `src/plugins/vuetify.js`:

- `createVuetify()` is used.
- `theme.defaultTheme` is `system`.
- A `light` theme defines:
  - `primary`: `#002D72`
  - `secondary`: `#FF8200`
- Icons use:
  - `defaultSet: 'mdi'`
  - `aliases` and `mdi` from `vuetify/iconsets/mdi-svg`
- `vuetify/styles` is imported globally.

Vite config passes `src/styles/settings.scss` to `vite-plugin-vuetify`:

- `Vuetify({ autoImport: true, styles: { configFile: 'src/styles/settings.scss' } })`
- `settings.scss` currently contains comments only. No Sass variables are overridden.

Font handling:

- `unplugin-fonts/vite` loads Roboto from Fontsource with weights `100`, `300`, `400`, `500`, `700`, and `900`, normal and italic.
- `src/main.js` imports `unfonts.css`.
- `src/pages/index.vue` sets global body font to `Roboto, "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif`.

CSS layer handling:

- `index.html` links `/layers.css`.
- `public/layers.css` declares `@layer vuetify-core, vuetify-components, vuetify-overrides, vuetify-utilities, vuetify-final;`.

Typography constraints from `AGENTS.md`:

- Use Vuetify 4 / Material Design 3 typography utility classes.
- Do not use old Vuetify 3 classes such as `text-h1` through `text-h6`, `text-subtitle-1`, `text-body-1`, `text-caption`, or `text-overline`.
- Prefer Vuetify typography utilities when they fit the design.
- Responsive typography syntax should place breakpoint after `text-`, for example `text-headline-large text-sm-display-medium`.
- `font-weight-bold` and `text-medium-emphasis` remain valid.
- Use `text-label-small` for overline-like text when needed.

Current implementation reality:

- `src/pages/login-v2.vue` follows the Vuetify 4 typography utility convention, for example `text-title-medium`, `text-body-small`, `text-headline-large`, `text-sm-display-medium`, `text-label-small`.
- `src/pages/index.vue` uses custom scoped CSS for typography, spacing, colors, and responsive behavior.

# Coding Conventions

Observed conventions:

- Vue SFCs use `<script setup>`.
- JavaScript only; no TypeScript.
- Imports use the `@` alias for `src` where applicable.
- Existing JavaScript uses two-space indentation in `.vue` script blocks.
- Functions are simple local functions inside page components.
- Reactive state uses `ref` and `computed` from Vue.
- Form submission is simulated locally with `setTimeout`; there is no real authentication service.
- Vuetify component props are used extensively instead of custom wrappers in `login-v2.vue`.
- Icons in page components are imported from `@mdi/js` and passed with `:icon`.
- Some scaffold code in `HelloWorld.vue` uses icon string names such as `mdi-open-in-new`; production prototype code should prefer the `@mdi/js` pattern already used by both login pages.

Routing conventions:

- Routes are generated from `src/pages/*.vue` through `vue-router/auto-routes`.
- `src/pages/index.vue` maps to `/`.
- `src/pages/login-v2.vue` maps to `/login-v2`.
- No route metadata, guards, nested routes, or layout selection exists yet.

State conventions:

- Pinia is registered globally in `src/plugins/index.js`.
- `src/stores/app.js` exports `useAppStore`.
- The store currently has an empty state and is not used by pages.

API conventions:

- No HTTP dependency such as Axios is declared.
- No `fetch()` usage was found in `src`.
- No API/service/config directory exists.
- No environment variable convention beyond Vite's `import.meta.env.BASE_URL` in router setup and `define: { 'process.env': {} }` in Vite config.

# Reusable Examples

Header:

- Best current example: `src/pages/login-v2.vue`.
- It uses a semantic `header`, `d-flex`, `align-center`, `justify-space-between`, a `v-avatar` logo mark, typography utility classes, and a route button with `to="/"`.

Navigation:

- No production navigation component exists.
- The only route navigation example is the `v-btn` in `src/pages/login-v2.vue` with `to="/"`.
- No `v-app-bar`, `v-navigation-drawer`, nav list, or menu pattern exists.

Footer:

- `src/pages/login-v2.vue` has a simple footer implemented with a semantic `footer` and utility classes.
- `src/pages/index.vue` has `.brand-panel__footer` and `.form-footer` custom CSS examples.
- No reusable `v-footer` pattern exists.

Card:

- Best current example: `src/pages/login-v2.vue` centered `v-card` with `max-width`, `elevation`, `rounded`, `v-row`, and `v-col`.
- Scaffold-only example: `src/components/HelloWorld.vue` uses tonal `v-card` items with prepend slots and external links.

Quick Link:

- No dedicated quick-link component exists.
- Closest example: `src/components/HelloWorld.vue` maps a `links` array to repeated `v-card` link tiles. This is scaffold content, but the repeated-card pattern is reusable.

News List:

- No news list exists.
- Closest structural pattern: `src/pages/login-v2.vue` uses `v-list` and `v-list-item` for a compact list of feature statements.

Tabs / Category Filter:

- No `v-tabs`, category filter, segmented control, or filter-chip group exists.
- Existing `v-chip` usage appears only as a static label in `src/pages/login-v2.vue`.

Dialog:

- No dialog implementation exists.
- Closest transient feedback pattern: `v-snackbar` in both page files.

PDF Preview:

- No PDF preview, iframe, embed, or object usage exists.

Calendar / iframe:

- No calendar component and no iframe usage exists.

Responsive Grid:

- `src/pages/login-v2.vue` uses Vuetify grid breakpoints with `v-row`, `v-col cols="12" md="7"`, `md="5"`, `d-md-none`, `d-none d-md-flex`, and responsive spacing classes such as `pa-6 pa-sm-10 pa-lg-14`.
- `src/pages/index.vue` uses custom CSS grid with `grid-template-columns`, breakpoint media queries at `980px` and `520px`, and viewport height handling with `100svh`.
- `src/components/HelloWorld.vue` uses a simple `v-row` with `v-col cols="12"` and repeated `v-col cols="6"`.

# Dependencies Relevant to Prototype

Directly useful dependencies already declared:

- `vue`: component model, Composition API, reactivity.
- `vite`: development server and build tooling.
- `vuetify`: primary UI component system.
- `vite-plugin-vuetify`: auto-import and Sass settings integration.
- `vue-router`: page routing.
- `vue-router/vite`: file-router route generation.
- `pinia`: shared state, once the prototype needs cross-page state.
- `@mdi/js`: SVG path imports for icons.
- `@mdi/font`: available MDI font package, though current Vuetify config uses `mdi-svg`.
- `@fontsource/roboto` and `unplugin-fonts`: current font loading approach.
- `sass-embedded`: Sass support for Vuetify settings.
- `eslint` and `eslint-config-vuetify`: required lint validation.

Not available and should not be assumed:

- Axios or another HTTP client.
- Date/calendar library.
- PDF viewer library.
- Table helper library.
- Form validation library beyond Vuetify rules.
- i18n library.
- Testing framework.

# Constraints

Important restrictions from `AGENTS.md`:

- Use npm for project commands.
- After every fix, run `npm run lint`.
- Do not run production build as routine validation unless explicitly requested.
- Use JavaScript only.
- Do not add TypeScript syntax.
- Do not add `.ts`, `.mts`, `.d.ts`, `tsconfig`, or TypeScript build flow.
- Vue components should use `<script setup>` and should not add `lang="ts"`.
- Follow existing style and development patterns.
- Use Vuetify 4 typography utilities and avoid old Vuetify 3 typography class names.

Current repository constraints:

- `node_modules` is not installed, so linting and local serving cannot run until dependencies are installed.
- There is no existing API abstraction, layout abstraction, portal shell, or reusable business component library.
- Existing `src/components/README.md` claims auto-imported local components, but the visible Vite config does not include a component auto-import plugin. Verify before relying on implicit local component registration.
- `src/pages/index.vue` contains page-level global style changes through `:global(*)`, `:global(html)`, and `:global(body)`. Reusing this pattern broadly could create cross-page side effects.

# Recommended Prototype Integration Approach

Use the current app as a Vuetify/Vite foundation, but treat most portal functionality as new application work rather than an extension of existing shared modules.

Recommended approach:

- Keep Vue 3, Vite, Vuetify 4, Pinia, and file-router setup unchanged.
- Add prototype pages under `src/pages` to align with the existing file-router convention.
- Introduce reusable portal components under `src/components` only when there is real reuse across prototype screens.
- Prefer Vuetify components and Vuetify 4 typography utilities like `text-title-*`, `text-body-*`, `text-label-small`, `text-headline-*`, and responsive forms such as `text-sm-display-medium`.
- Use `src/pages/login-v2.vue` as the primary style and structure reference for Vuetify-first page composition.
- Use `src/pages/index.vue` only as a reference for custom full-screen responsive layout techniques, not as the default styling model for portal content pages.
- Reuse Vuetify grid and display helpers for RWD before adding page-specific media queries.
- Reuse `@mdi/js` direct icon imports and pass paths to `v-icon` or icon props.
- If API calls become necessary, first define a small JavaScript service layer rather than scattering `fetch()` calls through pages, because no service convention exists yet.
- If layout is needed, create a portal shell deliberately, for example a reusable app header, navigation area, main content outlet, and footer, instead of duplicating page-local header/footer code across pages.
- Do not duplicate Vuetify primitives as custom Button/Card/Dialog/Form wrappers unless repeated product-specific behavior appears.
- Do not create custom typography scales or theme systems before using Vuetify theme colors, props, utility classes, and `settings.scss`.
- Do not introduce new dependencies for tabs, dialogs, cards, forms, tables, icons, or grids; Vuetify already covers these.
- For PDF preview or calendar iframe needs, implement with native browser/Vuetify layout first because no existing dependency or component is present.
