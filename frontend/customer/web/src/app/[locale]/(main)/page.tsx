import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("landing");
  return (
    <>
      <section className="flex-1">
        <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8">
          <h1 className="text-4xl font-black text-[var(--foreground)]">{t("home")}</h1>
        </div>
      </section>
    </>
  );
}