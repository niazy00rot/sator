import Image from "next/image";

import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "@/components/shared/LanguageSwitcher";
import ThemeToggle from "@/components/shared/ThemeToggle";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-[var(--background)]">
      <header className="absolute inset-x-0 top-0 z-20 flex h-[72px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" aria-label="Sator home" className="flex items-center">
          <Image src="/logo.png" alt="Sator" width={130} height={40} priority className="brightness-0 invert" />
        </Link>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </header>
      {children}
    </main>
  );
}
