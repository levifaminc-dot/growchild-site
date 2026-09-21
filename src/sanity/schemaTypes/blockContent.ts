import { ImageIcon } from '@sanity/icons/Image';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const blockContent = defineType({
  name: 'blockContent',
  title: 'Article content',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Heading 2', value: 'h2' },
        { title: 'Heading 3', value: 'h3' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bulleted list', value: 'bullet' },
        { title: 'Numbered list', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        annotations: [
          defineArrayMember({
            name: 'link',
            title: 'External link',
            type: 'object',
            fields: [
              defineField({
                name: 'href',
                title: 'URL',
                type: 'url',
                validation: (rule) => rule.required().uri({ scheme: ['http', 'https', 'mailto', 'tel'] }),
              }),
              defineField({ name: 'openInNewTab', title: 'Open in a new tab', type: 'boolean', initialValue: false }),
            ],
          }),
        ],
      },
    }),
    defineArrayMember({
      name: 'articleImage',
      title: 'Article image',
      type: 'image',
      icon: ImageIcon,
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', title: 'Alternative text', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'caption', title: 'Caption', type: 'string' }),
        defineField({ name: 'credit', title: 'Photo credit', type: 'string' }),
        defineField({ name: 'sourceUrl', title: 'Source or licence URL', type: 'url', validation: (rule) => rule.uri({ scheme: ['http', 'https'] }) }),
      ],
    }),
  ],
});
