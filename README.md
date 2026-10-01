# The Glial Initiative website

The public website of The Glial Initiative: React 18, Vite, Tailwind CSS 3, deployed on Vercel.

```bash
npm install
npm run dev      # local development at http://localhost:5173
npm run build    # production build in dist/
npm run lint
```

## Editing content (no coding needed)

Collaborations, outreach entries, events, team members, the resource hub and site settings live as JSON files in [`src/content/`](src/content/). The team edits them through **[Pages CMS](https://app.pagescms.org)**, using the forms defined in [`.pages.yml`](.pages.yml).

**One-time setup** (needs a repo admin):

1. Sign in at https://app.pagescms.org with the GitHub account that owns this repository.
2. Install the Pages CMS GitHub App on the repository when prompted.
3. Open the project and choose **Settings → Collaborators** to invite team members by email. They don't need a GitHub account.

After that, every save in Pages CMS commits to GitHub and Vercel redeploys the site automatically, usually within a couple of minutes. Uploaded images are stored in `public/uploads/`.

What updates automatically:

- **Events** move from *Upcoming* to *Past events* once their date has passed.
- **Outreach** entries are sorted newest first and grouped by year.
- **Collaborations** marked *Coming soon* are shown greyed out with no detail view.

## Forms

All forms (contact, volunteer, translator, partnership, RSVP, resource download, newsletter fallback) post to the Formspree endpoint in `src/content/site.json`. Each submission includes a `form` field and an email subject such as `Website: Volunteer application`, so they are easy to filter. Formspree's free plan has a monthly submission limit, so upgrade it if volume grows.

The newsletter uses Substack's embed once `newsletter.substackUrl` is set in Site settings. Until then, signups arrive in the inbox.

## Design system

- **Type:** Source Serif 4 (headings) and Source Sans 3 (body), self-hosted via Fontsource. The type scale classes (`t-display`, `t-h1` … `t-eyebrow`) are defined in [`src/index.css`](src/index.css).
- **Colour:** tokens are in [`tailwind.config.js`](tailwind.config.js). The brand teal `#47b8a6` is too light for text on white (2.4:1), so text, links and buttons use `teal-600` (`#237568`, 5.5:1). Use `teal-400` only for fills and accents.
- **Accessibility:** skip link, visible focus styles, native `<dialog>` modals, `prefers-reduced-motion` support, and an accessibility menu in the header for text size and high contrast.

## Images

Put optimised images in `public/images/`. To resize and compress a new photo:

```bash
node scripts/optimize-images.mjs path/to/photo.jpg public/images/outreach/my-photo.jpg 1600 80
```
