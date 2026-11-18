"use client";

import { FormEvent, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { MdEmail, MdLock, MdPerson, MdPhone, MdVisibility, MdVisibilityOff } from "react-icons/md";

import { Link } from "@/i18n/navigation";

export default function SignupPage() {
  const t = useTranslations("auth.signup");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    document.title = "Sign up | Sator";
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="grid min-h-dvh lg:grid-cols-[1.05fr_.95fr]">
      <div className="flex items-center justify-center px-5 py-28 sm:px-10 lg:px-16">
        <div className="w-full max-w-[460px]">
          <div className="mb-7">
            <p className="mb-2 text-sm font-black text-[var(--primary-color)]">{t("eyebrow")}</p>
            <h1 className="text-4xl font-black tracking-tight text-[var(--foreground)]">{t("title")}</h1>
            <p className="mt-3 text-sm leading-6 text-[var(--foreground)]/55">{t("description")}</p>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-4">
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-[var(--foreground)]">{t("name")}</span>
              <span className="flex h-14 items-center gap-3 rounded-2xl border border-[var(--foreground)]/10 bg-[var(--surface-color)]/45 px-4 transition focus-within:border-[var(--primary-color)] focus-within:ring-4 focus-within:ring-[var(--primary-color)]/10">
                <MdPerson size={20} className="shrink-0 text-[var(--foreground)]/45" />
                <input type="text" required autoComplete="name" placeholder={t("namePlaceholder")} className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[var(--foreground)]/35" />
              </span>
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-[var(--foreground)]">{t("email")}</span>
                <span className="flex h-14 items-center gap-3 rounded-2xl border border-[var(--foreground)]/10 bg-[var(--surface-color)]/45 px-4 transition focus-within:border-[var(--primary-color)] focus-within:ring-4 focus-within:ring-[var(--primary-color)]/10">
                  <MdEmail size={20} className="shrink-0 text-[var(--foreground)]/45" />
                  <input type="email" required autoComplete="email" placeholder={t("emailPlaceholder")} className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[var(--foreground)]/35" />
                </span>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-[var(--foreground)]">{t("phone")}</span>
                <span className="flex h-14 items-center gap-3 rounded-2xl border border-[var(--foreground)]/10 bg-[var(--surface-color)]/45 px-4 transition focus-within:border-[var(--primary-color)] focus-within:ring-4 focus-within:ring-[var(--primary-color)]/10">
                  <MdPhone size={20} className="shrink-0 text-[var(--foreground)]/45" />
                  <input type="tel" required autoComplete="tel" placeholder={t("phonePlaceholder")} className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[var(--foreground)]/35" />
                </span>
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-sm font-bold text-[var(--foreground)]">{t("password")}</span>
              <span className="flex h-14 items-center gap-3 rounded-2xl border border-[var(--foreground)]/10 bg-[var(--surface-color)]/45 px-4 transition focus-within:border-[var(--primary-color)] focus-within:ring-4 focus-within:ring-[var(--primary-color)]/10">
                <MdLock size={20} className="shrink-0 text-[var(--foreground)]/45" />
                <input type={showPassword ? "text" : "password"} required minLength={8} autoComplete="new-password" placeholder={t("passwordPlaceholder")} className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[var(--foreground)]/35" />
                <button type="button" onClick={() => setShowPassword((visible) => !visible)} className="grid size-9 shrink-0 place-items-center rounded-full text-[var(--foreground)]/55 transition hover:bg-[var(--surface-color)] hover:text-[var(--foreground)]" aria-label={showPassword ? t("hidePassword") : t("showPassword")}>
                  {showPassword ? <MdVisibilityOff size={20} /> : <MdVisibility size={20} />}
                </button>
              </span>
            </label>

            <div className="flex items-start gap-3 text-xs leading-5 text-[var(--foreground)]/60">
              <input type="checkbox" required className="mt-1 size-4 accent-[var(--primary-color)]" />
              <span>
                {t("agree")}{" "}
                <Link
                  href="/terms"
                  className="font-bold transition-colors hover:text-[var(--primary-hover)]"
                >
                  {t("terms")}
                </Link>{" "}
                {t("and")}{" "}
                <Link
                  href="/privacy"
                  className="font-bold transition-colors hover:text-[var(--primary-hover)]"
                >
                  {t("privacy")}
                </Link>
                .
              </span>
            </div>

            <button type="submit" className="mt-1 h-14 w-full cursor-pointer rounded-2xl bg-[var(--primary-color)] text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[var(--primary-hover)]">
              {t("submit")}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-[var(--foreground)]/65">
            {t("loginPrompt")}{" "}
            <Link href="/login" className="font-black text-[var(--primary-color)] hover:text-[var(--primary-hover)]">{t("loginLink")}</Link>
          </p>
        </div>
      </div>

      <div className="relative hidden overflow-hidden bg-[var(--primary-color)] lg:block">
        <div className="absolute -end-24 -top-24 size-72 rounded-full border-[50px] border-white/10" />
        <div className="absolute -bottom-32 -start-20 size-96 rounded-full bg-[#ff7a38]/25" />
        <div className="absolute bottom-[12%] end-[10%] w-[80%] text-end">
          <div className="mb-8 flex items-center justify-end gap-3 text-white/80">
            <span className="text-sm font-bold tracking-[.18em]">{t("visualEyebrow")}</span>
            <span className="h-px w-12 bg-white/50" />
          </div>
          <h2 className="text-5xl font-black leading-[1.12] text-white">{t("visualTitle")}</h2>
          <p className="ms-auto mt-5 max-w-md text-lg leading-8 text-white/75">{t("visualDescription")}</p>
        </div>
      </div>
    </section>
  );
}