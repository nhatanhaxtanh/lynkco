"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { LANG_STORAGE_KEY, type Lang } from "@/lib/i18n";

const LangContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
}>({ lang: "vi", setLang: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Luôn render tiếng Việt trước (khớp HTML tĩnh), đọc lựa chọn sau khi mount
  const [lang, setLangState] = useState<Lang>("vi");

  useEffect(() => {
    if (window.localStorage.getItem(LANG_STORAGE_KEY) === "en") {
      setLangState("en");
      document.documentElement.lang = "en";
    }
  }, []);

  function setLang(next: Lang) {
    setLangState(next);
    window.localStorage.setItem(LANG_STORAGE_KEY, next);
    document.documentElement.lang = next;
  }

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
