import { Links, Meta, Content, Excerpt, Title, Guid } from "./common";

interface Service {
  title: string;
  description: string;
}

interface Acf {
  title: string;
  subtitle: string;
  image_1: number;
  image_2: number;
  services: Service[];
}

interface AcfMedias {
  image_url_1: string;
  image_url_2: string;
}

export interface ApiResponseService {
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
  acf: Acf;
  featured_image_src: string | null;
  featured_image_src_square: string | null;
  acf_medias: AcfMedias;
  _links: Links;
}
