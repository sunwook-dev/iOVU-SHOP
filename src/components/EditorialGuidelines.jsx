import { Container, Typography, Box, Paper } from '@mui/material';
import { Helmet } from 'react-helmet-async';

const messages = {
  ko: {
    title: "에디토리얼 가이드라인",
    desc: "iOVU Shop의 모든 콘텐츠는 정확성, 신뢰성, 투명성을 바탕으로 작성됩니다. AI 및 전문가 검수 과정을 거치며, 정기적으로 업데이트됩니다.",
    principle1: "- 콘텐츠 작성 원칙: 사실 기반, 최신 정보 유지, 투명한 출처 공개",
    principle2: "- AI 및 전문가 검수: AI 초안 + 전문가 최종 검수",
    principle3: "- 정기 업데이트 및 책임 부서 명시"
  },
  en: {
    title: "Editorial Guidelines",
    desc: "All content at iOVU Shop is created based on accuracy, reliability, and transparency. It is reviewed by AI and experts, and updated regularly.",
    principle1: "- Content Principles: Fact-based, up-to-date, transparent sources",
    principle2: "- AI & Expert Review: AI draft + expert final review",
    principle3: "- Regular updates and responsible department disclosure"
  }
};

const editorialJsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Editorial Guidelines",
  "publishingPrinciples": "https://iovu-shop.vercel.app/editorial",
  "description": "iOVU Shop의 모든 콘텐츠는 정확성, 신뢰성, 투명성을 바탕으로 작성됩니다. AI 및 전문가 검수 과정을 거치며, 정기적으로 업데이트됩니다."
};

export default function EditorialGuidelines({ lang = "ko" }) {
  const t = messages[lang] || messages.ko;
  const editorialJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": t.title,
    "publishingPrinciples": "https://iovu-shop.vercel.app/editorial",
    "description": t.desc
  };
  return (
    <Box sx={{ minHeight: '70vh', bgcolor: '#f5f7fa', py: 6 }}>
      <Helmet>
        <title>{t.title} | iOVU Shop</title>
        <script type="application/ld+json">{JSON.stringify(editorialJsonLd)}</script>
      </Helmet>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: 5, borderRadius: 3 }}>
          <Typography variant="h3" component="h1" align="center" sx={{ fontWeight: 700, mb: 3 }}>
            {t.title}
          </Typography>
          <Typography sx={{ mb: 2 }}>{t.desc}</Typography>
          <Typography sx={{ mb: 2 }}>{t.principle1}</Typography>
          <Typography sx={{ mb: 2 }}>{t.principle2}</Typography>
          <Typography>{t.principle3}</Typography>
        </Paper>
      </Container>
    </Box>
  );
} 