import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { cars } from "@/lib/cars";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer id="lien-he" className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="text-xl font-black tracking-[0.2em]">LYNK &amp; CO</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              {siteConfig.name} — đại lý phân phối xe Lynk &amp; Co chính hãng.
              Trải nghiệm sự kết hợp giữa công nghệ tối tân và thiết kế sang
              trọng chuẩn châu Âu.
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
                <a href={siteConfig.zalo} className="hover:text-white">
                  Nhắn tin Zalo
                </a>
              </p>
            </address>
          </div>

          <nav aria-label="Mẫu xe">
            <p className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Mẫu xe
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              {cars.map((car) => (
                <li key={car.slug}>
                  <a href="#mau-xe" className="hover:text-white">
                    {car.name} — từ {car.priceDisplay}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Liên kết nhanh">
            <p className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Liên kết nhanh
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li>
                <a href="#mau-xe" className="hover:text-white">
                  Bảng giá xe
                </a>
              </li>
              <li>
                <a href="#lai-thu" className="hover:text-white">
                  Đăng ký lái thử
                </a>
              </li>
              <li>
                <a href="#uu-diem" className="hover:text-white">
                  Vì sao chọn Lynk &amp; Co
                </a>
              </li>
              <li>
                <a href="#ban-giao" className="hover:text-white">
                  Lễ bàn giao xe
                </a>
              </li>
              <li>
                <a href="#showroom" className="hover:text-white">
                  Showroom
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
          © {new Date().getFullYear()} {siteConfig.name}. Giá xe và thông số
          mang tính tham khảo, có thể thay đổi theo từng thời điểm.
        </p>
      </div>
    </footer>
  );
}
