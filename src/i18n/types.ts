import type { ja } from "./locales/ja";
import type { en } from "./locales/en";

export type Translations = typeof ja | typeof en;
export type Locale = "ja" | "en";
