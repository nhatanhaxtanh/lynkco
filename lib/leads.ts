export type TestDriveLead = {
  name: string;
  phone: string;
  model?: string;
  email?: string;
  note?: string;
  /** Form nào trên site gửi lead này (hiện trong email báo về) */
  source: string;
};

export async function submitTestDrive(
  lead: TestDriveLead,
): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const res = await fetch("/api/test-drive", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });
    if (!res.ok) {
      const data = (await res.json().catch(() => null)) as {
        error?: string;
      } | null;
      return {
        ok: false,
        error:
          data?.error ?? "Không gửi được đăng ký, vui lòng thử lại.",
      };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: "Mất kết nối, vui lòng thử lại." };
  }
}
