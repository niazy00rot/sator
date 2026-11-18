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
      className="grid h-10 min-w-10 bg-[var(--background)] place-items-center rounded-full border border-[var(--foreground)]/10 px-2.5 text-[12px] font-black text-[var(--foreground)] transition-colors hover:bg-[var(--surface-color)] cursor-pointer"
      aria-label="Change language"
    >
      {locale === "en" ? "Ar" : "En"}
    </button>
  );
}
