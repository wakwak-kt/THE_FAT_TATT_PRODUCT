import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAnnouncementById } from "@/lib/microcms";

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

function formatDate(dateStr: string) {
  const parts = dateStr.split("-");
  if (parts.length < 3) return "";
  const year = parts[0];
  const month = parseInt(parts[1], 10);
  const day = parseInt(parts[2], 10);
  return `${year}年${month}月${day}日`;
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
      <div className="news-detail">
        <div className="container">
          {announcement.image && (
            <div className="news-detail-image">
              <Image
                src={announcement.image.url}
                alt={announcement.title}
                width={announcement.image.width}
                height={announcement.image.height}
                sizes="(max-width: 768px) 100vw, 720px"
                priority
              />
            </div>
          )}
          <p className="news-detail-date">
            {formatDate(announcement.publishDate)}
          </p>
          <h1 className="news-detail-title">{announcement.title}</h1>
          <div
            className="news-detail-content"
            dangerouslySetInnerHTML={{ __html: announcement.content }}
          />
          <div className="news-detail-back">
            <Link href="/news" className="news-detail-back-link">
              <i className="ri-arrow-left-line"></i>
              お知らせ一覧に戻る
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
