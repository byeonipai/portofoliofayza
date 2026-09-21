# Deploy to Cloudflare Pages

This portfolio is configured as a static Next.js export.

## Cloudflare Pages build settings

- Production branch: `main`
- Framework preset: `Next.js (Static HTML Export)`
- Build command: `npx next build`
- Build output directory: `out`

Every push to `main` will create a new production deployment automatically.

## Custom domain

After the first successful deployment:

1. Open the Pages project in Cloudflare.
2. Open **Custom domains**.
3. Select **Set up a domain**.
4. Enter your domain and follow the DNS instructions.

For an apex/root domain such as `example.com`, Cloudflare requires the domain to be added as a Cloudflare zone and its nameservers pointed to Cloudflare.
For a subdomain such as `www.example.com`, you can use a CNAME pointing to the generated `*.pages.dev` hostname.
