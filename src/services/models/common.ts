export interface Link {
  href: string;
}

export interface LinkItem {
  href: string;
  embeddable?: boolean;
  count?: number;
  templated?: boolean;
}

export interface LinksBlog {
  self: Link[];
  collection: Link[];
  about: Link[];
  author: Link[];
  replies: Link[];
  'version-history': { count: number; href: string }[];
  'wp:attachment': Link[];
  'wp:term': { taxonomy: string; embeddable: boolean; href: string }[];
  curies: { name: string; href: string; templated: boolean }[];
}

export interface Links {
  self: LinkItem[];
  collection: LinkItem[];
  about: LinkItem[];
  'wp:attachment': LinkItem[];
  curies: LinkItem[];
}

export interface AuthorInfo {
  display_name: string;
  author_link: string;
}

export interface Excerpt {
  rendered: string;
  protected: boolean;
}

export interface Content {
  rendered: string;
  protected: boolean;
}

export interface Title {
  rendered: string;
}

export interface Guid {
  rendered: string;
}

export interface Meta {
  _genesis_block_theme_hide_title: boolean;
  footnotes?: string;
}