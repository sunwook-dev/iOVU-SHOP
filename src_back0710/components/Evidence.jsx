import { Container, Typography, Box, Paper, Link } from '@mui/material';
import { Helmet } from 'react-helmet-async';

const evidenceJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": "소재 시험 성적서",
    "description": "iOVU 티셔츠 소재의 내구성, 친환경성 시험 결과 보고서.",
    "url": "https://iovu-shop.vercel.app/evidence",
    "license": "https://creativecommons.org/licenses/by/4.0/"
  },
  {
    "@context": "https://schema.org",
    "@type": "Report",
    "name": "CSR 지속가능성 보고서",
    "description": "iOVU Shop의 사회적 책임 및 지속가능성 활동 보고서.",
    "url": "https://iovu-shop.vercel.app/evidence"
  }
];

export default function Evidence() {
  return (
    <Box sx={{ minHeight: '70vh', bgcolor: '#f5f7fa', py: 6 }}>
      <Helmet>
        <title>Scientific & CSR Evidence | iOVU Shop</title>
        {evidenceJsonLd.map((json, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify(json)}</script>
        ))}
      </Helmet>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: 5, borderRadius: 3 }}>
          <Typography variant="h3" component="h1" align="center" sx={{ fontWeight: 700, mb: 3 }}>
            Scientific & CSR Evidence
          </Typography>
          <Typography sx={{ mb: 2 }}>
            iOVU Shop은 소재의 내구성, 친환경성 등 다양한 시험 성적서를 투명하게 공개합니다.
          </Typography>
          <Typography sx={{ mb: 2 }}>
            - <Link href="/sample-report.pdf" target="_blank">소재 시험 성적서(PDF)</Link>
          </Typography>
          <Typography>
            - <Link href="/sample-csr.pdf" target="_blank">CSR 지속가능성 보고서(PDF)</Link>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
} 