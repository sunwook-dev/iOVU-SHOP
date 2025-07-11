import { Container, Typography, Box, Paper, Divider, Grid } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ApartmentIcon from '@mui/icons-material/Apartment';
import TimelineIcon from '@mui/icons-material/Timeline';

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
    vision: "비전",
    visionDesc: "지속가능한 패션과 혁신적인 디자인으로 글로벌 브랜드로 성장합니다.",
    history: "연혁",
    historyList: [
      { year: "2022", event: "iOVU SHOP 설립" },
      { year: "2023", event: "대한민국 우수브랜드 대상 수상" },
      { year: "2024", event: "글로벌 온라인 진출" }
    ],
    awards: "주요 수상",
    awardsList: [
      { year: "2023", award: "대한민국 우수브랜드 대상" },
      { year: "2023", award: "소비자 만족 브랜드상" }
    ],
    hq: "본사 정보",
    hqDesc: "서울특별시 강남구 테헤란로 123, iOVU SHOP 본사"
  },
  en: {
    title: "About Us",
    mission: "Brand Mission",
    missionDesc: "We create t-shirts that satisfy everyone with the best quality and design.",
    vision: "Vision",
    visionDesc: "Grow into a global brand with sustainable fashion and innovative design.",
    history: "History",
    historyList: [
      { year: "2022", event: "Founded iOVU SHOP" },
      { year: "2023", event: "Awarded Korea Excellent Brand" },
      { year: "2024", event: "Launched global online store" }
    ],
    awards: "Major Awards",
    awardsList: [
      { year: "2023", award: "Korea Excellent Brand Award" },
      { year: "2023", award: "Consumer Satisfaction Brand" }
    ],
    hq: "Headquarters",
    hqDesc: "123 Teheran-ro, Gangnam-gu, Seoul, iOVU SHOP HQ"
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
        <Box sx={{ p: { xs: 2, md: 5 }, borderRadius: 3, bgcolor: 'transparent', boxShadow: 'none' }}>
          <Typography variant="h3" component="h1" align="center" sx={{ fontWeight: 700, mb: 4, letterSpacing: 2 }}>
            {t.title}
          </Typography>
          {/* 미션/비전 */}
          <Box sx={{ mb: 4, textAlign: 'left' }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, color: '#1976d2' }}>{t.mission}</Typography>
            <Typography sx={{ mb: 2 }}>{t.missionDesc}</Typography>
            <Typography variant="h6" sx={{ fontWeight: 500, color: '#1976d2', mt: 2 }}>{t.vision}</Typography>
            <Typography>{t.visionDesc}</Typography>
          </Box>
          <Divider sx={{ my: 4 }} />
          {/* 연혁 타임라인 */}
          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <TimelineIcon sx={{ color: '#1976d2', mr: 1 }} />
              <Typography variant="h5" sx={{ fontWeight: 600 }}>{t.history}</Typography>
            </Box>
            <Grid container spacing={2}>
              {t.historyList.map((item, idx) => (
                <Grid item xs={12} sm={4} key={idx}>
                  <Paper elevation={0} sx={{ p: 2, bgcolor: '#e3eafc', borderRadius: 2, textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ color: '#1976d2', fontWeight: 700 }}>{item.year}</Typography>
                    <Typography>{item.event}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
          {/* 주요 수상 */}
          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <EmojiEventsIcon sx={{ color: '#ffb300', mr: 1 }} />
              <Typography variant="h5" sx={{ fontWeight: 600 }}>{t.awards}</Typography>
            </Box>
            <Grid container spacing={2}>
              {t.awardsList.map((item, idx) => (
                <Grid item xs={12} sm={6} key={idx}>
                  <Paper elevation={0} sx={{ p: 2, bgcolor: '#fffbe7', borderRadius: 2, textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ color: '#ffb300', fontWeight: 700 }}>{item.year}</Typography>
                    <Typography>{item.award}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
          {/* 본사 정보 및 사진 */}
          <Box sx={{ textAlign: 'left', mt: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <ApartmentIcon sx={{ color: '#1976d2', mr: 1 }} />
              <Typography variant="h5" sx={{ fontWeight: 600 }}>{t.hq}</Typography>
            </Box>
            <Typography sx={{ mb: 2 }}>{t.hqDesc}</Typography>
            <img src="/images/company.png" alt="iOVU 본사" style={{ width: 180, borderRadius: 12, boxShadow: '0 2px 12px #1976d233' }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
} 