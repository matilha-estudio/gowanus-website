import { Links, Title, Guid, Meta } from "./common";

interface Image {
  title: string;
  image: string;
}

interface AcfMedias {
  images: Image[];
  page: string;
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
