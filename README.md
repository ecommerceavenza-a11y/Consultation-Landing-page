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

The form sends consultation requests directly from the visitor's browser to `rumbamanjit886@gmail.com` through FormSubmit. This browser submission is required because FormSubmit validates the page origin. The first submission triggers a one-time activation email from FormSubmit. Open that email and select **Activate Form**. Check Spam if it is missing, and use the latest activation email for the deployed website. Activation must be completed in the recipient's inbox; changing the website code cannot activate email delivery.

Until activation is complete, or if a submission fails or times out, visitors see a plain-language error and a WhatsApp button with their submitted details pre-filled. They must send that message themselves in WhatsApp. The form preserves their input and only redirects to `/thank-you` after FormSubmit confirms acceptance. Requests time out after 20 seconds so the submit button does not stay disabled indefinitely.

## Deploy to Vercel

1. Import this project into Vercel.
2. Keep the detected framework as **Next.js**.
   Keep the Output Directory at its default (`.next`) and the Build Command as `npm run build`.
3. Add `NEXT_PUBLIC_SITE_URL` with the final production URL, such as `https://example.com`.
4. Optionally add `NEXT_PUBLIC_VIMEO_VIDEO_URL` with your Vimeo video URL to replace the public digital marketing sample (`https://vimeo.com/945577561`) on the thank-you page.
5. Deploy.
6. Submit the form once and complete the FormSubmit activation email if requested.

The project does not require a database or SMTP password.
