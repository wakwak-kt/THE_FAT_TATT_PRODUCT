import type { Locale } from "@/i18n/types";

export function formatDate(dateStr: string, locale: Locale): string {
  const parts = dateStr.split("-");
  if (parts.length < 3) return "";
  const year = parseInt(parts[0]);
  const month = parseInt(parts[1]);
  const day = parseInt(parts[2]);

  if (locale === "en") {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${monthNames[month - 1]} ${day}, ${year}`;
  }
  return `${year}.${month}.${day}`;
}
