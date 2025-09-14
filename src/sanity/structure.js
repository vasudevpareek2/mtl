import { DocumentTextIcon, TagIcon, UserIcon } from '@sanity/icons';

export const structure = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      // Blog Posts
      S.listItem()
        .title('Blog Posts')
        .icon(DocumentTextIcon)
        .child(
          S.documentTypeList('post')
            .title('Blog Posts')
            .filter('_type == "post"')
            .child(documentId =>
              S.document()
                .documentId(documentId)
                .schemaType('post')
            )
        ),
      
      // Categories
      S.listItem()
        .title('Categories')
        .icon(TagIcon)
        .child(
          S.documentTypeList('category')
            .title('Categories')
            .filter('_type == "category"')
            .child(documentId =>
              S.document()
                .documentId(documentId)
                .schemaType('category')
            )
        ),
      
      // Authors
      S.listItem()
        .title('Authors')
        .icon(UserIcon)
        .child(
          S.documentTypeList('author')
            .title('Authors')
            .filter('_type == "author"')
            .child(documentId =>
              S.document()
                .documentId(documentId)
                .schemaType('author')
            )
        ),
      
      // Add a divider between our content and the rest of the document types
      S.divider(),
      
      // Add all other document types, but filter out the ones we've added above
      ...S.documentTypeListItems().filter(
        (item) => !['post', 'category', 'author', 'media.tag'].includes(item.getId())
      )
    ]);
