import { Content, Excerpt, Links, Meta, Title, Guid } from "./common";

interface CarouselItem {
  image: string;
  description: string;
}

interface FeatureCategory {
  title: string;
  description: string;
}

interface AcfMedias {
  title: string;
  description: string;
  image_url: string;
  apartments_section: {
    title: string
    description: string
    image_1: string
    image_2: string
  };
  carousel: CarouselItem[];
  feature_category: FeatureCategory[];
}

export interface ApiResponseUnionChannel {
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
