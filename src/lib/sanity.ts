import { createClient, type SanityClient } from '@sanity/client';
import { createImageUrlBuilder, type SanityImageSource } from '@sanity/image-url';
import { defineQuery } from 'groq';
import type { TypedObject } from 'astro-portabletext/types';

export interface NewsImage {
  _type?: 'image';
  asset?: { _ref?: string; _id?: string; url?: string };
  hotspot?: { x: number; y: number; height: number; width: number };
  crop?: { top: number; bottom: number; left: number; right: number };
  alt?: string;
  caption?: string;
  credit?: string;
  sourceUrl?: string;
}

export interface NewsAuthor {
  name: string;
  role?: string;
  bio?: string;
  photo?: NewsImage;
}

export interface NewsCategory {
  title: string;
  slug?: string;
}

export interface NewsArticle {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  contentType: 'news' | 'update' | 'story' | 'announcement';
  publishedAt: string;
  updatedAt?: string;
  featured?: boolean;
  coverImage: NewsImage;
  body?: TypedObject[];
  author?: NewsAuthor;
  category?: NewsCategory;
  seo?: { title?: string; description?: string };
}

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID?.trim();
const dataset = import.meta.env.PUBLIC_SANITY_DATASET?.trim();

export const sanityConfigured = Boolean(projectId && dataset);

export const sanityClient: SanityClient | null = sanityConfigured
  ? createClient({ projectId, dataset, apiVersion: '2026-09-21', useCdn: false, perspective: 'published' })
  : null;

const imageBuilder = sanityClient ? createImageUrlBuilder(sanityClient) : null;

const NEWS_FIELDS = `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  contentType,
  publishedAt,
  "updatedAt": _updatedAt,
  featured,
  coverImage,
  body,
  author->{name, role, bio, photo},
  category->{title, "slug": slug.current},
  seo
`;

const ARTICLES_QUERY = defineQuery(`
  *[
    _type == "newsArticle" &&
    status == "published" &&
    defined(slug.current) &&
    publishedAt <= now()
  ] | order(featured desc, publishedAt desc) {
    ${NEWS_FIELDS}
  }
`);

const ARTICLE_QUERY = defineQuery(`
  *[
    _type == "newsArticle" &&
    status == "published" &&
    slug.current == $slug &&
    publishedAt <= now()
  ][0] {
    ${NEWS_FIELDS}
  }
`);

export async function getNewsArticles(): Promise<NewsArticle[]> {
  if (!sanityClient) return [];
  try {
    return await sanityClient.fetch<NewsArticle[]>(ARTICLES_QUERY);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.warn(`Sanity news fetch failed; rendering the editorial fallback. ${message}`);
    return [];
  }
}

export async function getNewsArticle(slug: string): Promise<NewsArticle | null> {
  if (!sanityClient) return null;
  try {
    return await sanityClient.fetch<NewsArticle | null>(ARTICLE_QUERY, { slug });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.warn(`Sanity article fetch failed for ${slug}. ${message}`);
    return null;
  }
}

export function getNewsImageUrl(image: NewsImage | undefined, width = 1200, height?: number): string | null {
  if (!imageBuilder || !image?.asset) return image?.asset?.url ?? null;
  let builder = imageBuilder.image(image as SanityImageSource).width(width).fit('crop').auto('format').quality(86);
  if (height) builder = builder.height(height);
  return builder.url();
}

export function formatNewsDate(value: string): string {
  return new Intl.DateTimeFormat('en-NG', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Africa/Lagos' }).format(new Date(value));
}

export function contentTypeLabel(value: NewsArticle['contentType']): string {
  return ({ news: 'News', update: 'Programme update', story: 'Story', announcement: 'Announcement' })[value] ?? 'News';
}
