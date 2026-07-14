"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CarSilhouette } from "@/components/car-silhouette";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

const stats = [
  { value: "8+", label: "Mẫu xe đa dạng" },
  { value: "679tr", label: "Giá khởi điểm" },
  { value: "5 năm", label: "Bảo hành chính hãng" },
  { value: "24/7", label: "Hỗ trợ khách hàng" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      {/* Nền trang trí */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[32rem] w-[52rem] -translate-x-1/2 rounded-full bg-white/[0.06] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:5rem_100%]" />
        <CarSilhouette className="absolute -bottom-8 right-[-8rem] hidden w-[46rem] text-white/[0.07] lg:block" />
      </div>

      <motion.div
        className="relative mx-auto flex max-w-6xl flex-col items-start px-4 pb-20 pt-36 sm:px-6 md:pb-28 md:pt-44"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={item}
          className="mb-5 rounded-full border border-white/20 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-white/80"
        >
          Đại lý chính hãng tại TP. Hồ Chí Minh
        </motion.p>

        <motion.h1
          variants={item}
          className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          LYNK &amp; CO
          <span className="mt-3 block text-2xl font-semibold text-white/70 sm:text-3xl md:text-4xl">
            Công nghệ tối tân. Thiết kế châu Âu.
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg"
        >
          Khám phá trọn bộ 8 mẫu xe Lynk &amp; Co — từ SUV đô thị, sedan hiệu
          suất cao đến flagship hybrid. Cập nhật giá lăn bánh và đăng ký lái
          thử ngay hôm nay.
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
          <Button
            render={<a href="#mau-xe" />}
            size="lg"
            className="h-12 rounded-full bg-white px-7 text-base font-semibold text-neutral-950 hover:bg-white/85"
          >
            Khám phá mẫu xe
            <ArrowDown className="size-4" />
          </Button>
          <Button
            render={<a href="#lai-thu" />}
            size="lg"
            variant="outline"
            className="h-12 rounded-full border-white/30 bg-transparent px-7 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
          >
            Đăng ký lái thử
            <ArrowRight className="size-4" />
          </Button>
        </motion.div>

        <motion.dl
          variants={item}
          className="mt-16 grid w-full grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-2xl font-black sm:text-3xl">{stat.value}</dd>
              <dd className="mt-1 text-xs uppercase tracking-wider text-white/50">
                {stat.label}
              </dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}
