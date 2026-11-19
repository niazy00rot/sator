"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  MdArrowForward,
  MdDeliveryDining,
  MdLocalDining,
  MdLocationOn,
  MdRestaurant,
  MdSearch,
  MdSchedule,
  MdStar,
  MdVerified,
} from "react-icons/md";

import { Link } from "@/i18n/navigation";

export default function Home() {
  const t = useTranslations("landing.home");

  useEffect(() => {
    document.title = "Sator";
  }, []);

  const categories = [
    { key: "pizza", icon: "🍕", color: "bg-[#FFF1E8]" },
    { key: "burgers", icon: "🍔", color: "bg-[#FCE9D8]" },
    { key: "chicken", icon: "🍗", color: "bg-[#FFF2C9]" },
    { key: "desserts", icon: "🍰", color: "bg-[#F8E8E4]" },
  ] as const;

  const restaurants = [
    { key: "bistro", mark: "B", tag: "featured", rating: "4.9", time: "20-30", icon: "🍝" },
    { key: "grill", mark: "G", tag: "fast", rating: "4.8", time: "25-35", icon: "🍔" },
    { key: "sushi", mark: "S", tag: "top", rating: "4.7", time: "30-40", icon: "🍣" },
  ] as const;

  return (
    <main className="overflow-hidden">
      <section className="relative">
        <div className="pointer-events-none absolute -start-32 top-16 size-72 rounded-full bg-[var(--primary-color)]/5 blur-3xl" />
        <div className="mx-auto grid min-h-[600px] max-w-[1180px] items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
          <div className="relative z-10">
            <h1 className="max-w-[650px] text-[44px] font-black leading-[1.08] tracking-tight text-[var(--foreground)] sm:text-[58px] lg:text-[68px]">
              {t("title")}{" "}
              <span className="text-[var(--primary-color)]">{t("titleAccent")}</span>
            </h1>
            <p className="mt-6 max-w-[560px] text-base leading-8 text-[var(--foreground)]/60 sm:text-lg">
              {t("description")}
            </p>

            <div className="mt-8 flex max-w-[650px] flex-col gap-2 rounded-[22px] border border-[var(--foreground)]/8 bg-[var(--background)] p-2 shadow-[0_18px_50px_rgba(36,32,28,.08)] sm:flex-row">
              <label className="flex h-12 min-w-0 flex-1 items-center gap-3 px-3">
                <MdLocationOn size={21} className="shrink-0 text-[var(--primary-color)]" />
                <input
                  aria-label={t("locationLabel")}
                  placeholder={t("locationPlaceholder")}
                  className="min-w-0 flex-1 bg-transparent text-sm font-bold outline-none placeholder:font-medium placeholder:text-[var(--foreground)]/35"
                />
              </label>
              <Link
                href="/restaurants"
                className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-[var(--primary-color)] px-5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[var(--primary-hover)]"
              >
                <MdSearch size={20} />
                {t("findFood")}
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-sm text-[var(--foreground)]/60">
              <span className="flex items-center gap-2">
                <MdSchedule size={18} className="text-[var(--primary-color)]" />
                {t("fastDelivery")}
              </span>
              <span className="flex items-center gap-2">
                <MdRestaurant size={18} className="text-[var(--primary-color)]" />
                {t("topRestaurants")}
              </span>
            </div>
          </div>

          <div className="relative mx-auto flex aspect-square w-full max-w-[610px] items-center justify-center">
            <div className="absolute inset-[8%] rounded-full bg-[var(--surface-color)]/55" />
            <Image
              src="/landing.png"
              alt="Delicious food"
              width={1100}
              height={1100}
              priority
              className="relative z-10 h-full w-full object-contain drop-shadow-[0_24px_28px_rgba(36,32,28,.12)]"
            />
          </div>

        </div>
      </section>
    </main>
  );
}