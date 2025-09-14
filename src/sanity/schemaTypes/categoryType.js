import { defineType, defineField } from 'sanity';
import { TagIcon } from '@sanity/icons';

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().min(2).max(50)
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required().min(20).max(200)
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
      description: 'Used for category tags and UI elements',
      options: {
        list: [
          { title: 'Red', value: 'red-500' },
          { title: 'Blue', value: 'blue-500' },
          { title: 'Green', value: 'green-500' },
          { title: 'Purple', value: 'purple-500' },
          { title: 'Pink', value: 'pink-500' },
          { title: 'Indigo', value: 'indigo-500' },
        ],
      },
      initialValue: 'blue-500',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Icon to represent this category',
      options: {
        list: [
          { title: 'Code', value: 'code' },
          { title: 'Lightbulb', value: 'lightbulb' },
          { title: 'Rocket', value: 'rocket' },
          { title: 'Server', value: 'server' },
          { title: 'Mobile', value: 'mobile' },
          { title: 'Globe', value: 'globe' },
          { title: 'Database', value: 'database' },
          { title: 'Shield', value: 'shield' },
        ],
      },
      initialValue: 'code',
      validation: Rule => Rule.required()
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title,
        subtitle: subtitle?.substring(0, 100) + (subtitle?.length > 100 ? '...' : '')
      };
    },
  },
});
