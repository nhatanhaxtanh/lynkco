"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, Phone } from "lucide-react";
import { useLang } from "@/components/language-provider";
import { siteConfig } from "@/lib/site-config";

const contacts = [
  {
    href: `tel:${siteConfig.hotline}`,
    label: {
      vi: `Gọi hotline ${siteConfig.hotlineDisplay}`,
      en: `Call hotline ${siteConfig.hotlineDisplay}`,
    },
    className: "bg-green-500 text-white hover:bg-green-600",
    pulseClassName: "bg-green-500/40",
    icon: <Phone className="size-6" />,
  },
  {
    href: siteConfig.zalo,
    label: { vi: "Nhắn tin Zalo", en: "Chat on Zalo" },
    className: "bg-[#0068ff] text-white hover:bg-[#0055d4]",
    pulseClassName: "bg-[#0068ff]/40",
    icon: <span className="text-sm font-black tracking-tight">Zalo</span>,
    external: true,
  },
];

export function FloatingContact() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { lang } = useLang();

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            type="button"
            aria-label={lang === "en" ? "Scroll to top" : "Cuộn lên đầu trang"}
            title={lang === "en" ? "Back to top" : "Lên đầu trang"}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0, scale: 0, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 12 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.94 }}
            className="flex size-13 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-950 shadow-lg shadow-neutral-900/25 hover:bg-neutral-100"
          >
            <ArrowUp className="size-6" />
          </motion.button>
        )}
      </AnimatePresence>
      {contacts.map((contact, index) => (
        <motion.a
          key={contact.href}
          href={contact.href}
          aria-label={contact.label[lang]}
          title={contact.label[lang]}
          target={contact.external ? "_blank" : undefined}
          rel={contact.external ? "noopener noreferrer" : undefined}
          initial={{ opacity: 0, scale: 0, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            delay: 0.8 + index * 0.12,
            type: "spring",
            stiffness: 260,
            damping: 18,
          }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.94 }}
          className={`relative flex size-13 items-center justify-center rounded-full shadow-lg shadow-neutral-900/25 ${contact.className}`}
        >
          <span
            className={`absolute inset-0 -z-10 animate-ping rounded-full ${contact.pulseClassName}`}
          />
          {contact.icon}
        </motion.a>
      ))}
    </div>
  );
}
