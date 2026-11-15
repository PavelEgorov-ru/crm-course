## Project boundaries

- This repository belongs to `PavelEgorov-ru` and is published to GitHub Pages under `/crm-course/`.
- Confirm the authenticated GitHub identity before any write. Use the saved `PavelEgorov-ru` credential only in the current process; do not change the globally active CLI account.
- Never print tokens or save credentials in project files.
- Keep this as a public static learning site, with optional external donations. No accounts or paywalls.
- Author editing uses Pages CMS (`.pages.yml`) with the owner's personal GitHub account; this does not introduce reader accounts. Keep MDX component pages outside the rich-text collection. Ordinary articles live in `src/content/docs/articles/`, with images under `public/images/` and `/crm-course/images/` public URLs.
- Author edits belong in `codex/drafts`. Pages CMS entry point: `https://app.pagescms.org/PavelEgorov-ru/crm-course/codex%2Fdrafts/collection/articles`.
- Pushes to `codex/drafts` update `/crm-course/review/`. The public site is built only from the full commit SHA stored in the GitHub Actions repository variable `PUBLIC_SITE_COMMIT`. Never change that variable or promote content to the public site without Pavel's separate explicit publication command. A save, commit, push, or request to update the review site is not permission to publish publicly.
- Keep the same guarded deployment workflow on `main`; never restore automatic publication of the latest `main` on push. Missing or invalid `PUBLIC_SITE_COMMIT` must fail the build, not fall back to another revision.
- Preserve canonical `/crm-course/` URLs in article sources and CMS media settings. The review renderer rewrites them to `/crm-course/review/`.
- `PROJECT-CONCEPT.md` and `.my-board/` are local user material. Do not include them in Git commits or publication unless separately requested. ChatGPT Pages remains a separate action requiring an explicit request; Pages CMS is the site's authoring editor.
- The current pages demonstrate the website. Write course articles only when the user requests their content.
- The user chose Kanri's documentation layout as the visual reference. Prefer standard Starlight navigation and neutral backgrounds with purple accents.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

For the review version, use `npm run dev:review -- --background`. `npm run build:review` creates the static review build in `dist-review/`; it includes pages marked `draft: true` and requests no indexing. Ordinary `npm run build` creates the public build in `dist/` and excludes those pages.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
