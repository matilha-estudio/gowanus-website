import { Links, Meta, Excerpt, Content, Title, Guid } from "./common";

interface RentalProperty {
  title: string;
  text: string;
  image: number;
}

interface RentalProperties {
  union_channel: RentalProperty;
  douglass_port: RentalProperty;
  nevins_landing: RentalProperty;
}

interface TheClub {
  title: string;
  text: string;
  video: number;
}

interface Services {
  title: string;
  text: string;
  image_1: number;
  image_2: number;
}

interface Image {
  id: number;
  url: string;
}

interface Gif {
  id: number;
  url: string;
}

interface Images {
  image: Image;
  gif: Gif;
}

interface GowanusIsCaling {
  text: string;
  images: Images[]
}

interface Acf {
  rental_properties: RentalProperties;
  the_club: TheClub;
  services: Services;
}

interface AcfMedias {
  union_channel_image_url: string;
  douglass_port_image_url: string;
  nevins_landing_image_url: string;
  the_club_video_url: string;
  services_image_1: string;
  services_image_2: string;
  gowanus_is_calling: GowanusIsCaling;
}

export interface ApiResponseHomePage {
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
