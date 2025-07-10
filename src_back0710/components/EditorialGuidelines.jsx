import { Container, Typography, Box, Paper } from '@mui/material';
import { Helmet } from 'react-helmet-async';

const editorialJsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Editorial Guidelines",
  "publishingPrinciples": "https://iovu-shop.vercel.app/editorial",
  "description": "iOVU Shop의 모든 콘텐츠는 정확성, 신뢰성, 투명성을 바탕으로 작성됩니다. AI 및 전문가 검수 과정을 거치며, 정기적으로 업데이트됩니다."
};

export default function EditorialGuidelines() {
  return (
    <Box sx={{ minHeight: '70vh', bgcolor: '#f5f7fa', py: 6 }}>
      <Helmet>
        <title>Editorial Guidelines | iOVU Shop</title>
        <script type="application/ld+json">{JSON.stringify(editorialJsonLd)}</script>
      </Helmet>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: 5, borderRadius: 3 }}>
          <Typography variant="h3" component="h1" align="center" sx={{ fontWeight: 700, mb: 3 }}>
            Editorial Guidelines
          </Typography>
          <Typography sx={{ mb: 2 }}>
            iOVU Shop의 모든 콘텐츠는 정확성, 신뢰성, 투명성을 바탕으로 작성됩니다. AI 및 전문가 검수 과정을 거치며, 정기적으로 업데이트됩니다.
          </Typography>
          <Typography sx={{ mb: 2 }}>
            - 콘텐츠 작성 원칙: 사실 기반, 최신 정보 유지, 투명한 출처 공개
          </Typography>
          <Typography sx={{ mb: 2 }}>
            - AI 및 전문가 검수: AI 초안 + 전문가 최종 검수
          </Typography>
          <Typography>
            - 정기 업데이트 및 책임 부서 명시
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
} 