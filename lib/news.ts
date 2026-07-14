export type NewsCategory = "Tin tức" | "Sự kiện" | "Khuyến mãi";

export type NewsPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: NewsCategory;
  /** Ngày đăng dạng ISO yyyy-mm-dd */
  date: string;
  /** Ảnh cover: dùng lại ảnh trong public/ hoặc thêm ảnh mới */
  image?: string;
  /** Nội dung bài viết, mỗi phần tử là một đoạn văn */
  content: string[];
};

export const newsPosts: NewsPost[] = [
  {
    slug: "lynk-co-900-sap-ra-mat-nhan-dat-coc",
    title: "Lynk & Co 900 sắp ra mắt Việt Nam — nhận đặt cọc sớm với ưu đãi đặc biệt",
    excerpt:
      "Flagship SUV 6 chỗ với hệ truyền động EM-P trên 500 mã lực dự kiến ra mắt trong quý tới. Khách hàng đặt cọc sớm nhận ưu đãi và quà tặng giới hạn.",
    category: "Tin tức",
    date: "2026-07-10",
    image: "/cars/lynk-co-900.jpeg",
    content: [
      "Lynk & Co 900 — mẫu SUV flagship 6 chỗ được mong chờ nhất của thương hiệu — dự kiến sẽ chính thức ra mắt thị trường Việt Nam trong thời gian tới với giá dự kiến 3,069 tỷ đồng.",
      "Xe sở hữu kích thước ấn tượng với chiều dài 5.240 mm và chiều dài cơ sở lên tới 3.160 mm, mang đến khoang thương gia 2+2+2 rộng rãi bậc nhất phân khúc. Hàng ghế thứ hai có thể xoay 180 độ — trang bị hiếm thấy ngay cả ở những mẫu SUV siêu sang.",
      "Hệ truyền động Plug-in Hybrid EM-P kết hợp động cơ 2.0L Turbo cùng các mô-tơ điện cho tổng công suất trên 500 mã lực, tầm chạy thuần điện khoảng 220 km — đủ cho cả tuần di chuyển trong đô thị mà không tốn một giọt xăng.",
      "Khách hàng quan tâm có thể liên hệ showroom để đăng ký nhận thông tin sớm nhất và giữ suất đặt cọc với nhiều quyền lợi: ưu tiên nhận xe đợt đầu, quà tặng phiên bản giới hạn và gói bảo dưỡng miễn phí.",
    ],
  },
  {
    slug: "uu-dai-thang-7-lynk-co-08",
    title: "Ưu đãi tháng 7: hỗ trợ 50% lệ phí trước bạ cho Lynk & Co 08 EM-P",
    excerpt:
      "Trong tháng 7, khách hàng ký hợp đồng Lynk & Co 08 EM-P nhận hỗ trợ 50% lệ phí trước bạ cùng gói phụ kiện chính hãng trị giá 30 triệu đồng.",
    category: "Khuyến mãi",
    date: "2026-07-01",
    image: "/cars/lynk-co-08.webp",
    content: [
      "Từ ngày 01/07 đến hết 31/07, Lynk & Co Sài Gòn triển khai chương trình ưu đãi đặc biệt dành cho mẫu SUV Plug-in Hybrid Lynk & Co 08 EM-P.",
      "Cụ thể, khách hàng ký hợp đồng và nhận xe trong thời gian diễn ra chương trình sẽ được hỗ trợ 50% lệ phí trước bạ, tương đương tiết kiệm hàng chục triệu đồng chi phí lăn bánh.",
      "Bên cạnh đó, mỗi khách hàng còn nhận gói phụ kiện chính hãng trị giá 30 triệu đồng gồm: phim cách nhiệt cao cấp, thảm sàn 3D, camera hành trình và gói phủ ceramic toàn xe.",
      "Số lượng xe ưu đãi có hạn. Quý khách vui lòng liên hệ hotline hoặc đăng ký lái thử ngay trên website để được tư vấn chi tiết về chương trình.",
    ],
  },
  {
    slug: "nhung-le-ban-giao-dau-tien",
    title: "Những lễ bàn giao đầu tiên tại Lynk & Co Sài Gòn — niềm vui lan tỏa",
    excerpt:
      "Không khí rộn ràng tại showroom khi những chiếc Lynk & Co 06 và 08 đầu tiên chính thức đến tay khách hàng trong nghi thức bàn giao trang trọng.",
    category: "Sự kiện",
    date: "2026-06-28",
    image: "/deliveries/ban-giao-1.jpg",
    content: [
      "Tuần vừa qua, Lynk & Co Sài Gòn liên tục tổ chức các buổi lễ bàn giao xe cho những khách hàng đầu tiên — cột mốc ý nghĩa đánh dấu hành trình của thương hiệu tại thị trường Việt Nam.",
      "Mỗi buổi bàn giao đều được chuẩn bị chỉn chu: xe được kiểm tra kỹ thuật toàn diện, vệ sinh chi tiết, trang trí cổng bóng bay theo tông màu đặc trưng của thương hiệu cùng hoa tươi và quà tặng lưu niệm.",
      "Đội ngũ tư vấn cũng dành thời gian hướng dẫn khách hàng làm quen với các tính năng thông minh trên xe — từ hệ thống hỗ trợ lái ADAS đến kết nối điện thoại và điều khiển bằng giọng nói.",
      "Lynk & Co Sài Gòn trân trọng cảm ơn sự tin tưởng của quý khách hàng và cam kết đồng hành trọn vòng đời sử dụng xe với dịch vụ hậu mãi tận tâm.",
    ],
  },
  {
    slug: "ra-mat-lynk-co-06-core-plus",
    title: "Lynk & Co 06 Core Plus chính thức ra mắt tại Việt Nam",
    excerpt:
      "Phiên bản 06 Core Plus trình làng với mức giá hấp dẫn, bổ sung nhiều trang bị đáng giá — tiếp tục củng cố vị thế dẫn đầu phân khúc SUV cỡ B.",
    category: "Sự kiện",
    date: "2026-06-20",
    image: "/showroom.jpg",
    content: [
      "Sự kiện ra mắt Lynk & Co 06 Core Plus vừa diễn ra tại showroom Lynk & Co Sài Gòn với sự tham gia của đông đảo khách hàng và người yêu xe.",
      "06 Core Plus là phiên bản bổ sung nằm giữa các bản hiện hành, giữ nguyên động cơ 1.5L Turbo 181 mã lực mạnh nhất phân khúc nhưng được tinh chỉnh danh sách trang bị để tối ưu giá bán.",
      "Điểm nhấn của sự kiện là màn trải nghiệm trực tiếp: khách tham dự được ngồi thử, lái thử và tìm hiểu chi tiết công nghệ an toàn ADAS cùng hệ thống giải trí thông minh trên xe.",
      "Ngay trong ngày ra mắt, showroom đã ghi nhận nhiều đơn đặt cọc — minh chứng cho sức hút của mẫu SUV cỡ B đến từ liên minh Geely–Volvo.",
    ],
  },
];

export function getPost(slug: string): NewsPost | undefined {
  return newsPosts.find((post) => post.slug === slug);
}

export function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00").toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}
