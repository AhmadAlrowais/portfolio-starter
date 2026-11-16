# Yara Al-Mansouri · Portfolio

A bilingual (English / Arabic) portfolio built from the Portfolio Summit 2026 CV.

**Live site:** https://ahmadalrowais.github.io/portfolio-starter/

## What's inside

- **Every part of the CV in `data/cv.js`**: summary, highlights, all 12 roles, 8 projects, skills, education, 20 certifications, awards, patents, publications, talks, media, leadership, languages and interests. Components only read from it.
- **English and Arabic**: `/` and `/ar/`, with a full right-to-left layout and Arabic typography (IBM Plex Sans Arabic + Amiri). This fits Yara's work on Arabic interfaces.
- **A case study for each project** at `/projects/<slug>` (and `/ar/projects/<slug>`), told as problem → action → result.
- **Interactive pieces**: dark mode that remembers your choice, a mobile menu, the nav highlighting the section you're reading, a reading progress bar, counters that animate, filters for the certifications, copy buttons, and a contact form that opens your email app.
- **Accessibility**: skip link, visible keyboard focus, labelled controls, and it respects reduced-motion settings. Everything is readable even with JavaScript off.
- **Self-hosted fonts** in `app/fonts` (SIL Open Font License), so no requests go to outside servers.

## Run it locally

```bash
npm install
npm run dev
```

---

# Portfolio Summit · Starter

Turn the CV you were given into a live portfolio website.
Built with **Next.js (App Router)**, **JavaScript** and **Tailwind CSS**, deployed for free on **GitHub Pages**.

---

## 1. Get started

You need **Node.js 20 or newer** ([download](https://nodejs.org)) and **Git**.

1. Click **Fork** (top right of this page), then **Create fork**. This copies the repo to your GitHub account.
2. Clone your fork and run it:

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
npm install
npm run dev
```

3. Open http://localhost:3000. Changes show up as soon as you save.

## 2. Add your CV

Everything on the site comes from **one file: `data/cv.js`**.
Replace the placeholder text with the information from your CV: personal info, education, experience, projects, skills and achievements.

- Each project gets its own page at `/projects/<slug>`. Keep slugs short and lowercase, like `weather-app`.
- Your photo: put it in `assets/` and change the import in `app/page.js`.
- A downloadable CV: put the PDF in `public/` and set `cvFile` in `cv.js`.

> Don't hard-code CV text inside components. Keep it in `cv.js`, and let the components read from it.

## 3. Make it yours

The starter is intentionally plain. The design is your job.

| File | What it does |
| --- | --- |
| `data/cv.js` | All your CV content |
| `app/layout.js` | Shared frame (navbar, footer), font, page title |
| `app/page.js` | The home page and its sections |
| `app/projects/[slug]/page.js` | One page per project |
| `components/` | Reusable pieces: `Navbar`, `Section`, `ProjectCard`, `Footer` |
| `app/globals.css` | Global styles and your theme colors |

Ideas: a mobile menu, dark mode, subtle animations, an Arabic version (`lang="ar" dir="rtl"`), better typography.

## 4. Deploy to GitHub Pages

1. In your fork, open the **Actions** tab and click **I understand my workflows, go ahead and enable them**. GitHub turns off workflows in forks until you do this, so without it nothing deploys.
2. Go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main`:

```bash
git add .
git commit -m "Add my CV"
git push
```

4. Open the **Actions** tab and wait for the green check. Your site is live at:
   `https://<your-username>.github.io/<repo-name>/`

Every push to `main` deploys again automatically.

**Custom domain or a `<username>.github.io` repo?** In `.github/workflows/deploy.yml`, set `NEXT_PUBLIC_BASE_PATH` to `""`. For a custom domain, also add a `public/CNAME` file containing your domain.

### Things that work differently on GitHub Pages

GitHub Pages only hosts static files, with no server. So:

- **Images:** import them (`import photo from "@/assets/me.jpg"`) instead of using `/public` paths.
- **Links to files in `public/`:** use `withBase("/file.pdf")` from `lib/withBase.js`.
- **No server features:** no API routes, Server Actions or middleware. For a contact form, use a form service or a `mailto:` link.

Run `npm run build` before you push. If it builds locally, it will deploy.

## 5. Judging criteria

| Criterion | Weight |
| --- | --- |
| Functionality & Responsiveness: working features, interactive elements, stability, works on all devices | 25% |
| Visual Design & Creativity: visual appeal, originality, typography, color consistency | 20% |
| User Experience & Navigation: easy navigation, clear hierarchy, readability, accessibility | 20% |
| Content Structure & Storytelling: how well the CV becomes an engaging professional portfolio | 20% |
| CV Accuracy & Completeness: content matches the provided CV, nothing missing | 15% |

## 6. Submission

Submit the link to your **live site** and your **GitHub repo**.

## Learn more

- [Next.js Learn](https://nextjs.org/learn) · [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
