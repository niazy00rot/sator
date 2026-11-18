"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = () => {
    const nextLocale = locale === "en" ? "ar" : "en";

    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button
      type="button"
      onClick={switchLocale}
      className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
      aria-label="Change language"
    >
      {locale === "en" ? "العربية" : "English"}
    </button>
  );
}
