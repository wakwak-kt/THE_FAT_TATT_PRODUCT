"use client";

import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/formatDate";
import { useLanguage } from "@/i18n";
import type { Announcement } from "@/lib/types";

export function NewsDetailContent({ announcement }: { announcement: Announcement }) {
  const { locale, t } = useLanguage();

  // 言語に応じてコンテンツを切り替え
  const title = locale === "en" && announcement.title_en ? announcement.title_en : announcement.title;
  const content = locale === "en" && announcement.content_en ? announcement.content_en : announcement.content;

  return (
    <div className="news-detail">
      <div className="container">
        {announcement.image && (
          <div className="news-detail-image">
            <Image
              src={announcement.image.url}
              alt={title}
              width={announcement.image.width}
              height={announcement.image.height}
              sizes="(max-width: 768px) 100vw, 720px"
              priority
            />
          </div>
        )}
        <p className="news-detail-date">
          {formatDate(announcement.publishDate, locale)}
        </p>
        <h1 className="news-detail-title">{title}</h1>
        <div
          className="news-detail-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <div className="news-detail-back">
          <Link href="/news" className="news-detail-back-link">
            <i className="ri-arrow-left-line"></i>
            {t.news.backLink}
          </Link>
        </div>
      </div>
    </div>
  );
}
