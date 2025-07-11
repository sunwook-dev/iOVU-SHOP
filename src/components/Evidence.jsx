import { Container, Typography, Box, Paper, Link } from '@mui/material';
import { Helmet } from 'react-helmet-async';

const messages = {
  ko: {
    title: "과학적/CSR 증거",
    desc: "iOVU Shop은 소재의 내구성, 친환경성 등 다양한 시험 성적서를 투명하게 공개합니다.",
    report: "- 소재 시험 성적서(PDF)",
    csr: "- CSR 지속가능성 보고서(PDF)"
  },
  en: {
    title: "Scientific/CSR Evidence",
    desc: "iOVU Shop transparently discloses various test reports such as material durability and eco-friendliness.",
    report: "- Material Test Report (PDF)",
    csr: "- CSR Sustainability Report (PDF)"
  }
};

export default function Evidence({ lang = "ko" }) {
  const t = messages[lang] || messages.ko;
  const evidenceJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Dataset",
      "name": t.report,
      "description": t.desc,
      "url": `https://iovu-shop.vercel.app/${lang}/evidence`,
      "license": "https://creativecommons.org/licenses/by/4.0/"
    },
    {
      "@context": "https://schema.org",
      "@type": "Report",
      "name": t.csr,
      "description": t.desc,
      "url": `https://iovu-shop.vercel.app/${lang}/evidence`
    }
  ];
  return (
    <Box sx={{ minHeight: '70vh', bgcolor: '#f5f7fa', py: 6 }}>
      <Helmet>
        <title>{t.title} | iOVU Shop</title>
        {evidenceJsonLd.map((json, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify(json)}</script>
        ))}
      </Helmet>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: 5, borderRadius: 3 }}>
          <Typography variant="h3" component="h1" align="center" sx={{ fontWeight: 700, mb: 3 }}>
            {t.title}
          </Typography>
          <Typography sx={{ mb: 2 }}>{t.desc}</Typography>
          <Typography sx={{ mb: 2 }}>{t.report}</Typography>
          <Typography>{t.csr}</Typography>
        </Paper>
      </Container>
    </Box>
  );
} 