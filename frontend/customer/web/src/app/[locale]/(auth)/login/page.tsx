"use client";

import { FormEvent, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { MdEmail, MdLock, MdVisibility, MdVisibilityOff } from "react-icons/md";

import { Link } from "@/i18n/navigation";

export default function LoginPage() {
  const t = useTranslations("auth.login");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    document.title = "Login | Sator";
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="grid min-h-dvh lg:grid-cols-[.95fr_1.05fr]">
      <div className="relative hidden overflow-hidden bg-[var(--primary-color)] lg:block">
        <div className="absolute -start-24 -top-24 size-72 rounded-full border-[50px] border-white/10" />
        <div className="absolute -bottom-32 -end-20 size-96 rounded-full bg-[#ff7a38]/25" />
        <div className="absolute bottom-[12%] start-[10%] w-[80%]">
          <div className="mb-8 flex items-center gap-3 text-white/80">
            <span className="h-px w-12 bg-white/50" />
            <span className="text-sm font-bold tracking-[.18em]">{t("eyebrow")}</span>
          </div>
          <h2 className="max-w-lg text-5xl font-black leading-[1.12] text-white">{t("headline")}</h2>
          <p className="mt-5 max-w-md text-lg leading-8 text-white/75">{t("description")}</p>
        </div>
      </div>

      <div className="flex items-center justify-center px-5 py-28 sm:px-10 lg:px-16">
        <div className="w-full max-w-[430px]">
          <div className="mb-8">
            <p className="mb-2 text-sm font-black text-[var(--primary-color)]">{t("welcome")}</p>
            <h1 className="text-4xl font-black tracking-tight text-[var(--foreground)]">{t("title")}</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-[var(--foreground)]">{t("email")}</span>
              <span className="flex h-14 items-center gap-3 rounded-2xl border border-[var(--foreground)]/10 bg-[var(--surface-color)]/45 px-4 transition focus-within:border-[var(--primary-color)] focus-within:ring-4 focus-within:ring-[var(--primary-color)]/10">
                <MdEmail size={20} className="shrink-0 text-[var(--foreground)]/45" />
                <input type="email" required autoComplete="email" placeholder={t("emailPlaceholder")} className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[var(--foreground)]/35" />
              </span>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-bold text-[var(--foreground)]">{t("password")}</span>
              <span className="flex h-14 items-center gap-3 rounded-2xl border border-[var(--foreground)]/10 bg-[var(--surface-color)]/45 px-4 transition focus-within:border-[var(--primary-color)] focus-within:ring-4 focus-within:ring-[var(--primary-color)]/10">
                <MdLock size={20} className="shrink-0 text-[var(--foreground)]/45" />
                <input type={showPassword ? "text" : "password"} required autoComplete="current-password" placeholder={t("passwordPlaceholder")} className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[var(--foreground)]/35" />
                <button type="button" onClick={() => setShowPassword((visible) => !visible)} className="grid size-9 shrink-0 place-items-center rounded-full text-[var(--foreground)]/55 transition hover:bg-[var(--surface-color)] hover:text-[var(--foreground)]" aria-label={showPassword ? t("hidePassword") : t("showPassword")}>
                  {showPassword ? <MdVisibilityOff size={20} /> : <MdVisibility size={20} />}
                </button>
              </span>
            </label>

            <div className="flex items-center justify-between gap-4 text-sm">
              <label className="flex items-center gap-2 font-medium text-[var(--foreground)]/65">
                <input type="checkbox" className="size-4 accent-[var(--primary-color)]" />
                {t("remember")}
              </label>
              <Link href="/forgot-password" className="font-bold text-[var(--primary-color)] hover:text-[var(--primary-hover)]">{t("forgot")}</Link>
            </div>

            <button type="submit" className="h-14 w-full cursor-pointer rounded-2xl bg-[var(--primary-color)] text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[var(--primary-hover)]">
              {t("submit")}
            </button>
          </form>

          <p className="mt-7 text-center text-sm text-[var(--foreground)]/65">
            {t("signupPrompt")}{" "}
            <Link href="/signup" className="font-black text-[var(--primary-color)] hover:text-[var(--primary-hover)]">{t("signupLink")}</Link>
          </p>
        </div>
      </div>
    </section>
  );
}