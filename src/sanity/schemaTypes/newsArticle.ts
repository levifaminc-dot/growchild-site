import { DocumentTextIcon } from '@sanity/icons/DocumentText';
import { defineField, defineType } from 'sanity';

export const newsArticle = defineType({
  name: 'newsArticle',
  title: 'News article',
  type: 'document',
  icon: DocumentTextIcon,
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'publishing', title: 'Publishing' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({ name: 'title', title: 'Headline', type: 'string', group: 'content', validation: (rule) => rule.required().max(110) }),
    defineField({
      name: 'slug',
      title: 'URL slug',
      type: 'slug',
      group: 'publishing',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Summary',
      description: 'Used on the News page and in search results.',
      type: 'text',
      rows: 4,
      group: 'content',
      validation: (rule) => rule.required().min(60).max(220),
    }),
    defineField({
      name: 'contentType',
      title: 'Content type',
      type: 'string',
      group: 'publishing',
      options: {
        list: [
          { title: 'News', value: 'news' },
          { title: 'Programme update', value: 'update' },
          { title: 'Story', value: 'story' },
          { title: 'Announcement', value: 'announcement' },
        ],
        layout: 'radio',
      },
      initialValue: 'news',
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'category', title: 'Category', type: 'reference', to: [{ type: 'newsCategory' }], group: 'publishing', validation: (rule) => rule.required() }),
    defineField({ name: 'author', title: 'Author', type: 'reference', to: [{ type: 'author' }], group: 'publishing', validation: (rule) => rule.required() }),
    defineField({
      name: 'coverImage',
      title: 'Cover image',
      type: 'image',
      group: 'content',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', title: 'Alternative text', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'caption', title: 'Caption', type: 'string' }),
        defineField({ name: 'credit', title: 'Photo credit', type: 'string' }),
        defineField({ name: 'sourceUrl', title: 'Source or licence URL', type: 'url', validation: (rule) => rule.uri({ scheme: ['http', 'https'] }) }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'body', title: 'Article body', type: 'blockContent', group: 'content', validation: (rule) => rule.required() }),
    defineField({
      name: 'status',
      title: 'Editorial status (deprecated)',
      type: 'string',
      group: 'publishing',
      description: 'Sanity’s Draft and Published states now control website visibility.',
      deprecated: {
        reason: 'Use Sanity’s Draft and Published workflow. This legacy field no longer controls website visibility.',
      },
      readOnly: true,
      hidden: ({ value }) => value === undefined,
      options: {
        list: [
          { title: 'Draft', value: 'draft' },
          { title: 'In review', value: 'review' },
          { title: 'Published', value: 'published' },
        ],
        layout: 'radio',
      },
      initialValue: undefined,
    }),
    defineField({ name: 'featured', title: 'Feature on News page', type: 'boolean', group: 'publishing', initialValue: false }),
    defineField({ name: 'publishedAt', title: 'Publication date', type: 'datetime', group: 'publishing', validation: (rule) => rule.required() }),
    defineField({
      name: 'seo',
      title: 'Search and social',
      type: 'object',
      group: 'seo',
      fields: [
        defineField({ name: 'title', title: 'SEO title', type: 'string', validation: (rule) => rule.max(65) }),
        defineField({ name: 'description', title: 'SEO description', type: 'text', rows: 3, validation: (rule) => rule.max(160) }),
      ],
    }),
  ],
  orderings: [{ title: 'Publication date, newest', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] }],
  preview: {
    select: { title: 'title', date: 'publishedAt', category: 'category.title', media: 'coverImage' },
    prepare: ({ title, date, category, media }) => ({
      title,
      subtitle: `${category ?? 'Uncategorised'} · ${date ? new Date(date).toLocaleDateString() : 'No date'}`,
      media,
    }),
  },
});
