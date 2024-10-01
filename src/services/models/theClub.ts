import { Links, Meta, Title, Guid } from "./common";

interface Image {
  image: string;
}

interface AcfMedias {
  title: string;
  subtitle: string;
  description: string;
  list_images: Image[];
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
