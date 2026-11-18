"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

import { MdLightMode, MdDarkMode  } from "react-icons/md";


const emptySubscribe = () => () => {};

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="grid size-10 place-items-center rounded-full border border-[var(--foreground)]/10 text-[var(--foreground)] transition-colors hover:bg-[var(--surface-color)] cursor-pointer"
    >
      {isDark ? (
        <MdLightMode />
      ) : (
        <MdDarkMode />
      )}
    </button>
  );
}
