import { UserIcon } from '@sanity/icons/User';
import { defineField, defineType } from 'sanity';

export const author = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'role', title: 'Position', type: 'string' }),
    defineField({
      name: 'photo',
      title: 'Portrait',
      type: 'image',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alternative text', type: 'string', validation: (rule) => rule.required() })],
    }),
    defineField({ name: 'bio', title: 'Short biography', type: 'text', rows: 4, validation: (rule) => rule.max(320) }),
  ],
  preview: { select: { title: 'name', subtitle: 'role', media: 'photo' } },
});
