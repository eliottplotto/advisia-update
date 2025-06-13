import type {StructureResolver} from 'sanity/structure'

import { RiFolderFill, RiListUnordered, RiChatSmile2Fill, RiSettings5Fill } from '@remixicon/react'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Admin')
    .items([
      S.documentTypeListItem('project').title('Projets').icon(RiFolderFill),
      S.documentTypeListItem('service').title('Services').icon(RiListUnordered),
      S.documentTypeListItem('temoignage').title('Témoignages').icon(RiChatSmile2Fill),
      S.divider(),
      S.documentTypeListItem('settings').title('Paramètres du site').icon(RiSettings5Fill),
    ])
