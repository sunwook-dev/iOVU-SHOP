import { useEffect } from "react";
import { getCurrentLanguage } from "./language";

const usePageSEO = (pagePath = "/") => {
  const currentLang = getCurrentLanguage();

  useEffect(() => {
    const existingHreflangs = document.querySelectorAll(
      'link[rel="alternate"]'
    );
    existingHreflangs.forEach((link) => {
      if (link.getAttribute("hreflang")) {
        document.head.removeChild(link);
      }
    });

    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      document.head.removeChild(existingCanonical);
    }

    const hreflangs = [
      {
        hreflang: "ko",
        href: `http://localhost:5173/ko/${pagePath}`,
      },
      {
        hreflang: "en",
        href: `http://localhost:5173/en/${pagePath}`,
      },
      {
        hreflang: "x-default",
        href: `http://localhost:5173/ko/${pagePath}`, // 기본값을 한국어로 설정
      },
    ];

    hreflangs.forEach(({ hreflang, href }) => {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = hreflang;
      link.href = href;
      document.head.appendChild(link);
    });

    const canonical = document.createElement("link");
    canonical.rel = "canonical";

    if (currentLang === "en") {
      canonical.href = `http://localhost:5173/en/${pagePath}`;
    } else {
      canonical.href = `http://localhost:5173/ko/${pagePath}`;
    }

    document.head.appendChild(canonical);

    return () => {
      const hreflangLinks = document.querySelectorAll('link[rel="alternate"]');
      hreflangLinks.forEach((link) => {
        if (link.getAttribute("hreflang")) {
          document.head.removeChild(link);
        }
      });

      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        document.head.removeChild(canonicalLink);
      }
    };
  }, [currentLang, pagePath]);
};

export default usePageSEO;
