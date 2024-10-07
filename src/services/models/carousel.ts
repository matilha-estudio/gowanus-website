import { Links, Title, Guid, Meta } from "./common";

export interface ImageCarousel {
  title: string;
  text: string;
  address: string;
  image: string;
}

interface AcfMedias {
  images: ImageCarousel[];
  page: string;
  description: string;
}

export interface CarouselItem {
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
  class_list: string[];
  acf: any[];
  acf_medias: AcfMedias;
  _links: Links;
}

export type CarouselResponse = CarouselItem[];
