export function getCurrentLanguage() {
  // 1. URL 경로에서 /ko/ 또는 /en/이 있으면 해당 언어 반환
  if (typeof window !== "undefined") {
    const match = window.location.pathname.match(/^\/(ko|en)(\/|$)/);
    if (match) return match[1];
    // 2. 브라우저 언어 설정 참고
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang && browserLang.toLowerCase().startsWith("en")) return "en";
  }
  // 3. 기본값
  return "ko";
}
