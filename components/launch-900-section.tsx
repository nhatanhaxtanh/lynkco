import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/fade-in";
import { getCar } from "@/lib/cars";

const stats = [
  { value: "500+", unit: "mã lực", label: "Hệ truyền động EM-P" },
  { value: "~220", unit: "km", label: "Tầm chạy thuần điện" },
  { value: "2+2+2", unit: "", label: "Khoang thương gia 6 chỗ" },
  { value: "3.160", unit: "mm", label: "Chiều dài cơ sở" },
];

export function Launch900Section() {
  const car = getCar("lynk-co-900");
  if (!car) return null;

  return (
    <section
      id="ra-mat-900"
      className="relative overflow-hidden bg-neutral-950 text-white"
    >
      {/* Ảnh xe full-bleed làm nền */}
      <div className="absolute inset-0">
        <Image
          src="/cars/lynk-co-900-launch.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[68%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/75 to-neutral-950/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/60" />
      </div>

      {/* Số 900 khổng lồ phía sau */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-8 right-0 hidden select-none text-[16rem] font-black leading-none tracking-tighter text-transparent lg:block xl:text-[20rem] [-webkit-text-stroke:2px_rgba(255,255,255,0.12)]"
      >
        900
      </span>

      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-36">
        <FadeIn>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-red-500/40 bg-red-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-red-400">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-red-500" />
            </span>
            Mới ra mắt
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <h2 className="mt-6 text-4xl font-black leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
            LYNK &amp; CO 900
          </h2>
          <p className="mt-3 max-w-2xl bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-xl font-bold text-transparent sm:text-3xl">
            {car.tagline}
          </p>
        </FadeIn>

        <FadeIn delay={0.16}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
            {car.description}
          </p>
        </FadeIn>

        <FadeIn delay={0.22}>
          <p className="mt-6 inline-block rounded-full bg-white px-5 py-2 text-sm font-bold text-neutral-950">
            Giá từ {car.priceDisplay} VNĐ
          </p>
        </FadeIn>

        <FadeIn delay={0.28}>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              render={<Link href={`/xe/${car.slug}`} />}
              nativeButton={false}
              size="lg"
              className="h-12 rounded-full bg-white px-7 text-base font-semibold text-neutral-950 hover:bg-white/85"
            >
              Khám phá Lynk &amp; Co 900
              <ArrowRight className="size-4" />
            </Button>
            <Button
              render={<a href="#lai-thu" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-white/30 bg-transparent px-7 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
            >
              Đăng ký lái thử
            </Button>
          </div>
        </FadeIn>

        {/* Dải thông số nổi bật */}
        <FadeIn delay={0.34}>
          <dl className="mt-16 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-white/10 pt-10 md:mt-20 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dd className="text-3xl font-black tracking-tight sm:text-4xl">
                  {stat.value}
                  {stat.unit && (
                    <span className="ml-1.5 text-base font-semibold text-white/50">
                      {stat.unit}
                    </span>
                  )}
                </dd>
                <dt className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-white/50">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </FadeIn>
      </div>
    </section>
  );
}
