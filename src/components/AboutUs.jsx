import { Container, Typography, Box, Paper } from '@mui/material';
import { Helmet } from 'react-helmet-async';

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "iOVU Shop",
  "url": "https://iovu-shop.vercel.app/",
  "logo": "https://iovu-shop.vercel.app/logo.svg",
  "foundingDate": "2022-01-01",
  "award": ["2023 대한민국 우수브랜드 대상"],
  "sameAs": [
    "https://www.facebook.com/yourpage",
    "https://www.instagram.com/yourpage"
  ]
};

const messages = {
  ko: {
    title: "회사소개",
    mission: "브랜드 미션",
    missionDesc: "최고의 품질과 디자인으로 모두가 만족하는 티셔츠를 만듭니다.",
    history: "연혁",
    historyDesc: "2022년 설립, 2023 대한민국 우수브랜드 대상 수상 등 다양한 성과를 이뤘습니다."
  },
  en: {
    title: "About Us",
    mission: "Brand Mission",
    missionDesc: "We create t-shirts that satisfy everyone with the best quality and design.",
    history: "History",
    historyDesc: "Founded in 2022, awarded Korea Excellent Brand in 2023, and achieved various milestones."
  }
};

export default function AboutUs({ lang = "ko" }) {
  const t = messages[lang] || messages.ko;
  return (
    <Box sx={{ minHeight: '70vh', bgcolor: '#f5f7fa', py: 6 }}>
      <Helmet>
        <title>{t.title} | iOVU Shop</title>
        <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
      </Helmet>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: 5, borderRadius: 3 }}>
          <Typography variant="h3" component="h1" align="center" sx={{ fontWeight: 700, mb: 3 }}>
            {t.title}
          </Typography>
          <Typography variant="h5" sx={{ mb: 2 }}>
            {t.mission}
          </Typography>
          <Typography sx={{ mb: 3 }}>
            {t.missionDesc}
          </Typography>
          <Typography variant="h5" sx={{ mb: 2 }}>
            {t.history}
          </Typography>
          <Typography sx={{ mb: 3 }}>
            {t.historyDesc}
          </Typography>
          <img src="/logo.svg" alt="iOVU 본사" style={{ width: 200, display: 'block', margin: '0 auto' }} />
        </Paper>
      </Container>
    </Box>
  );
} 