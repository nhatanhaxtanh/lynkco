"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Armchair,
  Check,
  ChevronRight,
  Fuel,
  Gauge,
  Phone,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CarSilhouette } from "@/components/car-silhouette";
import { FadeIn } from "@/components/fade-in";
import { useLang } from "@/components/language-provider";
import { TestDriveForm } from "@/components/test-drive-form";
import { localizeCar, type Car } from "@/lib/cars";
import { siteConfig } from "@/lib/site-config";

const copy = {
  vi: {
    home: "Trang chủ",
    models: "Mẫu xe",
    comingSoon: "Sắp ra mắt",
    priceFrom: "Giá từ",
    anticipated: " (dự kiến)",
    currency: "VNĐ",
    testDrive: "Đăng ký lái thử",
    quote: "Báo giá lăn bánh",
    overview: "Tổng quan",
    about: "Về",
    disclaimer: (hotline: string) =>
      `* Thông số mang tính tham khảo, có thể khác biệt theo phiên bản phân phối. Liên hệ ${hotline} để nhận thông số chính xác.`,
    specs: "Thông số kỹ thuật",
    featured: "Trang bị nổi bật",
    highlights: "Điểm nhấn trên",
    otherModels: "Khám phá mẫu xe khác",
    viewAll: "Xem tất cả →",
    from: "từ",
  },
  en: {
    home: "Home",
    models: "Models",
    comingSoon: "Coming soon",
    priceFrom: "From",
    anticipated: " (expected)",
    currency: "VND",
    testDrive: "Book a test drive",
    quote: "Get a quote",
    overview: "Overview",
    about: "About the",
    disclaimer: (hotline: string) =>
      `* Specifications are for reference and may vary by distributed variant. Contact ${hotline} for exact specifications.`,
    specs: "Technical specifications",
    featured: "Featured equipment",
    highlights: "Highlights of the",
    otherModels: "Explore other models",
    viewAll: "View all →",
    from: "from",
  },
};

export function CarDetail({
  car,
  otherCars,
}: {
  car: Car;
  otherCars: Car[];
}) {
  const { lang } = useLang();
  const t = copy[lang];
  const c = localizeCar(car, lang);

  return (
    <main>
      {/* Hero chi tiết xe */}
      <section className="relative overflow-hidden bg-neutral-950 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[32rem] w-[52rem] -translate-x-1/2 rounded-full bg-white/[0.06] blur-3xl" />
          <span className="absolute -right-6 top-24 hidden select-none text-[14rem] font-black leading-none tracking-tighter text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.1)] md:block lg:text-[18rem]">
            {c.code}
          </span>
        </div>

        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-28 sm:px-6 md:pb-24 md:pt-36">
          <FadeIn>
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-1.5 text-sm text-white/50"
            >
              <Link href="/" className="hover:text-white">
                {t.home}
              </Link>
              <ChevronRight className="size-3.5" />
              <Link href="/#mau-xe" className="hover:text-white">
                {t.models}
              </Link>
              <ChevronRight className="size-3.5" />
              <span className="text-white">{c.name}</span>
            </nav>
          </FadeIn>

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
            <FadeIn delay={0.05}>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                {c.bodyType}
                {c.anticipated && (
                  <Badge className="ml-3 rounded-full bg-white text-neutral-950 hover:bg-white">
                    {t.comingSoon}
                  </Badge>
                )}
              </p>
              <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
                {c.name}
              </h1>
              <p className="mt-4 max-w-md text-lg text-white/60">{c.tagline}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-medium">
                  <Fuel className="size-3.5" />
                  {c.powertrain}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-medium">
                  <Gauge className="size-3.5" />
                  {c.power}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-medium">
                  <Armchair className="size-3.5" />
                  {c.seats}
                </span>
              </div>

              <div className="mt-8">
                <p className="text-xs uppercase tracking-wider text-white/50">
                  {t.priceFrom}
                  {c.anticipated ? t.anticipated : ""}
                </p>
                <p className="text-4xl font-black tracking-tight sm:text-5xl">
                  {c.priceDisplay}
                  <span className="ml-2 text-lg font-semibold text-white/50">
                    {t.currency}
                  </span>
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  render={<a href="#lai-thu" />}
                  nativeButton={false}
                  size="lg"
                  className="h-12 rounded-full bg-white px-7 text-base font-semibold text-neutral-950 hover:bg-white/85"
                >
                  {t.testDrive}
                </Button>
                <Button
                  render={<a href={`tel:${siteConfig.hotline}`} />}
                  nativeButton={false}
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full border-white/30 bg-transparent px-7 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
                >
                  <Phone className="size-4" />
                  {t.quote}
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              {c.image ? (
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-2xl shadow-black/60 ring-1 ring-white/15">
                  <Image
                    src={c.image}
                    alt={`${c.name} — ${c.bodyType}`}
                    fill
                    priority
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <CarSilhouette
                  variant={c.slug === "lynk-co-03-plus" ? "sedan" : "suv"}
                  className="mx-auto w-full max-w-xl text-white/30"
                />
              )}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mô tả + thông số kỹ thuật */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                {t.overview}
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                {t.about} {c.name}
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {c.description}
              </p>
              <p className="mt-6 text-xs text-muted-foreground">
                {t.disclaimer(siteConfig.hotlineDisplay)}
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="overflow-hidden rounded-3xl border border-border/80">
                <h3 className="border-b border-border/80 bg-neutral-950 px-6 py-4 text-sm font-bold uppercase tracking-wider text-white">
                  {t.specs}
                </h3>
                <dl>
                  {c.specs.map((spec, index) => (
                    <div
                      key={spec.label}
                      className={`flex items-baseline justify-between gap-6 px-6 py-3.5 text-sm ${
                        index % 2 === 1 ? "bg-muted/50" : ""
                      }`}
                    >
                      <dt className="text-muted-foreground">{spec.label}</dt>
                      <dd className="text-right font-semibold">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trang bị nổi bật */}
      <section className="bg-neutral-950 py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
              {t.featured}
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              {t.highlights} {c.name}
            </h2>
          </FadeIn>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {c.features.map((feature, index) => (
              <FadeIn key={feature} delay={(index % 4) * 0.05}>
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-white text-neutral-950">
                    <Check className="size-3" />
                  </span>
                  <span className="text-sm leading-relaxed text-white/85">
                    {feature}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Form đăng ký lái thử — chọn sẵn mẫu xe này */}
      <TestDriveForm defaultModel={c.name} />

      {/* Các mẫu xe khác */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                {t.otherModels}
              </h2>
              <Link
                href="/#mau-xe"
                className="text-sm font-semibold underline-offset-4 hover:underline"
              >
                {t.viewAll}
              </Link>
            </div>
          </FadeIn>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {otherCars.map((other, index) => {
              const o = localizeCar(other, lang);
              return (
                <FadeIn key={other.slug} delay={index * 0.06}>
                  <Link
                    href={`/xe/${other.slug}`}
                    className="group block overflow-hidden rounded-3xl border border-border/80 transition-shadow hover:shadow-xl hover:shadow-neutral-900/10"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                      {o.image ? (
                        <Image
                          src={o.image}
                          alt={o.name}
                          fill
                          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <CarSilhouette className="absolute bottom-2 left-1/2 w-44 -translate-x-1/2 text-white/60" />
                      )}
                    </div>
                    <div className="flex items-baseline justify-between gap-3 p-5">
                      <p className="font-bold">{o.name}</p>
                      <p className="text-sm font-semibold text-muted-foreground">
                        {t.from} {o.priceDisplay}
                      </p>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
