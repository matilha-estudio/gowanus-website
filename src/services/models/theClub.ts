import { Links, Meta, Title, Guid } from "./common";

interface Image {
  image: string;
  text: string;
}

interface Section_2_Images {
  image_1: string;
  image_2: string;
  title: string;
  subtitle: string
  description: string
}

interface Section_4_Images {
  image_1: string;
  image_2: string;
  image_3: string;
  image_4: string;
  title: string;
  subtitle: string
  description: string
}

interface Amenity {
  amenity: string;
}

interface AcfMedias {
  video_header: string;
  title: string;
  subtitle: string;
  description: string;
  list_images: Image[];
  section_1: Section_2_Images[];
  section_2: Section_2_Images[];
  section_3: Section_4_Images[];
  section_4: Section_2_Images[];
  section_5: Section_2_Images[];
  section_6: Section_4_Images[];
  amenitys_union_channel: Amenity[];
  amenitys_douglass_port: Amenity[];
  amenitys_nevins_land: Amenity[];
}

export interface TheClubItem {
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
  parent: number;
  template: string;
  meta: Meta;
  categories: any[];
  class_list: string[];
  acf: any[];
  acf_medias: AcfMedias;
  _links: Links;
}

export type TheClubResponse = TheClubItem[];
