"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CalendarCheck, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cars } from "@/lib/cars";
import { siteConfig } from "@/lib/site-config";

/** Chỉ hiện 1 lần mỗi phiên truy cập */
const STORAGE_KEY = "lynkco-test-drive-popup-seen";
const OPEN_DELAY_MS = 2000;
const FALLBACK_IMAGE = "/cars/lynk-co-08-hero.webp";

export function TestDrivePopup() {
  const featured = cars.find((car) => car.featured) ?? cars[0];
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [model, setModel] = useState(featured.name);

  useEffect(() => {
    if (window.sessionStorage.getItem(STORAGE_KEY)) return;
    const timer = window.setTimeout(() => setOpen(true), OPEN_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  function handleOpenChange(nextOpen: boolean) {
    setOpen(nextOpen);
    if (!nextOpen) window.sessionStorage.setItem(STORAGE_KEY, "1");
  }

  const selectedCar = cars.find((car) => car.name === model) ?? featured;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();

    if (!name || !phone) {
      toast.error("Vui lòng nhập họ tên và số điện thoại.");
      return;
    }
    if (!/^(0|\+84)\d{8,10}$/.test(phone.replaceAll(" ", ""))) {
      toast.error("Số điện thoại chưa đúng định dạng.");
      return;
    }

    setSubmitting(true);
    // TODO: nối API/CRM thật tại đây (POST /api/test-drive)
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSubmitting(false);

    handleOpenChange(false);
    toast.success("Đăng ký lái thử thành công!", {
      description: `Cảm ơn ${name}, tư vấn viên sẽ liên hệ bạn qua số ${phone} trong 24h.`,
    });
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-h-[calc(100dvh-2rem)] max-w-3xl gap-0 overflow-hidden overflow-y-auto rounded-3xl border-none p-0 sm:grid-cols-[1fr_1.15fr]">
        {/* Ảnh xe — đổi theo mẫu xe đang chọn trong form */}
        <div className="relative h-44 bg-neutral-950 sm:h-auto">
          <Image
            key={selectedCar.image ?? FALLBACK_IMAGE}
            src={selectedCar.image ?? FALLBACK_IMAGE}
            alt={`${selectedCar.name} — ${selectedCar.bodyType}`}
            fill
            sizes="(min-width: 640px) 24rem, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/10 to-neutral-950/30" />
          <div className="absolute inset-x-5 bottom-4 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              {selectedCar.bodyType}
            </p>
            <p className="mt-1 text-xl font-black tracking-tight">
              {selectedCar.name}
            </p>
            <p className="text-sm font-semibold text-white/80">
              Giá từ {selectedCar.priceDisplay}
              {selectedCar.anticipated ? " (dự kiến)" : ""} VNĐ
            </p>
          </div>
        </div>

        {/* Form đăng ký */}
        <div className="p-6 sm:p-8">
          <DialogHeader>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Ưu đãi từ {siteConfig.name}
            </p>
            <DialogTitle className="text-2xl font-black tracking-tight">
              Đăng ký lái thử miễn phí
            </DialogTitle>
            <DialogDescription>
              Để lại thông tin, tư vấn viên sẽ liên hệ xác nhận lịch lái thử
              trong 24h — hoàn toàn miễn phí, không ràng buộc.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="mt-6 grid gap-4" noValidate>
            <div className="grid gap-2">
              <Label htmlFor="popup-name">
                Họ và tên <span className="text-destructive">*</span>
              </Label>
              <Input
                id="popup-name"
                name="name"
                placeholder="Nguyễn Văn A"
                autoComplete="name"
                required
                className="h-11 rounded-xl"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="popup-phone">
                Số điện thoại <span className="text-destructive">*</span>
              </Label>
              <Input
                id="popup-phone"
                name="phone"
                type="tel"
                placeholder="09xx xxx xxx"
                autoComplete="tel"
                required
                className="h-11 rounded-xl"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="popup-model">Mẫu xe quan tâm</Label>
              <Select
                value={model}
                onValueChange={(value) => setModel(value ?? featured.name)}
              >
                <SelectTrigger id="popup-model" className="h-11 w-full rounded-xl">
                  <SelectValue placeholder="Chọn mẫu xe" />
                </SelectTrigger>
                <SelectContent>
                  {cars.map((car) => (
                    <SelectItem key={car.slug} value={car.name}>
                      {car.name} — từ {car.priceDisplay}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={submitting}
              className="mt-1 h-12 rounded-full text-base font-semibold"
            >
              {submitting ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Đang gửi...
                </>
              ) : (
                <>
                  <CalendarCheck className="size-4" />
                  Đăng ký lái thử ngay
                </>
              )}
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              Thông tin của bạn được bảo mật và chỉ dùng để liên hệ tư vấn.
            </p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
