"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { MdClose, MdMenu } from "react-icons/md";

import { Link, usePathname } from "@/i18n/navigation";
import LanguageSwitcher from "@/components/shared/LanguageSwitcher";
import ThemeToggle from "@/components/shared/ThemeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("nav");

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/restaurants", label: t("restaurants") },
    { href: "/offers", label: t("offers") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[var(--background)]/90 backdrop-blur-xl dark:border-white/8">
      <div className="mx-auto flex h-[72px] max-w-[1180px] items-center gap-6 px-5 sm:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          aria-label="Sator home"
          onClick={() => setMenuOpen(false)}
        >
          <Image src="/logo.png" alt="Sator logo" width={130} height={40} priority />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-[14px] font-bold transition-colors ${
                  active
                    ? "bg-[var(--primary-color)] text-white"
                    : "text-[var(--foreground)]/65 hover:bg-[var(--surface-color)] hover:text-[var(--foreground)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ms-auto flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />

          <Link
            href="/login"
            className="hidden h-10 items-center rounded-full border border-[var(--foreground)]/10 px-3.5 text-[13px] font-bold text-[var(--foreground)] transition-colors hover:bg-[var(--surface-color)] lg:flex sm:px-5 cursor-pointer"
          >
            {t("login")}
          </Link>

          <Link
            href="/signup"
            className="hidden h-10 items-center rounded-full bg-[var(--foreground)] px-3.5 text-[13px] font-bold text-[var(--background)] transition-transform hover:-translate-y-0.5 lg:flex sm:px-5 cursor-pointer"
          >
            {t("signup")}
          </Link>

          <button
            type="button"
            className="grid size-10 place-items-center rounded-full border border-[var(--foreground)]/10 text-[var(--foreground)] lg:hidden cursor-pointer"
            aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="relative grid size-[21px] place-items-center">
              <MdMenu
                size={21}
                aria-hidden="true"
                className={`absolute transition-all duration-300 ${
                  menuOpen
                    ? "rotate-90 scale-75 opacity-0"
                    : "rotate-0 scale-100 opacity-100"
                }`}
              />
              <MdClose
                size={21}
                aria-hidden="true"
                className={`absolute transition-all duration-300 ${
                  menuOpen
                    ? "rotate-0 scale-100 opacity-100"
                    : "-rotate-90 scale-75 opacity-0"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <nav
        className={`overflow-hidden border-t border-black/5 px-5 lg:hidden dark:border-white/8 ${
          menuOpen
            ? "max-h-[420px] pb-5 pt-3 opacity-100"
            : "max-h-0 pb-0 pt-0 opacity-0"
        } transition-all duration-300 ease-in-out`}
        aria-label="Mobile navigation"
      >
          <div className="mx-auto flex max-w-[1180px] flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-xl px-4 py-3 text-sm font-bold ${
                  (item.href === "/" ? pathname === "/" : pathname.startsWith(item.href))
                    ? "bg-[var(--primary-color)] text-white"
                    : "text-[var(--foreground)] hover:bg-[var(--surface-color)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-xl border border-[var(--foreground)]/10 px-4 py-3 text-center text-sm font-bold text-[var(--foreground)]"
            >
              {t("login")}
            </Link>
            <Link
              href="/signup"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-xl bg-[var(--foreground)] px-4 py-3 text-center text-sm font-bold text-[var(--background)]"
            >
              {t("signup")}
            </Link>
          </div>
      </nav>

    </header>
  );
}