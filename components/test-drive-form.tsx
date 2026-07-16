"use client";

import { useState } from "react";
import { CalendarCheck, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useLang } from "@/components/language-provider";
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
import { cars, localizeCar } from "@/lib/cars";
import { submitTestDrive } from "@/lib/leads";
import { siteConfig } from "@/lib/site-config";

const copy = {
  vi: {
    eyebrow: "Trải nghiệm thực tế",
    heading: "Đăng ký lái thử miễn phí",
    intro: (name: string) =>
      `Để lại thông tin, đội ngũ tư vấn của ${name} sẽ liên hệ xác nhận lịch lái thử trong vòng 24 giờ. Hoàn toàn miễn phí, không ràng buộc.`,
    benefits: [
      "Lái thử tại showroom hoặc tận nhà theo yêu cầu",
      "Tư vấn báo giá lăn bánh và ưu đãi mới nhất",
      "Hỗ trợ trả góp lên đến 80% giá trị xe",
    ],
    name: "Họ và tên",
    namePlaceholder: "Nguyễn Văn A",
    phone: "Số điện thoại",
    phonePlaceholder: "09xx xxx xxx",
    email: "Email",
    emailPlaceholder: "ban@email.com",
    model: "Mẫu xe quan tâm",
    modelPlaceholder: "Chọn mẫu xe",
    from: "từ",
    note: "Ghi chú",
    notePlaceholder: "Thời gian mong muốn, khu vực của bạn...",
    submit: "Đăng ký lái thử ngay",
    submitting: "Đang gửi...",
    privacy: "Thông tin của bạn được bảo mật và chỉ dùng để liên hệ tư vấn.",
    missingFields: "Vui lòng nhập họ tên và số điện thoại.",
    invalidPhone: "Số điện thoại chưa đúng định dạng.",
    missingModel: "Vui lòng chọn mẫu xe bạn muốn lái thử.",
    success: "Đăng ký lái thử thành công!",
    successDetail: (name: string, phone: string) =>
      `Cảm ơn ${name}, tư vấn viên sẽ liên hệ bạn qua số ${phone} trong 24h.`,
    genericError: "Không gửi được đăng ký, vui lòng thử lại.",
  },
  en: {
    eyebrow: "Experience it yourself",
    heading: "Book a free test drive",
    intro: (name: string) =>
      `Leave your details and the ${name} team will confirm your test-drive schedule within 24 hours. Completely free, no obligation.`,
    benefits: [
      "Test drive at the showroom or at your home on request",
      "On-the-road quotes and the latest offers",
      "Financing support for up to 80% of the car's value",
    ],
    name: "Full name",
    namePlaceholder: "John Smith",
    phone: "Phone number",
    phonePlaceholder: "09xx xxx xxx",
    email: "Email",
    emailPlaceholder: "you@email.com",
    model: "Model of interest",
    modelPlaceholder: "Choose a model",
    from: "from",
    note: "Notes",
    notePlaceholder: "Preferred time, your area...",
    submit: "Book a test drive now",
    submitting: "Sending...",
    privacy: "Your details are kept private and used only to contact you.",
    missingFields: "Please enter your name and phone number.",
    invalidPhone: "The phone number format is not valid.",
    missingModel: "Please choose the model you would like to test drive.",
    success: "Test drive booked successfully!",
    successDetail: (name: string, phone: string) =>
      `Thank you ${name}, a consultant will contact you at ${phone} within 24 hours.`,
    genericError: "Could not submit your request, please try again.",
  },
};

export function TestDriveForm({ defaultModel }: { defaultModel?: string }) {
  const { lang } = useLang();
  const t = copy[lang];
  const [submitting, setSubmitting] = useState(false);
  const [model, setModel] = useState<string>(defaultModel ?? "");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();

    if (!name || !phone) {
      toast.error(t.missingFields);
      return;
    }
    if (!/^(0|\+84)\d{8,10}$/.test(phone.replaceAll(" ", ""))) {
      toast.error(t.invalidPhone);
      return;
    }
    if (!model) {
      toast.error(t.missingModel);
      return;
    }

    setSubmitting(true);
    const result = await submitTestDrive({
      name,
      phone,
      model,
      email: String(data.get("email") ?? "").trim(),
      note: String(data.get("note") ?? "").trim(),
      source: "Form lái thử trang chủ",
    });
    setSubmitting(false);

    if (!result.ok) {
      // Thông báo lỗi từ server là tiếng Việt; tiếng Anh dùng câu chung
      toast.error(lang === "vi" ? result.error : t.genericError);
      return;
    }

    form.reset();
    setModel(defaultModel ?? "");
    toast.success(t.success, {
      description: t.successDetail(name, phone),
    });
  }

  return (
    <section id="lai-thu" className="bg-muted/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr]">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              {t.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
              {t.heading}
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
              {t.intro(siteConfig.name)}
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              {t.benefits.map((benefit) => (
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
                        {t.name} <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder={t.namePlaceholder}
                        autoComplete="name"
                        required
                        className="h-11 rounded-xl"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="phone">
                        {t.phone} <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder={t.phonePlaceholder}
                        autoComplete="tel"
                        required
                        className="h-11 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <Label htmlFor="email">{t.email}</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder={t.emailPlaceholder}
                        autoComplete="email"
                        className="h-11 rounded-xl"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="model">
                        {t.model} <span className="text-destructive">*</span>
                      </Label>
                      <Select
                        value={model}
                        onValueChange={(value) => setModel(value ?? "")}
                      >
                        <SelectTrigger
                          id="model"
                          className="h-11 w-full rounded-xl"
                        >
                          <SelectValue placeholder={t.modelPlaceholder} />
                        </SelectTrigger>
                        <SelectContent>
                          {cars.map((car) => (
                            <SelectItem key={car.slug} value={car.name}>
                              {car.name} — {t.from}{" "}
                              {localizeCar(car, lang).priceDisplay}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="note">{t.note}</Label>
                    <Textarea
                      id="note"
                      name="note"
                      placeholder={t.notePlaceholder}
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
                        {t.submitting}
                      </>
                    ) : (
                      t.submit
                    )}
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    {t.privacy}
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
