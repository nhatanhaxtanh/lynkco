"use client";

import Image from "next/image";
import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/fade-in";
import { useLang } from "@/components/language-provider";
import { siteConfig } from "@/lib/site-config";

const copy = {
  vi: {
    eyebrow: "Ghé thăm chúng tôi",
    heading: "Showroom",
    intro:
      "Trung tâm trưng bày và trải nghiệm Lynk & Co chuẩn nhận diện toàn cầu — nơi bạn có thể xem xe thực tế, lái thử và nhận tư vấn trọn gói trong một lần ghé thăm.",
    highlights: [
      "Không gian trưng bày hiện đại với đầy đủ 8 mẫu xe",
      "Đội ngũ tư vấn được đào tạo theo tiêu chuẩn toàn cầu",
      "Khu lái thử, dịch vụ và phụ tùng chính hãng tại chỗ",
    ],
    directions: "Chỉ đường đến showroom",
    callHotline: "Gọi hotline",
    imageAlt: "Không gian showroom",
  },
  en: {
    eyebrow: "Visit us",
    heading: "Showroom",
    intro:
      "A Lynk & Co showroom and experience center built to global brand standards — see the cars in person, take a test drive and get complete advice in a single visit.",
    highlights: [
      "A modern showroom displaying the full 8-model lineup",
      "Consultants trained to global standards",
      "On-site test drives, service and genuine parts",
    ],
    directions: "Get directions",
    callHotline: "Call hotline",
    imageAlt: "Showroom interior",
  },
};

export function ShowroomSection() {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <section id="showroom" className="bg-neutral-950 py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
          <FadeIn>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-white/15">
              <Image
                src="/showroom.jpg"
                alt={`${t.imageAlt} ${siteConfig.name} — ${siteConfig.address}`}
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 via-transparent to-transparent" />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
              {t.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
              {t.heading} {siteConfig.name}
            </h2>
            <p className="mt-4 leading-relaxed text-white/60">{t.intro}</p>

            <ul className="mt-6 space-y-3 text-sm text-white/80">
              {t.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-white" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-3 rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-sm">
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-white/60" />
                {siteConfig.address}
              </p>
              <p className="flex items-center gap-3">
                <Clock className="size-4 shrink-0 text-white/60" />
                {siteConfig.openingHours}
              </p>
              <p className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-white/60" />
                <a
                  href={`tel:${siteConfig.hotline}`}
                  className="font-semibold hover:underline"
                >
                  {siteConfig.hotlineDisplay}
                </a>
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                render={
                  <a
                    href={siteConfig.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                nativeButton={false}
                size="lg"
                className="h-12 rounded-full bg-white px-7 text-base font-semibold text-neutral-950 hover:bg-white/85"
              >
                <Navigation className="size-4" />
                {t.directions}
              </Button>
              <Button
                render={<a href={`tel:${siteConfig.hotline}`} />}
                nativeButton={false}
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-white/30 bg-transparent px-7 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
              >
                <Phone className="size-4" />
                {t.callHotline}
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
