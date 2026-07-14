"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/#mau-xe", label: "Mẫu xe" },
  { href: "/#uu-diem", label: "Ưu điểm" },
  { href: "/#ban-giao", label: "Lễ bàn giao" },
  { href: "/#showroom", label: "Showroom" },
  { href: "/#lai-thu", label: "Đăng ký lái thử" },
  { href: "/#lien-he", label: "Liên hệ" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className={cn(
            "text-lg font-black tracking-[0.2em] transition-colors",
            scrolled ? "text-foreground" : "text-white"
          )}
        >
          LYNK&nbsp;&amp;&nbsp;CO
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Chính">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:opacity-70",
                scrolled ? "text-foreground" : "text-white"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            render={<a href={`tel:${siteConfig.hotline}`} />}
            nativeButton={false}
            className="hidden rounded-full px-5 md:inline-flex"
            variant={scrolled ? "default" : "secondary"}
          >
            <Phone className="size-4" />
            {siteConfig.hotlineDisplay}
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "rounded-full md:hidden",
                    scrolled
                      ? "text-foreground"
                      : "text-white hover:bg-white/10 hover:text-white"
                  )}
                  aria-label="Mở menu"
                />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="text-left text-base font-black tracking-[0.2em]">
                  LYNK &amp; CO
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4" aria-label="Menu di động">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3 text-sm font-medium hover:bg-muted"
                  >
                    {item.label}
                  </a>
                ))}
                <Button
                  render={<a href={`tel:${siteConfig.hotline}`} />}
                  nativeButton={false}
                  className="mt-4 rounded-full"
                >
                  <Phone className="size-4" />
                  {siteConfig.hotlineDisplay}
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
