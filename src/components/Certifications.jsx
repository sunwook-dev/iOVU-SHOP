import { Container, Typography, Box, Paper, Grid, Avatar } from '@mui/material';
import { Helmet } from 'react-helmet-async';

const messages = {
  ko: {
    title: "인증/트러스트"
  },
  en: {
    title: "Certifications/Trust"
  }
};
const certifications = [
  {
    name: { ko: "ISO 9001", en: "ISO 9001" },
    desc: { ko: "품질경영시스템 인증", en: "Quality Management System Certification" },
    image: "/images/iso9001.png"
  },
  {
    name: { ko: "OEKO-TEX®", en: "OEKO-TEX®" },
    desc: { ko: "유해물질 테스트 통과 친환경 인증", en: "Eco-friendly, passed harmful substance test" },
    image: "/images/oeko-tex.png"
  },
  {
    name: { ko: "FSC", en: "FSC" },
    desc: { ko: "지속가능한 산림경영 인증", en: "Sustainable Forest Management Certification" },
    image: "/images/fsc.png"
  }
];

const certJsonLd = certifications.map(cert => ({
  "@context": "https://schema.org",
  "@type": "Certification",
  "name": cert.name[lang] || cert.name.ko,
  "description": cert.desc[lang] || cert.desc.ko
}));

export default function Certifications({ lang = "ko" }) {
  const t = messages[lang] || messages.ko;
  const certJsonLd = certifications.map(cert => ({
    "@context": "https://schema.org",
    "@type": "Certification",
    "name": cert.name[lang] || cert.name.ko,
    "description": cert.desc[lang] || cert.desc.ko
  }));
  return (
    <Box sx={{ minHeight: '70vh', bgcolor: '#f5f7fa', py: 6 }}>
      <Helmet>
        <title>{t.title} | iOVU Shop</title>
        {certJsonLd.map((json, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify(json)}</script>
        ))}
      </Helmet>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: 5, borderRadius: 3 }}>
          <Typography variant="h3" component="h1" align="center" sx={{ fontWeight: 700, mb: 3 }}>
            {t.title}
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {certifications.map((cert, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Box sx={{ textAlign: 'center' }}>
                  <Avatar src={cert.image} sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }} />
                  <Typography variant="h6">{cert.name[lang] || cert.name.ko}</Typography>
                  <Typography variant="body2" color="text.secondary">{cert.desc[lang] || cert.desc.ko}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
} 