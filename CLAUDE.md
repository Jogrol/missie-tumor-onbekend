# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Gatsby 5 donation site for Missie Tumor Onbekend (Dutch cancer-research charity), deployed to Netlify at steunmissietumoronbekend.nl. Content in Dutch.

## Commands

- `npm run develop` (alias `npm start`) — dev server, bound to `0.0.0.0`, http://localhost:8000
- `npm run build` — production build
- `npm run serve` — serve a production build locally
- `npm run clean` — wipe Gatsby's `.cache`/`public` (use when GraphQL schema or page-creation logic changes and dev server state looks stale)
- `npm run format` — Prettier write across js/jsx/ts/tsx/json/md
- No test suite exists (`npm test` is a stub that exits 1) and there is no `tsconfig.json`/type-check script — TS files are transpiled by Gatsby's Babel pipeline without type checking, so `.ts`/`.tsx` type errors will not be caught by any command here.

## Architecture

**Page creation is data-driven, not file-based.** `gatsby-node.js` queries `allWordpressDataJson` (sourced from the static `src/data/wordpressData.json` via `gatsby-transformer-json`, treated as a filesystem "WordPress" export) and calls `createPage` once per node. The WordPress page `title` is matched against a hardcoded map in `gatsby-node.js` to pick which template renders it:
- `"Home"` → `src/pages/donatePage.tsx`
- the three project titles ("Informatievoorziening & bewustwording", "Ondersteunen van wetenschappelijk onderzoek", "Verbetering inzet zorg") → `src/pages/projectPage.tsx`
- everything else → `src/pages/defaultPage.tsx`

Each node's `uri` (with the `/steun-missie-tumor-onbekend/` WordPress path prefix stripped) becomes the route. To add/change a routed page, edit `src/data/wordpressData.json` and, if it's a new title, add a mapping in `gatsby-node.js`'s `pageType` object — do not create files under `src/pages/` expecting file-system routing for content pages (that only applies to `404.tsx`).

**Page templates receive data via `context: { id }` + a page-level GraphQL query**, typed against a matching model in `src/models/pages/*.model.ts` (e.g. `DonatePageDataModel`). Nested content shapes (hero, video section, project item, patient stories, progress) each have their own model in `src/models/*.model.ts` — when changing the JSON data shape, update the corresponding model and the GraphQL query in the consuming page together. Templates defensively null-check `data.page` and fall back to `{}`/empty arrays for optional sections since `wordpressData.json` entries don't all populate every field.

**Donation flow crosses three layers**: a component collects the form → `src/services/donateRequest.ts` (client-side, POSTs to `/api/donate`) → `src/api/donate.ts` (a Gatsby Function acting as the serverless backend) which calls the pay.nl transaction API using `PAY_API_TOKEN`/`PAY_SERVICE_ID`/`PAY_TEST_MODE` env vars. `donateFrequentlyRequest`/`donateFrequently.ts` mirror this for recurring donations. `src/services/*RequestModel.ts` defines the request/response DTOs; `createErrorResult` (in `src/services/shared/`) is the shared failure-path constructor — reuse it for new service calls rather than inlining error objects. The newsletter signup follows the same client-service → Gatsby-function pattern (`newsletterRequest.ts` → presumably a matching function).

**Env vars** (see `.env.development`, gitignored, loaded via `dotenv` in `gatsby-node.js`): `PAY_API_TOKEN`, `PAY_SERVICE_ID`, `PAY_TEST_MODE`, `SENDGRID_API_KEY`, `SENDGRID_AUTHORIZED_EMAIL`, `GMAIL_ACCOUNT`/`GMAIL_PASSWORD`, `EMAIL_TO`, `WPGRAPHQL_URL`. `WPGRAPHQL_URL` suggests an eventual move to live WPGraphQL sourcing (currently `gatsby-source-wordpress` isn't wired into `gatsby-config.js`'s plugin list — data is sourced from the static JSON file instead).

**Styling**: Tailwind + DaisyUI (`tailwind.config.js`), applied via `gatsby-plugin-postcss`. `src/components/layout.css` holds the few non-utility global styles.

**Static content copy** (donation amount presets/descriptions) lives in `src/content.json`, separate from the WordPress-sourced `wordpressData.json`.
