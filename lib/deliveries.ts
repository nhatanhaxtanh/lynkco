export type Delivery = {
  /**
   * Ảnh lễ bàn giao: đặt file vào public/deliveries/
   * rồi khai báo ví dụ: image: "/deliveries/ban-giao-01.jpg"
   * Chưa có ảnh thì bỏ trống — ô sẽ hiển thị placeholder.
   */
  image?: string;
  caption: string;
  location: string;
  /** Tailwind object-position khi cần lệch vùng crop (vd: "object-left") */
  objectPosition?: string;
};

export const deliveries: Delivery[] = [
  {
    image: "/deliveries/ban-giao-1.jpg",
    caption: "Bàn giao Lynk & Co 08 EM-P",
    location: "TP. Hồ Chí Minh",
  },
  {
    image: "/deliveries/ban-giao-2.jpg",
    caption: "Bàn giao Lynk & Co 08 EM-P",
    location: "TP. Hồ Chí Minh",
  },
  {
    image: "/deliveries/ban-giao-3.jpg",
    caption: "Bàn giao Lynk & Co 08",
    location: "Đồng Nai",
  },
  {
    image: "/deliveries/ban-giao-4.jpg",
    caption: "Ra mắt Lynk & Co 08 EM-P",
    location: "TP. Hồ Chí Minh",
    objectPosition: "object-left",
  },
  {
    image: "/deliveries/ban-giao-5.jpg",
    caption: "Bàn giao Lynk & Co 06",
    location: "TP. Hồ Chí Minh",
  },
  {
    image: "/deliveries/ban-giao-6.jpg",
    caption: "Bàn giao Lynk & Co 06",
    location: "TP. Hồ Chí Minh",
  },
];
