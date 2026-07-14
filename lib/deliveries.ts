export type Delivery = {
  /**
   * Ảnh lễ bàn giao: đặt file vào public/deliveries/
   * rồi khai báo đường dẫn ở danh sách bên dưới.
   * Chưa có ảnh thì bỏ trống — ô sẽ hiển thị placeholder.
   */
  image?: string;
  /** Tailwind object-position khi cần lệch vùng crop (vd: "object-left") */
  objectPosition?: string;
};

export const deliveries: Delivery[] = [
  { image: "/deliveries/ban-giao-1.jpg" },
  { image: "/deliveries/ban-giao-3.jpg" },
  { image: "/deliveries/ban-giao-7.jpg" },
  { image: "/deliveries/ban-giao-5.jpg" },
  { image: "/deliveries/ban-giao-6.jpg" },
  { image: "/deliveries/ban-giao-8.jpg" },
];
