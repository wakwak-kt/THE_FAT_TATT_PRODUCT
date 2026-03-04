"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollFadeUp from "@/components/ui/ScrollFadeUp";
import { formatDate } from "@/lib/formatDate";
import { useLanguage } from "@/i18n";
import type { Announcement } from "@/lib/types";

export default function NewsSection({
  announcements,
}: {
  announcements: Announcement[];
}) {
  const { locale, t } = useLanguage();

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
                    <p className="news-card-date">
                      {formatDate(item.publishDate, locale)}
                    </p>
                    <h3 className="news-title">{locale === "en" && item.title_en ? item.title_en : item.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="news-empty">
              <i className="ri-newspaper-line"></i>
              <p>{t.news.empty}</p>
            </div>
          )}
        </ScrollFadeUp>
      </div>
    </section>
  );
}
