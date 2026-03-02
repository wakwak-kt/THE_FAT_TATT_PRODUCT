import { createClient } from "microcms-js-sdk";
import type { Gallery, ArtDrop, Announcement } from "./types";

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
});

export async function getGalleryArtworks(): Promise<Gallery[]> {
  const res = await client.getList<Gallery>({
    endpoint: "gallery",
    queries: {
      orders: "-createdAt",
    },
  });
  return res.contents;
}

export async function getArtDropArtworks(): Promise<ArtDrop[]> {
  const res = await client.getList<ArtDrop>({
    endpoint: "artdrop",
    queries: {
      orders: "-createdAt",
    },
  });
  return res.contents;
}

export async function getAnnouncements(): Promise<Announcement[]> {
  const res = await client.getList<Announcement>({
    endpoint: "announcement",
    queries: {
      orders: "-publishDate",
    },
  });
  return res.contents;
}
