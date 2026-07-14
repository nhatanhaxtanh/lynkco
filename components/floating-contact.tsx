"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

function ZaloIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 5C13 5 4 12.6 4 22c0 5.3 2.8 10 7.3 13.1-.2 1.9-.9 4.6-2.5 6.5-.3.4 0 .9.5.9 3.6-.2 6.6-1.6 8.6-2.9 2 .5 4 .8 6.1.8 11 0 20-7.6 20-17S35 5 24 5Zm-8.9 21.9h-5.6c-.6 0-1-.4-1-1 0-.3.1-.6.3-.8l5-6.5h-4.3c-.6 0-1-.4-1-1s.4-1 1-1h5.6c.6 0 1 .4 1 1 0 .3-.1.6-.3.8l-5 6.5h4.3c.6 0 1 .4 1 1s-.4 1-1 1Zm5.4-1c0 .6-.4 1-1 1s-1-.4-1-1v-9.3c0-.6.4-1 1-1s1 .4 1 1v9.3Zm10.5 0c0 .6-.4 1-1 1-.4 0-.7-.2-.9-.5-.6.4-1.3.6-2.1.6-2.2 0-4-1.8-4-4.1s1.8-4.1 4-4.1c.8 0 1.5.2 2.1.6.2-.3.5-.5.9-.5.6 0 1 .4 1 1v6Zm-4-5.1c-1.1 0-2 .9-2 2.1s.9 2.1 2 2.1 2-.9 2-2.1-.9-2.1-2-2.1Zm10.1 6.2c-2.3 0-4.1-1.9-4.1-4.2s1.8-4.2 4.1-4.2 4.1 1.9 4.1 4.2-1.8 4.2-4.1 4.2Zm0-6.3c-1.1 0-2.1.9-2.1 2.2s.9 2.2 2.1 2.2 2.1-.9 2.1-2.2-1-2.2-2.1-2.2Z" />
    </svg>
  );
}

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
    icon: <Phone className="size-6" />,
    pulse: true,
  },
  {
    href: siteConfig.zalo,
    label: "Nhắn tin Zalo",
    className: "bg-[#0068ff] text-white hover:bg-[#0055d4]",
    icon: <ZaloIcon className="size-7" />,
    external: true,
  },
  {
    href: siteConfig.facebook,
    label: "Facebook Messenger",
    className: "bg-[#1877f2] text-white hover:bg-[#145fc4]",
    icon: <FacebookIcon className="size-6" />,
    external: true,
  },
];

export function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-3 sm:bottom-6 sm:right-6">
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
          {contact.pulse && (
            <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-neutral-950/40" />
          )}
          {contact.icon}
        </motion.a>
      ))}
    </div>
  );
}
