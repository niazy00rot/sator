import { useTranslations } from "next-intl";
import { MdPrivacyTip } from "react-icons/md";

export default function PrivacyPage() {
  const t = useTranslations("auth.privacy");

  const sections = [
    "collection",
    "usage",
    "sharing",
    "security",
    "rights",
  ] as const;

  return (
    <section className="mx-auto min-h-dvh max-w-[820px] px-5 pb-16 pt-28 sm:px-8">
      <div className="mb-10 flex items-start gap-4">
        <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[var(--primary-color)] text-white shadow-[0_10px_24px_rgba(228,60,0,.18)]">
          <MdPrivacyTip size={24} />
        </span>
        <div>
          <p className="mb-2 text-sm font-black text-[var(--primary-color)]">{t("eyebrow")}</p>
          <h1 className="text-4xl font-black tracking-tight text-[var(--foreground)]">{t("title")}</h1>
        </div>
      </div>

      <div className="space-y-4">
        {sections.map((section) => (
          <article
            key={section}
            className="rounded-3xl border border-[var(--foreground)]/8 bg-[var(--surface-color)]/35 p-6 sm:p-7"
          >
            <h2 className="mb-3 text-lg font-black text-[var(--foreground)]">
              {t(`${section}.title`)}
            </h2>
            <p className="text-sm leading-7 text-[var(--foreground)]/65">
              {t(`${section}.text`)}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
