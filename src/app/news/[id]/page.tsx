import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAnnouncementById } from "@/lib/microcms";
import { NewsDetailContent } from "@/components/ui/NewsDetailContent";

export const revalidate = 60;

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  try {
    const announcement = await getAnnouncementById(id);
    return {
      title: `${announcement.title} | THE FAT TATT | お知らせ`,
      description: announcement.content.slice(0, 160),
    };
  } catch {
    return {
      title: "お知らせ | THE FAT TATT",
    };
  }
}

export default async function NewsDetailPage({ params }: Props) {
  const { id } = await params;

  let announcement;
  try {
    announcement = await getAnnouncementById(id);
  } catch {
    notFound();
  }

  return (
    <main className="page-content">
      <NewsDetailContent announcement={announcement} />
    </main>
  );
}
