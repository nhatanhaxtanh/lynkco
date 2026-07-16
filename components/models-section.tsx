"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Armchair, Fuel, Gauge } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { CarSilhouette } from "@/components/car-silhouette";
import { FadeIn } from "@/components/fade-in";
import { useLang } from "@/components/language-provider";
import { cars, localizeCar, type Car } from "@/lib/cars";

const copy = {
  vi: {
    eyebrow: "Dòng sản phẩm",
    heading: "Bảng giá xe Lynk & Co mới nhất",
    intro:
      "Trọn bộ các mẫu xe Lynk & Co phân phối chính hãng tại Việt Nam, từ SUV đô thị đến flagship hybrid. Giá niêm yết có thể thay đổi theo chương trình ưu đãi — liên hệ để nhận báo giá lăn bánh chính xác nhất.",
    comingSoon: "Sắp ra mắt",
    priceFrom: "Giá từ",
    anticipated: " (dự kiến)",
    currency: "VNĐ",
    details: "Chi tiết",
    viewDetails: "Xem chi tiết",
  },
  en: {
    eyebrow: "The lineup",
    heading: "Latest Lynk & Co prices",
    intro:
      "The full range of Lynk & Co models officially distributed in Vietnam, from urban SUVs to the flagship hybrid. List prices may change with ongoing promotions — contact us for an exact on-the-road quote.",
    comingSoon: "Coming soon",
    priceFrom: "From",
    anticipated: " (expected)",
    currency: "VND",
    details: "Details",
    viewDetails: "View details for",
  },
};

function CarThumbnail({ car }: { car: Car }) {
  const { lang } = useLang();
  const t = copy[lang];
  return (
    <Link
      href={`/xe/${car.slug}`}
      aria-label={`${t.viewDetails} ${car.name}`}
      className="relative block aspect-[16/10] overflow-hidden bg-neutral-950"
    >
      {car.image ? (
        <Image
          src={car.image}
          alt={`${car.name} — ${car.bodyType}`}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
      ) : (
        <>
          {/* Placeholder khi chưa có ảnh thật */}
          <span className="pointer-events-none absolute -right-2 -top-8 select-none text-[8rem] font-black leading-none text-white/[0.07]">
            {car.code}
          </span>
          <CarSilhouette
            variant={car.slug === "lynk-co-03-plus" ? "sedan" : "suv"}
            className="absolute bottom-3 left-1/2 w-60 -translate-x-1/2 text-white/70 transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </>
      )}

      {/* Lớp phủ giúp chip/badge luôn dễ đọc trên ảnh */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-neutral-950/40" />

      <span className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-md">
        {car.bodyType}
      </span>
      {car.anticipated && (
        <Badge className="absolute right-4 top-4 rounded-full bg-white text-neutral-950 hover:bg-white">
          {t.comingSoon}
        </Badge>
      )}

      <span className="pointer-events-none absolute bottom-3 right-4 select-none text-2xl font-black tracking-tight text-white/80">
        {car.code}
      </span>
    </Link>
  );
}

function ModelCard({ car, index }: { car: Car; index: number }) {
  const { lang } = useLang();
  const t = copy[lang];
  const c = localizeCar(car, lang);
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay: (index % 4) * 0.08,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      whileHover={{ y: -6 }}
      className="h-full"
    >
      <Card className="group flex h-full flex-col overflow-hidden rounded-3xl border-border/80 pt-0 shadow-none transition-shadow duration-300 hover:shadow-xl hover:shadow-neutral-900/10">
        <CarThumbnail car={c} />

        <CardHeader className="pb-0">
          <h3 className="text-xl font-bold tracking-tight">
            <Link href={`/xe/${car.slug}`} className="hover:underline">
              {car.name}
            </Link>
          </h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {c.tagline}
          </p>
        </CardHeader>

        <CardContent className="flex flex-wrap gap-2 pt-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium">
            <Fuel className="size-3.5" />
            {c.powertrain}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium">
            <Gauge className="size-3.5" />
            {c.power}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium">
            <Armchair className="size-3.5" />
            {c.seats}
          </span>
        </CardContent>

        <CardFooter className="mt-auto flex items-end justify-between border-t border-border/60 pt-4">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              {t.priceFrom}
              {car.anticipated ? t.anticipated : ""}
            </p>
            <p className="text-2xl font-black tracking-tight">
              {c.priceDisplay}
              <span className="ml-1 text-sm font-semibold text-muted-foreground">
                {t.currency}
              </span>
            </p>
          </div>
          <Button
            render={
              <Link
                href={`/xe/${car.slug}`}
                aria-label={`${t.viewDetails} ${car.name}`}
              />
            }
            nativeButton={false}
            size="sm"
            className="rounded-full px-4"
          >
            {t.details}
            <ArrowRight className="size-3.5" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export function ModelsSection() {
  const { lang } = useLang();
  const t = copy[lang];
  return (
    <section id="mau-xe" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            {t.eyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            {t.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">{t.intro}</p>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cars.map((car, index) => (
            <ModelCard key={car.slug} car={car} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
