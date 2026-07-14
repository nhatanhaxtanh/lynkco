"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.09 24 18.1 24 12.07Z" />
    </svg>
  );
}

const contacts = [
  {
    href: `tel:${siteConfig.hotline}`,
    label: `Gọi hotline ${siteConfig.hotlineDisplay}`,
    className: "bg-neutral-950 text-white hover:bg-neutral-800",
    pulseClassName: "bg-neutral-950/40",
    icon: <Phone className="size-6" />,
  },
  {
    href: siteConfig.zalo,
    label: "Nhắn tin Zalo",
    className: "bg-[#0068ff] text-white hover:bg-[#0055d4]",
    pulseClassName: "bg-[#0068ff]/40",
    icon: <span className="text-sm font-black tracking-tight">Zalo</span>,
    external: true,
  },
  {
    href: siteConfig.facebook,
    label: "Facebook Messenger",
    className: "bg-[#1877f2] text-white hover:bg-[#145fc4]",
    pulseClassName: "bg-[#1877f2]/40",
    icon: <FacebookIcon className="size-6" />,
    external: true,
  },
];

export function FloatingContact() {
  const [showScrollTop, setShowScrollTop] = useState(false);

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
            aria-label="Cuộn lên đầu trang"
            title="Lên đầu trang"
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
          aria-label={contact.label}
          title={contact.label}
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
