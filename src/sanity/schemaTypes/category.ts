import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A short description of the category (max 200 characters)',
      validation: (Rule) => Rule.max(200).warning('Description should be less than 200 characters'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
});
