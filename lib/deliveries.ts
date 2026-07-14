export type Delivery = {
  /**
   * Ảnh lễ bàn giao: đặt file vào public/deliveries/
   * rồi khai báo ví dụ: image: "/deliveries/ban-giao-01.jpg"
   * Chưa có ảnh thì bỏ trống — ô sẽ hiển thị placeholder.
   */
  image?: string;
  caption: string;
  location: string;
};

export const deliveries: Delivery[] = [
  { caption: "Bàn giao Lynk & Co 01", location: "TP. Hồ Chí Minh" },
  { caption: "Bàn giao Lynk & Co 06", location: "TP. Hồ Chí Minh" },
  { caption: "Bàn giao Lynk & Co 08", location: "Bình Dương" },
  { caption: "Bàn giao Lynk & Co 09", location: "Đồng Nai" },
  { caption: "Bàn giao Lynk & Co 05", location: "TP. Hồ Chí Minh" },
  { caption: "Bàn giao Lynk & Co 03+", location: "TP. Hồ Chí Minh" },
];
