export type Delivery = {
  /**
   * Ảnh lễ bàn giao: đặt file vào public/deliveries/
   * rồi khai báo ví dụ: image: "/deliveries/ban-giao-01.jpg"
   * Chưa có ảnh thì bỏ trống — ô sẽ hiển thị placeholder.
   */
  image?: string;
  /** Chỉ dùng làm alt text cho SEO/trợ năng, không hiển thị trên ảnh */
  caption: string;
  /** Tailwind object-position khi cần lệch vùng crop (vd: "object-left") */
  objectPosition?: string;
};

export const deliveries: Delivery[] = [
  {
    image: "/deliveries/ban-giao-1.jpg",
    caption: "Lễ bàn giao Lynk & Co 08 EM-P tại TP. Hồ Chí Minh",
  },
  {
    image: "/deliveries/ban-giao-3.jpg",
    caption: "Lễ bàn giao Lynk & Co 08 tại showroom",
  },
  {
    image: "/deliveries/ban-giao-4.jpg",
    caption: "Sự kiện ra mắt Lynk & Co 08 EM-P",
    objectPosition: "object-left",
  },
  {
    image: "/deliveries/ban-giao-5.jpg",
    caption: "Lễ bàn giao Lynk & Co 06 cho khách hàng",
  },
  {
    image: "/deliveries/ban-giao-6.jpg",
    caption: "Lễ bàn giao Lynk & Co 06 tại showroom",
  },
];
