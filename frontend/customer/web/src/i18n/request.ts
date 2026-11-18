import { getRequestConfig } from 'next-intl/server';
import { locale as getRootLocale } from "next/root-params";

const namespaces = ['landing'] as const;

export default getRequestConfig(async () => {
  const requested = await getRootLocale();;
  const locale = requested;

  const entries = await Promise.all(
    namespaces.map(async (namespace) => [namespace, (await import(`../messages/${locale}/${namespace}.json`)).default])
  );

  return { locale, messages: Object.fromEntries(entries) };
});