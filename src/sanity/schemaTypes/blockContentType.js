import { defineType, defineArrayMember } from 'sanity';
import { ImageIcon, CodeIcon } from '@sanity/icons';

/**
 * This is the schema type for block content used in the post document type
 */

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    // Standard text blocks
    defineArrayMember({
      type: 'block',
      title: 'Block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Heading 2', value: 'h2' },
        { title: 'Heading 3', value: 'h3' },
        { title: 'Heading 4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
          { title: 'Underline', value: 'underline' },
          { title: 'Strike', value: 'strike-through' },
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'URL',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: Rule => Rule.uri({
                  scheme: ['http', 'https', 'mailto', 'tel']
                })
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                type: 'boolean',
                initialValue: true,
              },
            ]
          },
        ],
      },
    }),
    
    // Image block
    defineArrayMember({
      type: 'image',
      icon: ImageIcon,
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility',
          validation: Rule => Rule.required().error('Alternative text is required'),
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
        {
          name: 'fullWidth',
          type: 'boolean',
          title: 'Full Width',
          description: 'Should this image span the full width of the container?',
          initialValue: false,
        },
      ],
    }),
    
    // Code block
    defineArrayMember({
      type: 'object',
      name: 'code',
      title: 'Code Block',
      icon: CodeIcon,
      fields: [
        {
          name: 'language',
          type: 'string',
          title: 'Language',
          options: {
            list: [
              { title: 'JavaScript', value: 'javascript' },
              { title: 'TypeScript', value: 'typescript' },
              { title: 'HTML', value: 'html' },
              { title: 'CSS', value: 'css' },
              { title: 'JSON', value: 'json' },
              { title: 'Bash', value: 'bash' },
            ],
          },
        },
        {
          name: 'code',
          type: 'text',
          title: 'Code',
        },
        {
          name: 'filename',
          type: 'string',
          title: 'Filename',
          description: 'Optional: Add a filename to display above the code block',
        },
      ],
      preview: {
        select: {
          language: 'language',
          code: 'code',
          filename: 'filename',
        },
        prepare({ language, code, filename }) {
          const title = filename || 'Code Block';
          const codePreview = code ? code.substring(0, 50) + (code.length > 50 ? '...' : '') : '';
          const subtitle = language ? `${language.toUpperCase()}${codePreview ? `: ${codePreview}` : ''}` : '';
          return {
            title: title,
            subtitle: subtitle,
            media: CodeIcon,
          };
        },
      },
    })
  ],
  
  validation: Rule => [
    Rule.custom(blocks => {
      const emptyBlocks = blocks?.filter(block => 
        block._type === 'block' && 
        block.children.every(span => span.text === '')
      );
      
      if (emptyBlocks?.length > 0) {
        return 'Empty text blocks are not allowed';
      }
      return true;
    }),
  ],
});
