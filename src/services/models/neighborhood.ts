import { Links, Meta, Title, Guid } from "./common";

interface Image {
  image: string;
  description: string;
}

interface AcfMedias {
  title: string;
  subtitle: string;
  image: string;
  image_gif: string;
  second_image: string;
  second_image_gif: string;
  list_images: Image[];
}

export interface NeighborhoodItem {
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
  template: string;
  meta: Meta;
  categories: any[];
  class_list: string[];
  acf: any[];
  acf_medias: AcfMedias;
  _links: Links;
}

export type NeighborhoodResponse = NeighborhoodItem[];
