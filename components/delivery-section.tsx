"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/fade-in";
import { deliveries, type Delivery } from "@/lib/deliveries";

function DeliveryTile({ item, index }: { item: Delivery; index: number }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay: (index % 3) * 0.08,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="group relative aspect-[3/4] overflow-hidden rounded-3xl bg-neutral-100"
    >
      {item.image ? (
        <Image
          src={item.image}
          alt="Lễ bàn giao xe Lynk & Co tại showroom"
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] ${item.objectPosition ?? ""}`}
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-3 text-neutral-400">
          <Camera className="size-8" strokeWidth={1.5} />
          <span className="text-xs font-medium uppercase tracking-[0.2em]">
            Ảnh lễ bàn giao
          </span>
        </div>
      )}
    </motion.figure>
  );
}

export function DeliverySection() {
  return (
    <section id="ban-giao" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Khoảnh khắc nhận xe
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
              Lễ bàn giao xe
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Mỗi chiếc Lynk &amp; Co đến tay khách hàng đều được chuẩn bị chỉn
              chu — từ kiểm tra kỹ thuật, hoàn thiện thủ tục đến nghi thức bàn
              giao trang trọng tại showroom.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Button
              render={<a href="#lai-thu" />}
              nativeButton={false}
              size="lg"
              className="h-12 rounded-full px-7 text-base font-semibold"
            >
              Trở thành chủ xe tiếp theo
              <ArrowRight className="size-4" />
            </Button>
          </FadeIn>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {deliveries.map((item, index) => (
            <DeliveryTile key={item.image ?? index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
