import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";

export interface Gallery extends MicroCMSListContent {
  title: string;
  description?: string;
  image: MicroCMSImage;
  category?: string[];
  price?: number;
  // English fields (optional)
  title_en?: string;
  category_en?: string[];
}

export interface ArtDrop extends MicroCMSListContent {
  title: string;
  description?: string;
  image: MicroCMSImage;
  category?: string[];
  price?: number;
  price_usd?: number;
  isSoldOut: boolean;
  // English fields (optional)
  title_en?: string;
  category_en?: string[];
}

export interface Announcement extends MicroCMSListContent {
  image?: MicroCMSImage;
  title: string;
  content: string;
  publishDate: string;
  // English fields (optional)
  title_en?: string;
  content_en?: string;
}
