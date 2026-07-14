# Lynk & Co Sài Gòn — Website giới thiệu & báo giá xe

Landing page chuẩn SEO cho đại lý Lynk & Co: bảng giá 8 mẫu xe, form đăng ký lái thử, nút liên hệ nhanh (Hotline / Zalo / Facebook). Tone trắng–đen hiện đại, bo góc mềm mại.

## Công nghệ

- [Next.js 16](https://nextjs.org) (App Router, Turbopack, static prerender)
- [Tailwind CSS v4](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com) (Base UI)
- [Framer Motion](https://www.framer.com/motion/) — animation hero, card, floating buttons
- TypeScript

## SEO

- Metadata đầy đủ (title template, description, keywords, Open Graph, Twitter card, canonical)
- JSON-LD structured data: `AutoDealer` + `ItemList` các mẫu xe kèm giá
- `sitemap.xml`, `robots.txt` tự sinh qua Metadata API
- OG image render động (`app/opengraph-image.tsx`)
- HTML ngữ nghĩa, `lang="vi"`, font Inter hỗ trợ tiếng Việt

## Chạy dự án

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build production
```

## Tuỳ chỉnh nhanh

| Nội dung | File |
|---|---|
| Hotline, địa chỉ, link Zalo/Facebook | `lib/site-config.ts` |
| Danh sách mẫu xe & giá | `lib/cars.ts` |
| Ảnh thumbnail xe | Đặt file vào `public/cars/` rồi khai báo `image: "/cars/ten-file.jpg"` cho từng xe trong `lib/cars.ts` (chưa có ảnh sẽ hiển thị placeholder) |
| Form lái thử (nối API/CRM) | `components/test-drive-form.tsx` |

> Giá xe tham khảo từ đại lý, cập nhật tháng 7/2026.
