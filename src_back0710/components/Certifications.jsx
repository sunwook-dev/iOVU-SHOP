import { Container, Typography, Box, Paper, Grid, Avatar } from '@mui/material';
import { Helmet } from 'react-helmet-async';

const certifications = [
  {
    name: "ISO 9001",
    desc: "품질경영시스템 인증",
    image: "/images/iso9001.png"
  },
  {
    name: "OEKO-TEX®",
    desc: "유해물질 테스트 통과 친환경 인증",
    image: "/images/oeko-tex.png"
  },
  {
    name: "FSC",
    desc: "지속가능한 산림경영 인증",
    image: "/images/fsc.png"
  }
];

const certJsonLd = certifications.map(cert => ({
  "@context": "https://schema.org",
  "@type": "Certification",
  "name": cert.name,
  "description": cert.desc
}));

export default function Certifications() {
  return (
    <Box sx={{ minHeight: '70vh', bgcolor: '#f5f7fa', py: 6 }}>
      <Helmet>
        <title>Certifications & Trust Badges | iOVU Shop</title>
        {certJsonLd.map((json, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify(json)}</script>
        ))}
      </Helmet>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: 5, borderRadius: 3 }}>
          <Typography variant="h3" component="h1" align="center" sx={{ fontWeight: 700, mb: 3 }}>
            Certifications & Trust Badges
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {certifications.map((cert, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Box sx={{ textAlign: 'center' }}>
                  <Avatar src={cert.image} sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }} />
                  <Typography variant="h6">{cert.name}</Typography>
                  <Typography variant="body2" color="text.secondary">{cert.desc}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
} 