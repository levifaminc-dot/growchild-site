import type { APIRoute } from 'astro';
import { getNewsArticles } from '../lib/sanity';

const siteUrl = 'https://growchild-initiative.ifexls.chatgpt.site';
const staticPaths = [
  '/', '/about/', '/where-we-work/', '/our-approach/', '/safeguarding/',
  '/our-work/', '/partnerships/', '/resources/', '/news/', '/contact/',
  '/privacy/', '/terms/',
];

const escapeXml = (value: string) => value.replace(/[<>&'\"]/g, (character) => ({
  '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;',
})[character] ?? character);

export const GET: APIRoute = async () => {
  const articles = await getNewsArticles();
  const urls: Array<{ loc: string; lastmod?: string }> = [
    ...staticPaths.map((path) => ({ loc: `${siteUrl}${path}` })),
    ...articles.map((article) => ({ loc: `${siteUrl}/news/${article.slug}/`, lastmod: article.updatedAt ?? article.publishedAt })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(({ loc, lastmod }) => `  <url><loc>${escapeXml(loc)}</loc>${lastmod ? `<lastmod>${escapeXml(lastmod)}</lastmod>` : ''}</url>`).join('\n')}\n</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
