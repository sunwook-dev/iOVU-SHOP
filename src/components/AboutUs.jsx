import { Container, Typography, Box, Paper } from '@mui/material';
import { Helmet } from 'react-helmet-async';

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "iOVU Shop",
  "url": "https://iovu-shop.vercel.app/",
  "logo": "https://iovu-shop.vercel.app/logo.png",
  "foundingDate": "2022-01-01",
  "award": ["2023 대한민국 우수브랜드 대상"],
  "sameAs": [
    "https://www.facebook.com/yourpage",
    "https://www.instagram.com/yourpage"
  ]
};

export default function AboutUs() {
  return (
    <Box sx={{ minHeight: '70vh', bgcolor: '#f5f7fa', py: 6 }}>
      <Helmet>
        <title>About Us | iOVU Shop</title>
        <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
      </Helmet>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: 5, borderRadius: 3 }}>
          <Typography variant="h3" component="h1" align="center" sx={{ fontWeight: 700, mb: 3 }}>
            About Us
          </Typography>
          <Typography variant="h5" sx={{ mb: 2 }}>
            브랜드 미션
          </Typography>
          <Typography sx={{ mb: 3 }}>
            최고의 품질과 디자인으로 모두가 만족하는 티셔츠를 만듭니다.
          </Typography>
          <Typography variant="h5" sx={{ mb: 2 }}>
            연혁
          </Typography>
          <Typography sx={{ mb: 3 }}>
            2022년 설립, 2023 대한민국 우수브랜드 대상 수상 등 다양한 성과를 이루었습니다.
          </Typography>
          <img src="/logo.png" alt="iOVU 본사" style={{ width: 200, display: 'block', margin: '0 auto' }} />
        </Paper>
      </Container>
    </Box>
  );
} 