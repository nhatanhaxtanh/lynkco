export type Car = {
  slug: string;
  /** Số hiệu model, dùng làm điểm nhấn typography trên card */
  code: string;
  name: string;
  tagline: string;
  bodyType: string;
  powertrain: string;
  power: string;
  seats: string;
  price: number;
  priceDisplay: string;
  /**
   * Ảnh thumbnail của xe: đặt file vào thư mục public/cars/
   * rồi khai báo ví dụ: image: "/cars/lynk-co-01.jpg"
   * Chưa có ảnh thì bỏ trống — card sẽ hiển thị placeholder.
   */
  image?: string;
  anticipated?: boolean;
  featured?: boolean;
};

export const cars: Car[] = [
  {
    slug: "lynk-co-01",
    code: "01",
    name: "Lynk & Co 01",
    tagline: "SUV đô thị cao cấp, biểu tượng khởi đầu của Lynk & Co",
    bodyType: "SUV cỡ C",
    powertrain: "Xăng 1.5L Turbo",
    power: "181 mã lực",
    seats: "5 chỗ",
    price: 919_000_000,
    priceDisplay: "919 triệu",
    image: "/cars/lynk-co-01.webp",
    featured: true,
  },
  {
    slug: "lynk-co-02",
    code: "02",
    name: "Lynk & Co 02",
    tagline: "SUV Coupe thuần điện cho thế hệ mới",
    bodyType: "SUV Coupe",
    powertrain: "Thuần điện (EV)",
    power: "272 mã lực",
    seats: "5 chỗ",
    price: 899_000_000,
    priceDisplay: "899 triệu",
    image: "/cars/lynk-co-02.jpg",
    anticipated: true,
  },
  {
    slug: "lynk-co-03-plus",
    code: "03+",
    name: "Lynk & Co 03+",
    tagline: "Sedan hiệu suất cao mang DNA đường đua TCR",
    bodyType: "Sedan thể thao",
    powertrain: "Xăng 2.0L Turbo AWD",
    power: "254 mã lực",
    seats: "5 chỗ",
    price: 1_899_000_000,
    priceDisplay: "1,899 tỷ",
    image: "/cars/lynk-co-03-plus.jpg",
  },
  {
    slug: "lynk-co-05",
    code: "05",
    name: "Lynk & Co 05",
    tagline: "SUV Coupe sang trọng, khí chất châu Âu",
    bodyType: "SUV Coupe",
    powertrain: "Xăng 2.0L Turbo",
    power: "254 mã lực",
    seats: "5 chỗ",
    price: 1_599_000_000,
    priceDisplay: "1,599 tỷ",
    image: "/cars/lynk-co-05.webp",
  },
  {
    slug: "lynk-co-06",
    code: "06",
    name: "Lynk & Co 06",
    tagline: "SUV cỡ B năng động, lựa chọn dẫn đầu phân khúc",
    bodyType: "SUV cỡ B",
    powertrain: "Xăng 1.5L Turbo",
    power: "181 mã lực",
    seats: "5 chỗ",
    price: 679_000_000,
    priceDisplay: "679 triệu",
    image: "/cars/lynk-co-06.jpg",
    featured: true,
  },
  {
    slug: "lynk-co-08",
    code: "08",
    name: "Lynk & Co 08",
    tagline: "SUV Plug-in Hybrid EM-P, êm ái và tiết kiệm vượt trội",
    bodyType: "SUV cỡ D",
    powertrain: "Plug-in Hybrid EM-P",
    power: "345 mã lực",
    seats: "5 chỗ",
    price: 1_299_000_000,
    priceDisplay: "1,299 tỷ",
    image: "/cars/lynk-co-08.webp",
    featured: true,
  },
  {
    slug: "lynk-co-09",
    code: "09",
    name: "Lynk & Co 09",
    tagline: "SUV cỡ lớn 7 chỗ, đỉnh cao trải nghiệm gia đình",
    bodyType: "SUV cỡ E",
    powertrain: "Xăng 2.0L Turbo AWD",
    power: "254 mã lực",
    seats: "7 chỗ",
    price: 2_199_000_000,
    priceDisplay: "2,199 tỷ",
    image: "/cars/lynk-co-09.webp",
  },
  {
    slug: "lynk-co-900",
    code: "900",
    name: "Lynk & Co 900",
    tagline: "Flagship SUV 6 chỗ — công nghệ và đẳng cấp tối thượng",
    bodyType: "SUV Flagship",
    powertrain: "Plug-in Hybrid EM-P",
    power: "Trên 500 mã lực",
    seats: "6 chỗ",
    price: 3_069_000_000,
    priceDisplay: "3,069 tỷ",
    image: "/cars/lynk-co-900-card.jpg",
    anticipated: true,
  },
];

export function formatVnd(price: number): string {
  return new Intl.NumberFormat("vi-VN").format(price) + " VNĐ";
}
