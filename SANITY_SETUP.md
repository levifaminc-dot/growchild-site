# GROWCHILD Newsroom setup

The website is connected to the `GROWCHILD Newsroom` Sanity project (`jxllxpyw`) and its public `production` dataset.

## Required environment variables

Copy `.env.example` to `.env` and set:

```text
PUBLIC_SANITY_PROJECT_ID="your-project-id"
PUBLIC_SANITY_DATASET="production"
```

These values are public identifiers. Do not add a write token to the website.

## Studio

Run `npm run studio` to open the GROWCHILD Newsroom. The embedded Studio is also built at `/studio/` when the two environment variables are present.

The Studio includes:

- News articles with draft, review and published editorial states
- Authors and positions
- Reusable news categories
- Cover images and article images with required alternative text
- Photo credits and source/licence links
- Publication dates, featured stories and SEO fields

## Sanity project settings

In Sanity Manage, add these CORS origins with authenticated requests enabled:

- The local development origin, such as `http://localhost:4321`
- `https://growchild-initiative.ifexls.chatgpt.site`

Use a public dataset for published news. Drafts and non-published editorial states are excluded by the website queries.

## Publishing workflow

Because the website is statically generated, publishing an article in Sanity must be followed by a website build and deployment. The sitemap automatically includes every published article during that build.
