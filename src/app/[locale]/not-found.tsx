import Link from "next/link";
import { hasLocale } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { localizeHref } from "@/components/site";
import { routing } from "@/i18n/routing";

export default async function NotFoundPage() {
  const requestedLocale = await getLocale();
  const locale = hasLocale(routing.locales, requestedLocale) ? requestedLocale : routing.defaultLocale;
  const t = await getTranslations({ locale, namespace: "notFound" });

  return (
    <main className="mx-auto grid min-h-[60vh] max-w-3xl place-items-center px-4 py-16 text-center">
      <div className="rounded-3xl border border-border bg-card/70 p-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground">{t("title")}</h1>
        <p className="mt-4 text-muted-foreground">{t("description")}</p>
        <Button asChild className="mt-6"><Link href={localizeHref("/characters", locale)}>{t("browse")}</Link></Button>
      </div>
    </main>
  );
}
