import Image from "next/image";
import Link from "next/link";
import ScrollFadeUp from "@/components/ui/ScrollFadeUp";
import type { Announcement } from "@/lib/types";

function formatDate(dateStr: string) {
  const parts = dateStr.split("-");
  if (parts.length < 3) return "";
  const year = parts[0];
  const month = parseInt(parts[1], 10);
  const day = parseInt(parts[2], 10);
  return `${year}.${month}.${day}`;
}

export default function NewsSection({
  announcements,
}: {
  announcements: Announcement[];
}) {
  return (
    <section id="news" className="news-section">
      <div className="container">

        <ScrollFadeUp>
          {announcements.length > 0 ? (
            <div className="news-list">
              {announcements.map((item) => (
                <Link
                  key={item.id}
                  href={`/news/${item.id}`}
                  className="news-card"
                >
                  <div className="news-card-image">
                    <Image
                      src={item.image?.url ?? "/images/no-image.png"}
                      alt={item.title}
                      width={item.image?.width ?? 80}
                      height={item.image?.height ?? 80}
                      sizes="80px"
                    />
                  </div>
                  <div className="news-body">
                    <p className="news-card-date">{formatDate(item.publishDate)}</p>
                    <h3 className="news-title">{item.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="news-empty">
              <i className="ri-newspaper-line"></i>
              <p>現在お知らせはありません</p>
            </div>
          )}
        </ScrollFadeUp>
      </div>
    </section>
  );
}
