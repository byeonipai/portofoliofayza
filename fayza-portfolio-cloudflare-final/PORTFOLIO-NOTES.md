# Portfolio Final Notes

## Main improvements in this version

- Reordered the page for recruiters: About -> Projects -> Skills -> Experience -> Awards -> Certificates -> Contact.
- Added Awards & Recognition as a text-only section.
- Added organization and period to Experience.
- Simplified project filters to four high-level filters.
- Added measurable thesis metrics and the live Streamlit application link.
- Added Dibimbing Figma, prototype, and case-study links.
- Corrected PWA and Dibimbing descriptions to avoid overclaiming.
- Improved certificate previews so portrait and landscape certificates are not cropped.
- Moved GDSC Best Student and 3rd Best Intern out of Certificates and into Awards.
- Added SEO metadata, Person structured data, robots.txt, a manifest, and a custom 404 page.
- Removed Vercel Analytics and Vercel/Netlify-specific runtime dependencies.
- Converted the project to a provider-neutral static Next.js export for Cloudflare Pages.
- Added Cloudflare-compatible security headers in public/_headers.
- Removed unused v0/shadcn files, placeholder images, old AI-style project mockups, and unused award PDFs/images.

## Files intentionally removed

- netlify.toml
- components.json
- components/ui/button.tsx
- components/tag-pill.tsx
- pnpm-lock.yaml
- pnpm-workspace.yaml
- public/certificates/test
- public/icon-dark-32x32.png
- public/icon-light-32x32.png
- public/placeholder-logo.png
- public/placeholder-logo.svg
- public/placeholder-user.jpg
- public/placeholder.jpg
- public/images/projects/dental-senyum.png
- public/images/projects/explore-jakarta.png
- public/images/projects/java-island.png
- public/images/projects/notes-app.png
- public/images/projects/pwa-story.png
- public/images/projects/go-programming.png
- public/certificates/gdsc-best-student.pdf
- public/certificates/avalon-star-internship.pdf
- public/images/certificates/gdsc-best-student.png
- public/images/certificates/avalon-star-internship.png
- public/images/certificates/dicoding-frontend.png

## Important before publishing

The file `public/fayza-kamila-cv.pdf` was copied from the current CV you supplied. Your website now describes you as an Information Systems graduate because you already have an SKL. Update the CV PDF as well if the PDF still says student or contains an outdated graduation timeline.

## Local commands

```bash
npm install
npm run typecheck
npm run build
```

A successful static build creates the `out/` directory.
