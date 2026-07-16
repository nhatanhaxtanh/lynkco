export type CarSpec = { label: string; value: string };

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
  /** Mô tả dài cho trang chi tiết + meta description */
  description: string;
  /** Bảng thông số kỹ thuật (tham khảo) */
  specs: CarSpec[];
  /** Trang bị nổi bật */
  features: string[];
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
    description:
      "Lynk & Co 01 là mẫu SUV cỡ C mở đầu cho thương hiệu, phát triển trên nền tảng CMA đồng nghiên cứu cùng Volvo. Thiết kế Scandinavia cá tính, khoang nội thất rộng rãi cùng loạt công nghệ an toàn chủ động đưa 01 thành lựa chọn nổi bật trong phân khúc.",
    specs: [
      { label: "Kích thước D × R × C", value: "4.549 × 1.860 × 1.689 mm" },
      { label: "Chiều dài cơ sở", value: "2.734 mm" },
      { label: "Động cơ", value: "Xăng 1.5L Turbo" },
      { label: "Công suất tối đa", value: "181 mã lực" },
      { label: "Mô-men xoắn cực đại", value: "265 Nm" },
      { label: "Hộp số", value: "Ly hợp kép 7 cấp (7DCT)" },
      { label: "Dẫn động", value: "Cầu trước (FWD)" },
      { label: "Số chỗ ngồi", value: "5" },
    ],
    features: [
      "Nền tảng CMA đồng phát triển cùng Volvo",
      "Gói an toàn chủ động ADAS đầy đủ",
      "Màn hình trung tâm cảm ứng 12,3 inch",
      "Bảng đồng hồ kỹ thuật số sau vô-lăng",
      "Cửa sổ trời toàn cảnh Panorama",
      "Ghế da chỉnh điện, nhớ vị trí ghế lái",
      "Sạc điện thoại không dây",
      "Đèn pha LED thích ứng tự động",
    ],
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
    description:
      "Lynk & Co 02 là mẫu SUV Coupe thuần điện với thiết kế trẻ trung, vận hành phấn khích nhờ dẫn động cầu sau và khả năng tăng tốc ấn tượng. Lựa chọn lý tưởng cho đô thị hiện đại — không khí thải, không tiếng ồn.",
    specs: [
      { label: "Kích thước D × R × C", value: "4.460 × 1.845 × 1.573 mm" },
      { label: "Chiều dài cơ sở", value: "2.755 mm" },
      { label: "Động cơ", value: "Mô-tơ điện đơn" },
      { label: "Công suất tối đa", value: "272 mã lực" },
      { label: "Mô-men xoắn cực đại", value: "343 Nm" },
      { label: "Dẫn động", value: "Cầu sau (RWD)" },
      { label: "Tầm hoạt động", value: "~530 km (CLTC)" },
      { label: "Số chỗ ngồi", value: "5" },
    ],
    features: [
      "Thuần điện — không khí thải, vận hành êm ái",
      "Dẫn động cầu sau cho cảm giác lái phấn khích",
      "Sạc nhanh DC, 30–80% trong khoảng 30 phút",
      "Màn hình trung tâm lớn với trợ lý ảo",
      "Gói an toàn chủ động ADAS",
      "Nội thất tối giản phong cách Bắc Âu",
    ],
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
    description:
      "Lynk & Co 03+ kế thừa trực tiếp DNA từ mẫu xe đua vô địch TCR World Tour. Động cơ 2.0L Turbo, dẫn động 4 bánh toàn thời gian cùng bodykit khí động học biến 03+ thành sedan hiệu suất cao hiếm hoi trong tầm giá.",
    specs: [
      { label: "Kích thước D × R × C", value: "4.684 × 1.843 × 1.460 mm" },
      { label: "Chiều dài cơ sở", value: "2.730 mm" },
      { label: "Động cơ", value: "Xăng 2.0L Turbo" },
      { label: "Công suất tối đa", value: "254 mã lực" },
      { label: "Mô-men xoắn cực đại", value: "350 Nm" },
      { label: "Hộp số", value: "Tự động 8 cấp (8AT)" },
      { label: "Dẫn động", value: "4 bánh toàn thời gian (AWD)" },
      { label: "Tăng tốc 0–100 km/h", value: "~6 giây" },
    ],
    features: [
      "DNA từ xe đua vô địch TCR World Tour",
      "Bodykit khí động học, cánh gió carbon",
      "Dẫn động AWD với nhiều chế độ lái",
      "Phanh hiệu suất cao, la-zăng thể thao",
      "Ghế thể thao ôm thân người",
      "Ống xả kép thể thao",
    ],
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
    description:
      "Lynk & Co 05 kết hợp dáng SUV Coupe lôi cuốn với sức mạnh 2.0L Turbo 254 mã lực. Khoang lái bọc da cao cấp, cách âm tốt và danh sách trang bị tiện nghi dài biến mỗi hành trình thành một trải nghiệm thượng lưu.",
    specs: [
      { label: "Kích thước D × R × C", value: "4.592 × 1.879 × 1.628 mm" },
      { label: "Chiều dài cơ sở", value: "2.734 mm" },
      { label: "Động cơ", value: "Xăng 2.0L Turbo" },
      { label: "Công suất tối đa", value: "254 mã lực" },
      { label: "Mô-men xoắn cực đại", value: "350 Nm" },
      { label: "Hộp số", value: "Tự động 8 cấp (8AT)" },
      { label: "Dẫn động", value: "4 bánh toàn thời gian (AWD)" },
      { label: "Số chỗ ngồi", value: "5" },
    ],
    features: [
      "Thiết kế SUV Coupe mui dốc thể thao",
      "Nội thất da cao cấp, cách âm chủ động",
      "Cửa sổ trời toàn cảnh Panorama",
      "Âm thanh vòm cao cấp",
      "Cốp điện rảnh tay",
      "Gói an toàn chủ động ADAS đầy đủ",
    ],
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
    description:
      "Lynk & Co 06 là cánh cửa dễ tiếp cận nhất để bước vào thế giới Lynk & Co. SUV cỡ B với động cơ 1.5L Turbo 181 mã lực mạnh nhất phân khúc, thiết kế cá tính và trang bị vượt tầm giá.",
    specs: [
      { label: "Kích thước D × R × C", value: "4.340 × 1.820 × 1.625 mm" },
      { label: "Chiều dài cơ sở", value: "2.640 mm" },
      { label: "Động cơ", value: "Xăng 1.5L Turbo" },
      { label: "Công suất tối đa", value: "181 mã lực" },
      { label: "Mô-men xoắn cực đại", value: "290 Nm" },
      { label: "Hộp số", value: "Ly hợp kép 7 cấp (7DCT)" },
      { label: "Dẫn động", value: "Cầu trước (FWD)" },
      { label: "Số chỗ ngồi", value: "5" },
    ],
    features: [
      "Động cơ mạnh nhất phân khúc SUV cỡ B",
      "Màn hình trung tâm lớn, kết nối thông minh",
      "Gói an toàn chủ động ADAS",
      "Cửa sổ trời, sạc không dây",
      "Đèn LED toàn xe với dải định vị đặc trưng",
      "Khoang hành lý linh hoạt",
    ],
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
    description:
      "Lynk & Co 08 trang bị hệ truyền động Plug-in Hybrid EM-P với tổng công suất 345 mã lực — mạnh mẽ khi cần, tiết kiệm mọi hành trình. Chạy thuần điện tới ~120 km cho di chuyển đô thị hằng ngày và tổng tầm hoạt động trên 1.000 km.",
    specs: [
      { label: "Kích thước D × R × C", value: "4.820 × 1.915 × 1.685 mm" },
      { label: "Chiều dài cơ sở", value: "2.848 mm" },
      { label: "Hệ truyền động", value: "EM-P: 1.5L Turbo + mô-tơ điện" },
      { label: "Tổng công suất", value: "345 mã lực" },
      { label: "Hộp số", value: "DHT Pro 3 cấp" },
      { label: "Dẫn động", value: "Cầu trước (FWD)" },
      { label: "Tầm chạy thuần điện", value: "~120 km" },
      { label: "Tổng tầm hoạt động", value: "trên 1.000 km" },
    ],
    features: [
      "Hệ truyền động EM-P thế hệ mới",
      "Chạy điện hằng ngày, đường dài không lo sạc",
      "Màn hình trung tâm 15,4 inch sắc nét",
      "Hệ thống âm thanh Harman Kardon",
      "Ghế massage, thông gió, sưởi ấm",
      "ADAS cao cấp với hỗ trợ lái trên cao tốc",
      "Cửa sổ trời toàn cảnh, đèn viền nội thất",
    ],
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
    description:
      "Lynk & Co 09 là SUV cỡ E 7 chỗ phát triển trên nền tảng SPA của Volvo. Không gian 3 hàng ghế rộng rãi, vận hành 2.0L Turbo AWD chắc chắn và tiêu chuẩn an toàn hàng đầu cho cả gia đình.",
    specs: [
      { label: "Kích thước D × R × C", value: "5.042 × 1.977 × 1.780 mm" },
      { label: "Chiều dài cơ sở", value: "2.984 mm" },
      { label: "Động cơ", value: "Xăng 2.0L Turbo" },
      { label: "Công suất tối đa", value: "254 mã lực" },
      { label: "Mô-men xoắn cực đại", value: "350 Nm" },
      { label: "Hộp số", value: "Tự động 8 cấp (8AT)" },
      { label: "Dẫn động", value: "4 bánh toàn thời gian (AWD)" },
      { label: "Số chỗ ngồi", value: "7 (2+3+2)" },
    ],
    features: [
      "Nền tảng SPA chia sẻ cùng Volvo XC90",
      "3 hàng ghế rộng rãi cho 7 người lớn",
      "Treo khí nén tùy chọn, cách âm cao cấp",
      "Âm thanh vòm cao cấp",
      "Ghế da Nappa, hàng ghế 2 chỉnh điện",
      "ADAS đầy đủ với camera 360 độ",
    ],
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
    description:
      "Lynk & Co 900 là flagship SUV 6 chỗ với hệ truyền động EM-P trên 500 mã lực, khoang thương gia 2+2+2 và loạt công nghệ đỉnh cao — tuyên ngôn mạnh mẽ nhất của Lynk & Co về đẳng cấp và sự sang trọng.",
    specs: [
      { label: "Kích thước D × R × C", value: "5.240 × 1.999 × 1.810 mm" },
      { label: "Chiều dài cơ sở", value: "3.160 mm" },
      { label: "Hệ truyền động", value: "EM-P: 2.0L Turbo + mô-tơ điện" },
      { label: "Tổng công suất", value: "trên 500 mã lực" },
      { label: "Dẫn động", value: "4 bánh toàn thời gian (AWD)" },
      { label: "Tầm chạy thuần điện", value: "~220 km (CLTC)" },
      { label: "Số chỗ ngồi", value: "6 (2+2+2)" },
      { label: "Tình trạng", value: "Mới ra mắt — liên hệ đặt xe ngay" },
    ],
    features: [
      "Khoang thương gia 6 chỗ bố trí 2+2+2",
      "Hàng ghế 2 xoay 180 độ, bàn làm việc",
      "Màn hình giải trí cỡ lớn cho từng hàng ghế",
      "Hệ truyền động EM-P trên 500 mã lực",
      "Treo khí nén với giảm chấn điện tử",
      "ADAS cao cấp nhất của Lynk & Co",
      "Âm thanh vòm tham chiếu cao cấp",
    ],
  },
];

export function getCar(slug: string): Car | undefined {
  return cars.find((car) => car.slug === slug);
}

export function formatVnd(price: number): string {
  return new Intl.NumberFormat("vi-VN").format(price) + " VNĐ";
}
