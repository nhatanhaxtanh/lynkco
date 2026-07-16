"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { CarSilhouette } from "@/components/car-silhouette";
import type { Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type BiText = Record<Lang, string>;

type Slide = {
  code: string;
  eyebrow: BiText;
  title: string;
  highlight: BiText;
  description: BiText;
  price?: BiText;
  silhouette: "suv" | "sedan";
  /** Ảnh thật của xe (đặt trong public/cars/); chưa có thì hiển thị silhouette */
  image?: string;
  /** Video nền full-bleed (ưu tiên hơn image nếu có) */
  video?: string;
  /** Ảnh hiển thị trong lúc video đang tải */
  poster?: string;
};

const slides: Slide[] = [
  {
    code: "LYNK",
    eyebrow: {
      vi: "Đại lý chính hãng tại TP. Hồ Chí Minh",
      en: "Authorized dealer in Ho Chi Minh City",
    },
    title: "LYNK & CO",
    highlight: {
      vi: "Công nghệ tối tân. Thiết kế châu Âu.",
      en: "Cutting-edge technology. European design.",
    },
    description: {
      vi: "Trọn bộ 8 mẫu xe từ SUV đô thị, sedan hiệu suất cao đến flagship hybrid. Cập nhật giá lăn bánh và đăng ký lái thử ngay hôm nay.",
      en: "A full lineup of 8 models, from urban SUVs and performance sedans to the flagship hybrid. Get on-the-road pricing and book a test drive today.",
    },
    silhouette: "suv",
    video: "/videos/hero-brand.mp4",
    poster: "/videos/hero-brand-poster.jpg",
  },
  {
    code: "06",
    eyebrow: {
      vi: "Lựa chọn dẫn đầu phân khúc",
      en: "The segment leader",
    },
    title: "LYNK & CO 06",
    highlight: { vi: "SUV cỡ B năng động", en: "The dynamic B-segment SUV" },
    description: {
      vi: "Động cơ 1.5L Turbo 181 mã lực, cá tính Scandinavia trong từng đường nét. Khởi điểm hấp dẫn nhất dải sản phẩm.",
      en: "A 181 hp 1.5L Turbo engine and Scandinavian character in every line. The most accessible entry to the lineup.",
    },
    price: { vi: "Giá từ 679 triệu", en: "From 679 million VND" },
    silhouette: "suv",
    image: "/cars/lynk-co-06.jpg",
  },
  {
    code: "08",
    eyebrow: { vi: "Plug-in Hybrid EM-P", en: "EM-P plug-in hybrid" },
    title: "LYNK & CO 08",
    highlight: {
      vi: "345 mã lực, êm ái vượt trội",
      en: "345 hp, remarkably refined",
    },
    description: {
      vi: "SUV cỡ D với công nghệ hybrid EM-P tiên tiến — mạnh mẽ khi cần, tiết kiệm mọi hành trình.",
      en: "A D-segment SUV with advanced EM-P hybrid technology — powerful when you need it, efficient on every journey.",
    },
    price: { vi: "Giá từ 1,299 tỷ", en: "From 1.299 billion VND" },
    silhouette: "suv",
    image: "/cars/lynk-co-08-hero.webp",
  },
  {
    code: "900",
    eyebrow: { vi: "Flagship vừa ra mắt", en: "Flagship — just launched" },
    title: "LYNK & CO 900",
    highlight: { vi: "Đẳng cấp tối thượng", en: "The pinnacle of luxury" },
    description: {
      vi: "SUV flagship 6 chỗ với sức mạnh trên 500 mã lực — công nghệ và sang trọng không thỏa hiệp.",
      en: "The flagship 6-seat SUV with over 500 hp — technology and luxury without compromise.",
    },
    price: { vi: "Giá từ 3,069 tỷ", en: "From 3.069 billion VND" },
    silhouette: "suv",
    image: "/cars/lynk-co-900.jpeg",
  },
];

const heroCopy = {
  vi: {
    srTitle:
      "Lynk & Co Sài Gòn — Bảng giá xe Lynk & Co mới nhất, đăng ký lái thử miễn phí",
    explore: "Khám phá mẫu xe",
    testDrive: "Đăng ký lái thử",
    carousel: "Giới thiệu Lynk & Co",
    goToSlide: "Chuyển đến slide",
    prev: "Slide trước",
    next: "Slide sau",
  },
  en: {
    srTitle:
      "Lynk & Co Saigon — Latest Lynk & Co prices, book a free test drive",
    explore: "Explore models",
    testDrive: "Book a test drive",
    carousel: "Lynk & Co introduction",
    goToSlide: "Go to slide",
    prev: "Previous slide",
    next: "Next slide",
  },
};

const AUTOPLAY_MS = 6000;

const contentVariants = {
  enter: (direction: number) => ({ opacity: 0, x: 64 * direction }),
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: -64 * direction,
    transition: { duration: 0.3, ease: "easeIn" as const },
  }),
};

export function Hero() {
  const [[index, direction], setState] = useState<[number, number]>([0, 1]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { lang } = useLang();
  const t = heroCopy[lang];

  const goTo = useCallback((next: number, dir: number) => {
    setState([(next + slides.length) % slides.length, dir]);
  }, []);

  const next = useCallback(() => goTo(index + 1, 1), [index, goTo]);
  const prev = useCallback(() => goTo(index - 1, -1), [index, goTo]);

  useEffect(() => {
    timerRef.current = setInterval(next, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next]);

  const slide = slides[index];

  return (
    <section
      className="relative overflow-hidden bg-neutral-950 text-white"
      aria-roledescription="carousel"
      aria-label={t.carousel}
    >
      <h1 className="sr-only">{t.srTitle}</h1>

      {/* Preload ảnh các slide để không bị nháy khi chuyển */}
      <div className="hidden" aria-hidden="true">
        {slides
          .filter((s) => s.image)
          .map((s) => (
            <Image
              key={s.image}
              src={s.image!}
              alt=""
              width={512}
              height={341}
              priority
            />
          ))}
      </div>

      {/* Nền trang trí */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[32rem] w-[52rem] -translate-x-1/2 rounded-full bg-white/[0.06] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:5rem_100%]" />
      </div>

      {/* Nền full-bleed (video hoặc ảnh thật) cho slide */}
      <AnimatePresence mode="popLayout">
        {(slide.video || slide.image) && (
          <motion.div
            key={`bg-${index}`}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] },
            }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
            className="pointer-events-none absolute inset-0"
          >
            {slide.video ? (
              <video
                src={slide.video}
                poster={slide.poster}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="absolute inset-0 size-full object-cover"
              />
            ) : (
              <Image
                src={slide.image!}
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover object-[62%_center]"
              />
            )}
            {/* Gradient tối để chữ trắng luôn đọc rõ */}
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-950/65 to-neutral-950/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-transparent to-neutral-950/50" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex min-h-[max(38rem,100svh)] flex-col justify-center pb-24 pt-28 md:pt-32">
          {/* Chữ số hiệu khổng lồ phía sau (ẩn khi slide dùng nền video/ảnh) */}
          <AnimatePresence mode="popLayout" custom={direction}>
            {!slide.image && !slide.video && (
              <motion.span
                key={`code-${index}`}
                custom={direction}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.7, ease: "easeOut" },
                }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 select-none text-[16rem] font-black leading-none tracking-tighter text-transparent lg:block xl:text-[20rem] [-webkit-text-stroke:2px_rgba(255,255,255,0.14)]"
              >
                {slide.code}
              </motion.span>
            )}
          </AnimatePresence>

          {/* Silhouette xe cho slide chưa có ảnh thật */}
          <AnimatePresence mode="popLayout">
            {!slide.image && !slide.video && (
              <motion.div
                key={`car-${index}`}
                initial={{ opacity: 0, x: 120 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
                }}
                exit={{ opacity: 0, x: -80, transition: { duration: 0.35 } }}
                className="pointer-events-none absolute -bottom-2 right-[-6rem] hidden w-[42rem] lg:block"
              >
                <CarSilhouette
                  variant={slide.silhouette}
                  className="w-full text-white/20"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Nội dung slide */}
          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) next();
                else if (info.offset.x > 80) prev();
              }}
              className="relative z-10 max-w-2xl cursor-grab active:cursor-grabbing"
            >
              <p className="inline-block rounded-full border border-white/20 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-white/80">
                {slide.eyebrow[lang]}
              </p>

              <p className="mt-6 text-4xl font-black leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
                {slide.title}
              </p>
              <p className="mt-3 bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl md:text-4xl">
                {slide.highlight[lang]}
              </p>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
                {slide.description[lang]}
              </p>

              {slide.price && (
                <p className="mt-5 inline-block rounded-full bg-white px-5 py-2 text-sm font-bold text-neutral-950">
                  {slide.price[lang]}
                </p>
              )}

              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  render={<a href="#mau-xe" />}
                  nativeButton={false}
                  size="lg"
                  className="h-12 rounded-full bg-white px-7 text-base font-semibold text-neutral-950 hover:bg-white/85"
                >
                  {t.explore}
                </Button>
                <Button
                  render={<a href="#lai-thu" />}
                  nativeButton={false}
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full border-white/30 bg-transparent px-7 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
                >
                  {t.testDrive}
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Điều hướng slider */}
          <div className="absolute bottom-8 left-4 right-4 z-10 flex items-center justify-between sm:left-6 sm:right-6">
            <div className="flex items-center gap-2.5">
              {slides.map((s, i) => (
                <button
                  key={s.code}
                  type="button"
                  onClick={() => goTo(i, i > index ? 1 : -1)}
                  aria-label={`${t.goToSlide} ${s.title}`}
                  aria-current={i === index}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    i === index
                      ? "w-8 bg-white"
                      : "w-3 bg-white/30 hover:bg-white/60"
                  )}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={prev}
                aria-label={t.prev}
                className="flex size-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white hover:text-neutral-950"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label={t.next}
                className="flex size-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white hover:text-neutral-950"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
