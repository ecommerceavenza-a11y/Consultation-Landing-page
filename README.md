# AI Manjeet Consultation Landing Page

A focused, mobile-first landing page for the AI Manjeet free digital marketing consultation.

## Included

- Next.js App Router, TypeScript, and Tailwind CSS
- Conversion-focused landing page with a centered CTA and consultation form
- Inline client validation
- Real email submission through FormSubmit
- Redirect to `/thank-you` only after FormSubmit accepts the request
- WhatsApp follow-up button with a pre-filled message
- SEO metadata, Open Graph metadata, `robots.txt`, and sitemap

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Form activation

The form sends consultation requests directly from the visitor's browser to `rumbamanjit886@gmail.com` through FormSubmit. This browser submission is required because FormSubmit validates the page origin. The first submission triggers a one-time activation email from FormSubmit. Open that email and select **Activate Form**. Until activation is complete, the page shows an activation message and does not redirect visitors to the thank-you page.

## Deploy to Vercel

1. Import this project into Vercel.
2. Keep the detected framework as **Next.js**.
3. Add `NEXT_PUBLIC_SITE_URL` with the final production URL, such as `https://example.com`.
4. Add `NEXT_PUBLIC_VIMEO_VIDEO_URL` with the Vimeo video URL to enable the thank-you-page player.
5. Deploy.
6. Submit the form once and complete the FormSubmit activation email if requested.

The project does not require a database or SMTP password.
