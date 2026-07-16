import type { Lang } from "@/lib/i18n";

export type CarSpec = { label: string; value: string };

/** Bản dịch tiếng Anh cho các trường hiển thị của một mẫu xe */
export type CarEn = {
  tagline: string;
  bodyType: string;
  powertrain: string;
  power: string;
  seats: string;
  priceDisplay: string;
  description: string;
  specs: CarSpec[];
  features: string[];
};

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
  en: CarEn;
};

/** Trả về xe với các trường hiển thị theo ngôn ngữ đang chọn */
export function localizeCar(car: Car, lang: Lang): Car {
  return lang === "en" ? { ...car, ...car.en } : car;
}

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
    en: {
      tagline: "Premium urban SUV — the model that started Lynk & Co",
      bodyType: "C-segment SUV",
      powertrain: "1.5L Turbo petrol",
      power: "181 hp",
      seats: "5 seats",
      priceDisplay: "919 million",
      description:
        "The Lynk & Co 01 is the brand's founding C-segment SUV, built on the CMA platform co-developed with Volvo. Distinctive Scandinavian design, a spacious cabin and a full suite of active-safety technology make the 01 a standout choice in its class.",
      specs: [
        { label: "Dimensions L × W × H", value: "4,549 × 1,860 × 1,689 mm" },
        { label: "Wheelbase", value: "2,734 mm" },
        { label: "Engine", value: "1.5L Turbo petrol" },
        { label: "Max power", value: "181 hp" },
        { label: "Max torque", value: "265 Nm" },
        { label: "Transmission", value: "7-speed dual-clutch (7DCT)" },
        { label: "Drivetrain", value: "Front-wheel drive (FWD)" },
        { label: "Seating", value: "5" },
      ],
      features: [
        "CMA platform co-developed with Volvo",
        "Full ADAS active-safety package",
        "12.3-inch central touchscreen",
        "Digital instrument cluster",
        "Panoramic sunroof",
        "Power leather seats with driver memory",
        "Wireless phone charging",
        "Adaptive LED headlights",
      ],
    },
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
    en: {
      tagline: "All-electric coupe SUV for the new generation",
      bodyType: "Coupe SUV",
      powertrain: "Battery electric (EV)",
      power: "272 hp",
      seats: "5 seats",
      priceDisplay: "899 million",
      description:
        "The Lynk & Co 02 is an all-electric coupe SUV with youthful styling, an engaging rear-wheel-drive character and impressive acceleration. The ideal choice for the modern city — zero emissions, zero noise.",
      specs: [
        { label: "Dimensions L × W × H", value: "4,460 × 1,845 × 1,573 mm" },
        { label: "Wheelbase", value: "2,755 mm" },
        { label: "Motor", value: "Single electric motor" },
        { label: "Max power", value: "272 hp" },
        { label: "Max torque", value: "343 Nm" },
        { label: "Drivetrain", value: "Rear-wheel drive (RWD)" },
        { label: "Range", value: "~530 km (CLTC)" },
        { label: "Seating", value: "5" },
      ],
      features: [
        "Fully electric — zero emissions, silent running",
        "Rear-wheel drive for an engaging feel",
        "DC fast charging, 30–80% in about 30 minutes",
        "Large central display with voice assistant",
        "ADAS active-safety package",
        "Minimalist Nordic-style interior",
      ],
    },
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
    en: {
      tagline: "High-performance sedan with TCR racing DNA",
      bodyType: "Sports sedan",
      powertrain: "2.0L Turbo petrol AWD",
      power: "254 hp",
      seats: "5 seats",
      priceDisplay: "1.899 billion",
      description:
        "The Lynk & Co 03+ inherits its DNA directly from the TCR World Tour championship-winning race car. A 2.0L Turbo engine, permanent all-wheel drive and an aerodynamic bodykit make the 03+ a rare high-performance sedan at its price point.",
      specs: [
        { label: "Dimensions L × W × H", value: "4,684 × 1,843 × 1,460 mm" },
        { label: "Wheelbase", value: "2,730 mm" },
        { label: "Engine", value: "2.0L Turbo petrol" },
        { label: "Max power", value: "254 hp" },
        { label: "Max torque", value: "350 Nm" },
        { label: "Transmission", value: "8-speed automatic (8AT)" },
        { label: "Drivetrain", value: "All-wheel drive (AWD)" },
        { label: "0–100 km/h", value: "~6 seconds" },
      ],
      features: [
        "DNA from the TCR World Tour champion race car",
        "Aerodynamic bodykit with carbon rear wing",
        "AWD with multiple drive modes",
        "High-performance brakes, sport wheels",
        "Body-hugging sport seats",
        "Twin sport exhaust",
      ],
    },
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
    en: {
      tagline: "A luxurious coupe SUV with European character",
      bodyType: "Coupe SUV",
      powertrain: "2.0L Turbo petrol",
      power: "254 hp",
      seats: "5 seats",
      priceDisplay: "1.599 billion",
      description:
        "The Lynk & Co 05 pairs a captivating coupe-SUV silhouette with a punchy 254 hp 2.0L Turbo. A premium leather-trimmed cabin, excellent sound insulation and a long list of comfort features turn every journey into a first-class experience.",
      specs: [
        { label: "Dimensions L × W × H", value: "4,592 × 1,879 × 1,628 mm" },
        { label: "Wheelbase", value: "2,734 mm" },
        { label: "Engine", value: "2.0L Turbo petrol" },
        { label: "Max power", value: "254 hp" },
        { label: "Max torque", value: "350 Nm" },
        { label: "Transmission", value: "8-speed automatic (8AT)" },
        { label: "Drivetrain", value: "All-wheel drive (AWD)" },
        { label: "Seating", value: "5" },
      ],
      features: [
        "Sporty sloping-roof coupe SUV design",
        "Premium leather interior, active noise insulation",
        "Panoramic sunroof",
        "Premium surround sound",
        "Hands-free power tailgate",
        "Full ADAS active-safety package",
      ],
    },
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
    en: {
      tagline: "The dynamic B-segment SUV leading its class",
      bodyType: "B-segment SUV",
      powertrain: "1.5L Turbo petrol",
      power: "181 hp",
      seats: "5 seats",
      priceDisplay: "679 million",
      description:
        "The Lynk & Co 06 is the most accessible way into the Lynk & Co world. A B-segment SUV with the most powerful engine in its class — a 181 hp 1.5L Turbo — bold design and equipment well above its price.",
      specs: [
        { label: "Dimensions L × W × H", value: "4,340 × 1,820 × 1,625 mm" },
        { label: "Wheelbase", value: "2,640 mm" },
        { label: "Engine", value: "1.5L Turbo petrol" },
        { label: "Max power", value: "181 hp" },
        { label: "Max torque", value: "290 Nm" },
        { label: "Transmission", value: "7-speed dual-clutch (7DCT)" },
        { label: "Drivetrain", value: "Front-wheel drive (FWD)" },
        { label: "Seating", value: "5" },
      ],
      features: [
        "Most powerful engine in the B-SUV segment",
        "Large central display with smart connectivity",
        "ADAS active-safety package",
        "Sunroof and wireless charging",
        "Full-LED lighting with signature DRLs",
        "Flexible luggage compartment",
      ],
    },
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
    en: {
      tagline: "EM-P plug-in hybrid SUV — refined and remarkably efficient",
      bodyType: "D-segment SUV",
      powertrain: "EM-P plug-in hybrid",
      power: "345 hp",
      seats: "5 seats",
      priceDisplay: "1.299 billion",
      description:
        "The Lynk & Co 08 features the EM-P plug-in hybrid powertrain with a combined 345 hp — powerful when you need it, efficient on every journey. Drive up to ~120 km on electricity alone for daily city use, with a total range of over 1,000 km.",
      specs: [
        { label: "Dimensions L × W × H", value: "4,820 × 1,915 × 1,685 mm" },
        { label: "Wheelbase", value: "2,848 mm" },
        { label: "Powertrain", value: "EM-P: 1.5L Turbo + electric motors" },
        { label: "Combined power", value: "345 hp" },
        { label: "Transmission", value: "3-speed DHT Pro" },
        { label: "Drivetrain", value: "Front-wheel drive (FWD)" },
        { label: "Electric range", value: "~120 km" },
        { label: "Total range", value: "over 1,000 km" },
      ],
      features: [
        "New-generation EM-P powertrain",
        "Electric daily driving, no range anxiety on trips",
        "Crisp 15.4-inch central display",
        "Harman Kardon sound system",
        "Massage, ventilated and heated seats",
        "Advanced ADAS with highway assist",
        "Panoramic sunroof, ambient lighting",
      ],
    },
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
    en: {
      tagline: "Full-size 7-seat SUV — the ultimate family experience",
      bodyType: "E-segment SUV",
      powertrain: "2.0L Turbo petrol AWD",
      power: "254 hp",
      seats: "7 seats",
      priceDisplay: "2.199 billion",
      description:
        "The Lynk & Co 09 is an E-segment 7-seat SUV built on Volvo's SPA platform. Three spacious seat rows, assured 2.0L Turbo AWD performance and top-tier safety standards for the whole family.",
      specs: [
        { label: "Dimensions L × W × H", value: "5,042 × 1,977 × 1,780 mm" },
        { label: "Wheelbase", value: "2,984 mm" },
        { label: "Engine", value: "2.0L Turbo petrol" },
        { label: "Max power", value: "254 hp" },
        { label: "Max torque", value: "350 Nm" },
        { label: "Transmission", value: "8-speed automatic (8AT)" },
        { label: "Drivetrain", value: "All-wheel drive (AWD)" },
        { label: "Seating", value: "7 (2+3+2)" },
      ],
      features: [
        "SPA platform shared with the Volvo XC90",
        "Three spacious rows seating 7 adults",
        "Optional air suspension, premium insulation",
        "Premium surround sound",
        "Nappa leather, power second-row seats",
        "Full ADAS with 360-degree camera",
      ],
    },
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
    en: {
      tagline: "Flagship 6-seat SUV — the pinnacle of technology and luxury",
      bodyType: "Flagship SUV",
      powertrain: "EM-P plug-in hybrid",
      power: "500+ hp",
      seats: "6 seats",
      priceDisplay: "3.069 billion",
      description:
        "The Lynk & Co 900 is the flagship 6-seat SUV with an EM-P powertrain producing over 500 hp, a 2+2+2 business-class cabin and a suite of cutting-edge technology — Lynk & Co's boldest statement of luxury and refinement.",
      specs: [
        { label: "Dimensions L × W × H", value: "5,240 × 1,999 × 1,810 mm" },
        { label: "Wheelbase", value: "3,160 mm" },
        { label: "Powertrain", value: "EM-P: 2.0L Turbo + electric motors" },
        { label: "Combined power", value: "over 500 hp" },
        { label: "Drivetrain", value: "All-wheel drive (AWD)" },
        { label: "Electric range", value: "~220 km (CLTC)" },
        { label: "Seating", value: "6 (2+2+2)" },
        { label: "Status", value: "Just launched — contact us to order" },
      ],
      features: [
        "Business-class 2+2+2 six-seat cabin",
        "Second row swivels 180 degrees, work table",
        "Large entertainment screens for every row",
        "EM-P powertrain with over 500 hp",
        "Air suspension with adaptive dampers",
        "Lynk & Co's most advanced ADAS",
        "Reference-grade surround sound",
      ],
    },
  },
];

export function getCar(slug: string): Car | undefined {
  return cars.find((car) => car.slug === slug);
}

export function formatVnd(price: number): string {
  return new Intl.NumberFormat("vi-VN").format(price) + " VNĐ";
}
