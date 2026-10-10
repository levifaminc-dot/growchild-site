import { DocumentTextIcon } from '@sanity/icons/DocumentText';
import { TagIcon } from '@sanity/icons/Tag';
import { UserIcon } from '@sanity/icons/User';
import type { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('GROWCHILD Content')
    .items([
      S.documentTypeListItem('newsArticle')
        .title('News & Updates')
        .icon(DocumentTextIcon),
      S.divider(),
      S.documentTypeListItem('newsCategory')
        .title('Categories')
        .icon(TagIcon),
      S.documentTypeListItem('author')
        .title('Authors')
        .icon(UserIcon),
    ]);
