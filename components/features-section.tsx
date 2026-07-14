import { Globe, ShieldCheck, Wrench, Zap } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

const features = [
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
];

export function FeaturesSection() {
  return (
    <section id="uu-diem" className="bg-neutral-950 py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
            Vì sao chọn Lynk &amp; Co
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            Khác biệt từ mọi chi tiết
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
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
