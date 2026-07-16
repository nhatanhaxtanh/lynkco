"use client";

import { Globe, ShieldCheck, Wrench, Zap } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { useLang } from "@/components/language-provider";

const copy = {
  vi: {
    eyebrow: "Vì sao chọn Lynk & Co",
    heading: "Khác biệt từ mọi chi tiết",
    features: [
      {
        icon: ShieldCheck,
        title: "An toàn chuẩn châu Âu",
        description:
          "Nền tảng CMA đồng phát triển cùng Volvo, đạt chuẩn an toàn 5 sao Euro NCAP với hàng loạt công nghệ hỗ trợ lái ADAS.",
      },
      {
        icon: Globe,
        title: "Thiết kế Scandinavia",
        description:
          "Ngôn ngữ thiết kế độc bản từ trung tâm thiết kế Gothenburg, Thụy Điển — cá tính, hiện đại và không trộn lẫn.",
      },
      {
        icon: Zap,
        title: "Xăng, Hybrid & thuần điện",
        description:
          "Dải sản phẩm đa dạng từ động cơ xăng turbo, plug-in hybrid EM-P đến thuần điện, đáp ứng mọi nhu cầu di chuyển.",
      },
      {
        icon: Wrench,
        title: "Hậu mãi chính hãng",
        description:
          "Bảo hành 5 năm, hỗ trợ 24/7, phụ tùng chính hãng và đội ngũ kỹ thuật viên được đào tạo theo tiêu chuẩn toàn cầu.",
      },
    ],
  },
  en: {
    eyebrow: "Why choose Lynk & Co",
    heading: "Different in every detail",
    features: [
      {
        icon: ShieldCheck,
        title: "European-standard safety",
        description:
          "The CMA platform co-developed with Volvo, rated 5 stars by Euro NCAP, with a full suite of ADAS driver-assistance technology.",
      },
      {
        icon: Globe,
        title: "Scandinavian design",
        description:
          "A unique design language from the Gothenburg design center in Sweden — distinctive, modern and unmistakable.",
      },
      {
        icon: Zap,
        title: "Petrol, hybrid & electric",
        description:
          "A diverse lineup spanning turbo petrol, EM-P plug-in hybrid and fully electric powertrains for every driving need.",
      },
      {
        icon: Wrench,
        title: "Genuine after-sales care",
        description:
          "5-year warranty, 24/7 support, genuine parts and technicians trained to global standards.",
      },
    ],
  },
};

export function FeaturesSection() {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <section id="uu-diem" className="bg-neutral-950 py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
            {t.eyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            {t.heading}
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.features.map((feature, index) => (
            <FadeIn key={feature.title} delay={index * 0.08}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-colors duration-300 hover:bg-white/[0.08]">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-white text-neutral-950">
                  <feature.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
