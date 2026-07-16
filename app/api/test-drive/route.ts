import { siteConfig } from "@/lib/site-config";

const PHONE_REGEX = /^(0|\+84)\d{8,10}$/;

type LeadPayload = {
  name?: string;
  phone?: string;
  model?: string;
  email?: string;
  note?: string;
  source?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function POST(request: Request) {
  let payload: LeadPayload;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Dữ liệu không hợp lệ." }, { status: 400 });
  }

  const name = String(payload.name ?? "").trim().slice(0, 100);
  const phone = String(payload.phone ?? "").trim().replaceAll(" ", "");
  const model = String(payload.model ?? "").trim().slice(0, 100);
  const email = String(payload.email ?? "").trim().slice(0, 200);
  const note = String(payload.note ?? "").trim().slice(0, 1000);
  const source = String(payload.source ?? "website").trim().slice(0, 50);

  if (!name || !PHONE_REGEX.test(phone)) {
    return Response.json(
      { error: "Vui lòng kiểm tra lại họ tên và số điện thoại." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error(
      `[test-drive] Thiếu RESEND_API_KEY — lead không được gửi: ${JSON.stringify({ name, phone, model })}`,
    );
    return Response.json(
      { error: "Hệ thống nhận đăng ký đang bảo trì, vui lòng gọi hotline." },
      { status: 500 },
    );
  }

  const receivedAt = new Date().toLocaleString("vi-VN", {
    timeZone: "Asia/Ho_Chi_Minh",
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from:
        process.env.LEAD_EMAIL_FROM ??
        `${siteConfig.name} <onboarding@resend.dev>`,
      to: process.env.LEAD_EMAIL_TO ?? siteConfig.email,
      subject: `Đăng ký lái thử mới: ${name} — ${model || "chưa chọn xe"}`,
      ...(email ? { reply_to: email } : {}),
      html: renderLeadEmail({ name, phone, model, email, note, source, receivedAt }),
      // Bản plain-text song song giúp Gmail xếp vào tab Chính thay vì Quảng cáo
      text: [
        `Đăng ký lái thử mới từ ${siteConfig.url.replace("https://", "")}`,
        ``,
        `Họ tên: ${name}`,
        `Số điện thoại: ${phone}`,
        `Mẫu xe quan tâm: ${model || "Chưa chọn"}`,
        `Email khách: ${email || "Không để lại"}`,
        `Ghi chú: ${note || "Không có"}`,
        `Gửi từ: ${source}`,
        `Thời gian: ${receivedAt}`,
        ``,
        `Khách kỳ vọng được liên hệ trong vòng 24 giờ.`,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error("[test-drive] Resend trả lỗi:", response.status, detail);
    return Response.json(
      { error: "Không gửi được đăng ký, vui lòng thử lại hoặc gọi hotline." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}

function renderLeadEmail(lead: {
  name: string;
  phone: string;
  model: string;
  email: string;
  note: string;
  source: string;
  receivedAt: string;
}) {
  const detailRows: Array<[string, string]> = [
    ["Mẫu xe quan tâm", lead.model || "Chưa chọn"],
    ["Email khách", lead.email || "Không để lại"],
    ["Ghi chú", lead.note || "Không có"],
    ["Gửi từ", lead.source],
    ["Thời gian", lead.receivedAt],
  ];

  const rowsHtml = detailRows
    .map(
      ([label, value], index) => `
        <tr>
          <td style="padding:12px 24px 12px 0;font-size:13px;color:#71717a;white-space:nowrap;vertical-align:top;${index > 0 ? "border-top:1px solid #f4f4f5;" : ""}">${label}</td>
          <td style="padding:12px 0;font-size:14px;color:#18181b;font-weight:600;${index > 0 ? "border-top:1px solid #f4f4f5;" : ""}">${escapeHtml(value)}</td>
        </tr>`,
    )
    .join("");

  return `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:32px 16px;">
  <tr>
    <td align="center">
      <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;font-family:-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">

        <!-- Header thương hiệu -->
        <tr>
          <td style="background-color:#0a0a0a;border-radius:16px 16px 0 0;padding:24px 32px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="color:#ffffff;font-size:18px;font-weight:800;letter-spacing:4px;">LYNK &amp; CO</td>
                <td align="right" style="color:#a1a1aa;font-size:12px;letter-spacing:2px;text-transform:uppercase;">Sài Gòn</td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Nội dung chính -->
        <tr>
          <td style="background-color:#ffffff;padding:32px;">
            <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#71717a;">Đăng ký lái thử mới</p>
            <p style="margin:12px 0 0;font-size:24px;font-weight:800;color:#18181b;line-height:1.2;">${escapeHtml(lead.name)}</p>
            <p style="margin:6px 0 0;font-size:18px;font-weight:600;color:#18181b;">
              <a href="tel:${escapeHtml(lead.phone)}" style="color:#18181b;text-decoration:none;">${escapeHtml(lead.phone)}</a>
            </p>

            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;border-collapse:collapse;">
              ${rowsHtml}
            </table>

            <!-- Nút hành động -->
            <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:28px;">
              <tr>
                <td>
                  <a href="tel:${escapeHtml(lead.phone)}" style="display:inline-block;background-color:#0a0a0a;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;padding:12px 28px;border-radius:999px;">Gọi cho khách</a>
                </td>
                <td style="padding-left:12px;">
                  <a href="https://zalo.me/${escapeHtml(lead.phone.replace("+84", "0"))}" style="display:inline-block;background-color:#ffffff;color:#18181b;font-size:14px;font-weight:700;text-decoration:none;padding:11px 28px;border-radius:999px;border:1px solid #d4d4d8;">Nhắn Zalo</a>
                </td>
              </tr>
            </table>

            <p style="margin:24px 0 0;font-size:13px;color:#a1a1aa;">Khách kỳ vọng được liên hệ trong vòng 24 giờ.</p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background-color:#fafafa;border-radius:0 0 16px 16px;border-top:1px solid #f4f4f5;padding:20px 32px;">
            <p style="margin:0;font-size:12px;color:#a1a1aa;line-height:1.6;">
              Email tự động từ <a href="${siteConfig.url}" style="color:#71717a;">${siteConfig.url.replace("https://", "")}</a><br />
              ${siteConfig.name} · ${siteConfig.address} · Hotline ${siteConfig.hotlineDisplay}
            </p>
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>`;
}
