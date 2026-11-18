import { useTranslations } from "next-intl";

import ThemeToggle from "@/components/shared/ThemeToggle";
import LanguageSwitcher from "@/components/shared/LanguageSwitcher";


export default function Home() {
  const t = useTranslations("landing");
  return (
    <>
      <section>
        <div className="container">
          <h1>{t("home")}</h1>
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </section>
    </>
  );
}