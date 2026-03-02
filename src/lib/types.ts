import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";

export interface Gallery extends MicroCMSListContent {
  title: string;
  description?: string;
  image: MicroCMSImage;
  category?: string[];
  price?: number;
}

export interface ArtDrop extends MicroCMSListContent {
  title: string;
  description?: string;
  image: MicroCMSImage;
  category?: string[];
  price?: number;
  isSoldOut: boolean;
}

export interface Announcement extends MicroCMSListContent {
  title: string;
  content: string;
  publishDate: string;
}
