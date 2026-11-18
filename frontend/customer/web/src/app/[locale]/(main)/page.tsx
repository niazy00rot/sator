"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
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

          <div className="relative mx-auto hidden aspect-square w-full max-w-[500px] lg:block">
            <div className="absolute inset-[7%] rounded-full bg-[var(--surface-color)]/80" />
            <div className="absolute inset-[16%] rounded-full bg-[var(--background)] shadow-[0_28px_80px_rgba(36,32,28,.16)] ring-1 ring-[var(--foreground)]/6" />
            <div className="absolute inset-[21%] grid place-items-center rounded-full border-[10px] border-white/70 bg-[var(--primary-color)] shadow-[inset_0_-18px_35px_rgba(136,35,0,.18),0_18px_38px_rgba(228,60,0,.22)] dark:border-white/10">
              <div className="absolute inset-[18%] rounded-full bg-[#FF7A38]" />
              <div className="relative grid size-28 place-items-center rounded-full bg-[var(--background)] shadow-[0_12px_30px_rgba(36,32,28,.18)]">
                <MdLocalDining size={66} className="text-[var(--primary-color)]" />
              </div>
            </div>
            <div className="absolute end-0 top-[12%] rounded-[20px] border border-[var(--foreground)]/8 bg-[var(--background)] p-3.5 shadow-[0_18px_45px_rgba(36,32,28,.12)]">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-full bg-[var(--primary-color)]/10 text-[var(--primary-color)]">
                  <MdDeliveryDining size={25} />
                </span>
                <div>
                  <p className="text-xs text-[var(--foreground)]/45">{t("floatingDelivery")}</p>
                  <p className="text-sm font-black text-[var(--foreground)]">{t("floatingTime")}</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[8%] start-0 rounded-[20px] border border-[var(--foreground)]/8 bg-[var(--background)] p-3.5 shadow-[0_18px_45px_rgba(36,32,28,.12)]">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-full bg-[#FFF2C9] text-[#C88A12]">
                  <MdStar size={24} />
                </span>
                <div className="pe-1">
                  <p className="text-lg font-black text-[var(--foreground)]">4.9</p>
                  <p className="text-xs text-[var(--foreground)]/45">{t("floatingRating")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--foreground)]/5 bg-[var(--surface-color)]/35">
        <div className="mx-auto max-w-[1180px] px-5 py-12 sm:px-8">
          <div className="mb-7 flex items-end justify-between">
            <div>
              <p className="mb-2 text-xs font-black uppercase tracking-[.16em] text-[var(--primary-color)]">{t("categoriesEyebrow")}</p>
              <h2 className="text-3xl font-black text-[var(--foreground)]">{t("categoriesTitle")}</h2>
            </div>
            <Link href="/restaurants" className="hidden items-center gap-2 text-sm font-black text-[var(--primary-color)] sm:flex">
              {t("viewAll")} <MdArrowForward size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.key}
                href="/restaurants"
                className="group flex items-center gap-3 rounded-[20px] border border-[var(--foreground)]/6 bg-[var(--background)] p-3 transition hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(36,32,28,.08)] sm:p-4"
              >
                <span className={`grid size-14 shrink-0 place-items-center rounded-2xl text-3xl ${category.color}`}>
                  {category.icon}
                </span>
                <span className="font-black text-[var(--foreground)]">{t(`categories.${category.key}`)}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mb-2 text-xs font-black uppercase tracking-[.16em] text-[var(--primary-color)]">{t("restaurantsEyebrow")}</p>
            <h2 className="text-3xl font-black text-[var(--foreground)]">{t("restaurantsTitle")}</h2>
          </div>
          <Link href="/restaurants" className="hidden items-center gap-2 text-sm font-black text-[var(--primary-color)] sm:flex">
            {t("viewAll")} <MdArrowForward size={18} />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {restaurants.map((restaurant) => (
            <Link
              key={restaurant.key}
              href="/restaurants"
              className="group overflow-hidden rounded-[26px] border border-[var(--foreground)]/8 bg-[var(--background)] transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(36,32,28,.09)]"
            >
              <div className="relative grid h-44 place-items-center bg-[var(--surface-color)] text-7xl">
                <span className="transition-transform duration-300 group-hover:scale-110">{restaurant.icon}</span>
                <span className="absolute start-4 top-4 rounded-full bg-[var(--background)] px-3 py-1.5 text-[11px] font-black text-[var(--foreground)]">
                  {t(`restaurantTags.${restaurant.tag}`)}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-full bg-[var(--primary-color)] text-sm font-black text-white">
                      {restaurant.mark}
                    </span>
                    <div>
                      <h3 className="font-black text-[var(--foreground)]">{t(`restaurantsNames.${restaurant.key}`)}</h3>
                      <p className="mt-1 text-xs text-[var(--foreground)]/45">{t(`restaurantTypes.${restaurant.key}`)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm font-black">
                    <MdStar size={16} className="text-[#F4A62A]" />
                    {restaurant.rating}
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-[var(--foreground)]/6 pt-4 text-xs text-[var(--foreground)]/55">
                  <span className="flex items-center gap-1.5">
                    <MdDeliveryDining size={17} className="text-[var(--primary-color)]" />
                    {t("delivery")}
                  </span>
                  <span>{restaurant.time} {t("minutes")}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}