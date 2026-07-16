"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Newspaper,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/fade-in";
import { useLang } from "@/components/language-provider";
import { categoryLabel, formatDate, localizePost, newsPosts } from "@/lib/news";
import { cn } from "@/lib/utils";

const copy = {
  vi: {
    eyebrow: "Cập nhật mới nhất",
    heading: "Tin tức & Sự kiện",
    readMore: "Đọc tiếp",
    prev: "Bài trước",
    next: "Bài sau",
  },
  en: {
    eyebrow: "Latest updates",
    heading: "News & Events",
    readMore: "Read more",
    prev: "Previous",
    next: "Next",
  },
};

export function NewsSection() {
  const { lang } = useLang();
  const t = copy[lang];
  const posts = newsPosts.map((post) => localizePost(post, lang));

  const trackRef = useRef<HTMLDivElement | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setCanPrev(track.scrollLeft > 8);
    setCanNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 8);
  }, []);

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, [updateArrows]);

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("article");
    const step = card ? card.clientWidth + 24 : track.clientWidth;
    track.scrollBy({ left: step * direction, behavior: "smooth" });
  }

  return (
    <section id="tin-tuc" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              {t.eyebrow}
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
              {t.heading}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                disabled={!canPrev}
                aria-label={t.prev}
                className="flex size-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-neutral-950 hover:text-white disabled:pointer-events-none disabled:opacity-30"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                disabled={!canNext}
                aria-label={t.next}
                className="flex size-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-neutral-950 hover:text-white disabled:pointer-events-none disabled:opacity-30"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.15}>
          {/* Slider: trượt ngang + snap từng card, kéo được trên mobile */}
          <div
            ref={trackRef}
            onScroll={updateArrows}
            className="scrollbar-none -mx-4 mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-4 pb-2 sm:-mx-6 sm:px-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {posts.map((post) => (
              <article
                key={post.slug}
                className={cn(
                  "w-[85%] shrink-0 snap-start",
                  "sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                )}
              >
                <Link
                  href={`/tin-tuc/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/80 transition-shadow duration-300 hover:shadow-xl hover:shadow-neutral-900/10"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 85vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-white/40">
                        <Newspaper className="size-10" strokeWidth={1.5} />
                      </div>
                    )}
                    <Badge className="absolute left-4 top-4 rounded-full bg-white text-neutral-950 hover:bg-white">
                      {categoryLabel(post.category, lang)}
                    </Badge>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <CalendarDays className="size-3.5" />
                      {formatDate(post.date, lang)}
                    </p>
                    <h3 className="mt-3 line-clamp-2 text-lg font-bold leading-snug tracking-tight">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold">
                      {t.readMore}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
