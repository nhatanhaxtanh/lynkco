"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useLang } from "@/components/language-provider";
import { Separator } from "@/components/ui/separator";
import { cars, localizeCar } from "@/lib/cars";
import { siteConfig } from "@/lib/site-config";

const copy = {
  vi: {
    about:
      "— đại lý phân phối xe Lynk & Co chính hãng. Trải nghiệm sự kết hợp giữa công nghệ tối tân và thiết kế sang trọng chuẩn châu Âu.",
    models: "Mẫu xe",
    from: "từ",
    quickLinks: "Liên kết nhanh",
    priceList: "Bảng giá xe",
    testDrive: "Đăng ký lái thử",
    why: "Vì sao chọn Lynk & Co",
    deliveries: "Lễ bàn giao xe",
    showroom: "Showroom",
    news: "Tin tức & Sự kiện",
    disclaimer:
      "Giá xe và thông số mang tính tham khảo, có thể thay đổi theo từng thời điểm.",
  },
  en: {
    about:
      "— an authorized Lynk & Co dealer. Experience the blend of cutting-edge technology and refined European design.",
    models: "Models",
    from: "from",
    quickLinks: "Quick links",
    priceList: "Price list",
    testDrive: "Book a test drive",
    why: "Why Lynk & Co",
    deliveries: "Delivery ceremonies",
    showroom: "Showroom",
    news: "News & Events",
    disclaimer:
      "Prices and specifications are for reference and may change over time.",
  },
};

export function SiteFooter() {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <footer id="lien-he" className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="text-xl font-black tracking-[0.2em]">LYNK &amp; CO</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              {siteConfig.name} {t.about}
            </p>
            <address className="mt-6 space-y-3 text-sm not-italic text-white/70">
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                {siteConfig.address}
              </p>
              <p className="flex items-center gap-3">
                <Phone className="size-4 shrink-0" />
                <a href={`tel:${siteConfig.hotline}`} className="hover:text-white">
                  {siteConfig.hotlineDisplay}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Clock className="size-4 shrink-0" />
                {siteConfig.openingHours}
              </p>
              <p className="flex items-center gap-3">
                <Mail className="size-4 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                  {siteConfig.email}
                </a>
              </p>
            </address>
          </div>

          <nav aria-label={t.models}>
            <p className="text-sm font-semibold uppercase tracking-wider text-white/50">
              {t.models}
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              {cars.map((car) => {
                const c = localizeCar(car, lang);
                return (
                  <li key={car.slug}>
                    <a href="#mau-xe" className="hover:text-white">
                      {car.name} — {t.from} {c.priceDisplay}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <nav aria-label={t.quickLinks}>
            <p className="text-sm font-semibold uppercase tracking-wider text-white/50">
              {t.quickLinks}
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li>
                <a href="#mau-xe" className="hover:text-white">
                  {t.priceList}
                </a>
              </li>
              <li>
                <a href="#lai-thu" className="hover:text-white">
                  {t.testDrive}
                </a>
              </li>
              <li>
                <a href="#uu-diem" className="hover:text-white">
                  {t.why}
                </a>
              </li>
              <li>
                <a href="#ban-giao" className="hover:text-white">
                  {t.deliveries}
                </a>
              </li>
              <li>
                <a href="#showroom" className="hover:text-white">
                  {t.showroom}
                </a>
              </li>
              <li>
                <a href="/#tin-tuc" className="hover:text-white">
                  {t.news}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <Separator className="my-8 bg-white/10" />
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} {siteConfig.name}. {t.disclaimer}
        </p>
      </div>
    </footer>
  );
}
