"use client";

import { useState } from "react";
import { CalendarCheck, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FadeIn } from "@/components/fade-in";
import { cars } from "@/lib/cars";
import { siteConfig } from "@/lib/site-config";

export function TestDriveForm({ defaultModel }: { defaultModel?: string }) {
  const [submitting, setSubmitting] = useState(false);
  const [model, setModel] = useState<string>(defaultModel ?? "");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
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
    if (!model) {
      toast.error("Vui lòng chọn mẫu xe bạn muốn lái thử.");
      return;
    }

    setSubmitting(true);
    // TODO: nối API/CRM thật tại đây (POST /api/test-drive)
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSubmitting(false);

    form.reset();
    setModel(defaultModel ?? "");
    toast.success("Đăng ký lái thử thành công!", {
      description: `Cảm ơn ${name}, tư vấn viên sẽ liên hệ bạn qua số ${phone} trong 24h.`,
    });
  }

  return (
    <section id="lai-thu" className="bg-muted/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr]">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Trải nghiệm thực tế
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
              Đăng ký lái thử miễn phí
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
              Để lại thông tin, đội ngũ tư vấn của {siteConfig.name} sẽ liên hệ
              xác nhận lịch lái thử trong vòng 24 giờ. Hoàn toàn miễn phí,
              không ràng buộc.
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              {[
                "Lái thử tại showroom hoặc tận nhà theo yêu cầu",
                "Tư vấn báo giá lăn bánh và ưu đãi mới nhất",
                "Hỗ trợ trả góp lên đến 80% giá trị xe",
              ].map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-white">
                    <CalendarCheck className="size-3" />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Card className="rounded-3xl border-border/80 shadow-xl shadow-neutral-900/5">
              <CardContent className="p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="grid gap-5" noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <Label htmlFor="name">
                        Họ và tên <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Nguyễn Văn A"
                        autoComplete="name"
                        required
                        className="h-11 rounded-xl"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="phone">
                        Số điện thoại <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="09xx xxx xxx"
                        autoComplete="tel"
                        required
                        className="h-11 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="ban@email.com"
                        autoComplete="email"
                        className="h-11 rounded-xl"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="model">
                        Mẫu xe quan tâm <span className="text-destructive">*</span>
                      </Label>
                      <Select
                        value={model}
                        onValueChange={(value) => setModel(value ?? "")}
                      >
                        <SelectTrigger
                          id="model"
                          className="h-11 w-full rounded-xl"
                        >
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
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="note">Ghi chú</Label>
                    <Textarea
                      id="note"
                      name="note"
                      placeholder="Thời gian mong muốn, khu vực của bạn..."
                      rows={3}
                      className="rounded-xl"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={submitting}
                    className="h-12 rounded-full text-base font-semibold"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        Đang gửi...
                      </>
                    ) : (
                      "Đăng ký lái thử ngay"
                    )}
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    Thông tin của bạn được bảo mật và chỉ dùng để liên hệ tư vấn.
                  </p>
                </form>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
