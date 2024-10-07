import { LinksBlog as Links, AuthorInfo, Excerpt, Content, Title, Guid } from "./common";

interface ACFSection {
  image: number | null;
  description: string;
}

interface ACF {
  color: string;
  type: string;
  location: string;
  date: string | null;
  section_1: ACFSection;
  section_2: ACFSection;
  section_3: ACFSection;
}

interface Post {
  id: number;
  date: string;
  date_gmt: string;
  guid: Guid;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: Title;
  content: Content;
  excerpt: Excerpt;
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: {
    _genesis_block_theme_hide_title: boolean;
    footnotes: string;
  };
  categories: number[];
  tags: number[];
  class_list: { [key: number]: string };
  acf: ACF;
  featured_image_src: string | null;
  featured_image_src_square: string | null;
  author_info: AuthorInfo;
  acf_medias: {
    section_1: string | null;
    section_2: string | null;
    section_3: string | null;
  };
  _links: Links;
}

export type PostResponse = Post[];
