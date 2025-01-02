import { Content, Excerpt, Links, Meta, Title, Guid } from "./common";

interface AcfMedias {
  page_name: string;
  description: string;
  video_url: string;
  virtual_tour: VirtualTour[]
}

interface VirtualTour {
  title: string;
  virtual_tour_link: string;
  cover: string
}

export interface ApiResponseWalkThrough {
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
  parent: number;
  menu_order: number;
  comment_status: string;
  ping_status: string;
  template: string;
  meta: Meta;
  class_list: string[];
  acf: any[];
  featured_image_src: string | null;
  featured_image_src_square: string | null;
  acf_medias: AcfMedias;
  _links: Links;
}