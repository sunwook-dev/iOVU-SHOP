import { useEffect } from "react";
import { getCurrentLanguage } from "./language";

export const useCanonical = (pagePath = "/") => {
  const currentLang = getCurrentLanguage();

  useEffect(() => {
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      document.head.removeChild(existingCanonical);
    }

    const canonical = document.createElement("link");
    canonical.rel = "canonical";

    if (currentLang === "en") {
      canonical.href = `https://i-ovu-shop-tsyl.vercel.app/en/${pagePath}`;
    } else {
      canonical.href = `https://i-ovu-shop-tsyl.vercel.app/ko/${pagePath}`;
    }

    document.head.appendChild(canonical);

    return () => {
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        document.head.removeChild(canonicalLink);
      }
    };
  }, [currentLang, pagePath]);
};
