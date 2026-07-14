"use client";

import { motion } from "framer-motion";
import { ArrowRight, Armchair, Fuel, Gauge } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { CarSilhouette } from "@/components/car-silhouette";
import { FadeIn } from "@/components/fade-in";
import { cars, type Car } from "@/lib/cars";

function ModelCard({ car, index }: { car: Car; index: number }) {
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
        <div className="relative overflow-hidden bg-neutral-950 px-6 pb-4 pt-6">
          <span className="pointer-events-none absolute -right-3 -top-7 select-none text-[7rem] font-black leading-none text-white/[0.08]">
            {car.code}
          </span>
          <div className="flex items-start justify-between">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
              {car.bodyType}
            </span>
            {car.anticipated && (
              <Badge className="rounded-full bg-white text-neutral-950 hover:bg-white">
                Sắp ra mắt
              </Badge>
            )}
          </div>
          <CarSilhouette
            variant={car.slug === "lynk-co-03-plus" ? "sedan" : "suv"}
            className="mx-auto mt-3 w-56 text-white transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <CardHeader className="pb-0">
          <h3 className="text-xl font-bold tracking-tight">{car.name}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {car.tagline}
          </p>
        </CardHeader>

        <CardContent className="flex flex-wrap gap-2 pt-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium">
            <Fuel className="size-3.5" />
            {car.powertrain}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium">
            <Gauge className="size-3.5" />
            {car.power}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium">
            <Armchair className="size-3.5" />
            {car.seats}
          </span>
        </CardContent>

        <CardFooter className="mt-auto flex items-end justify-between pt-2">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              Giá từ{car.anticipated ? " (dự kiến)" : ""}
            </p>
            <p className="text-2xl font-black tracking-tight">
              {car.priceDisplay}
              <span className="ml-1 text-sm font-semibold text-muted-foreground">
                VNĐ
              </span>
            </p>
          </div>
          <Button
            render={
              <a href="#lai-thu" aria-label={`Đăng ký lái thử ${car.name}`} />
            }
            size="sm"
            className="rounded-full px-4"
          >
            Lái thử
            <ArrowRight className="size-3.5" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export function ModelsSection() {
  return (
    <section id="mau-xe" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Dòng sản phẩm
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            Bảng giá xe Lynk &amp; Co mới nhất
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Trọn bộ các mẫu xe Lynk &amp; Co phân phối chính hãng tại Việt Nam,
            từ SUV đô thị đến flagship hybrid. Giá niêm yết có thể thay đổi
            theo chương trình ưu đãi — liên hệ để nhận báo giá lăn bánh chính
            xác nhất.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cars.map((car, index) => (
            <ModelCard key={car.slug} car={car} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
