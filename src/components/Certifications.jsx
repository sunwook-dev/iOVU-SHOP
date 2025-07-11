import { Box, Container, Typography, Paper, Grid, Avatar, Divider } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { Helmet } from 'react-helmet-async';

const messages = {
  ko: {
    title: "인증",
    intro: "iOVU SHOP은 고객의 신뢰를 위해 국내외 공인기관의 다양한 인증을 보유하고 있습니다. 아래 인증은 품질, 친환경, 지속가능성 등에서 엄격한 기준을 충족했음을 의미합니다."
  },
  en: {
    title: "Certifications",
    intro: "iOVU SHOP holds various certifications from domestic and international authorities to ensure customer trust. These certifications demonstrate our commitment to quality, eco-friendliness, and sustainability."
  }
};

const certifications = [
  {
    name: { ko: "ISO 9001", en: "ISO 9001" },
    desc: { ko: "품질경영시스템 인증", en: "Quality Management System Certification" },
    image: "/images/iso9001.png",
    color: '#e3eafc',
    icon: <VerifiedUserIcon sx={{ color: '#1976d2', fontSize: 36 }} />
  },
  {
    name: { ko: "OEKO-TEX®", en: "OEKO-TEX®" },
    desc: { ko: "유해물질 테스트 통과 친환경 인증", en: "Eco-friendly, passed harmful substance test" },
    image: "/images/oekotex.png",
    color: '#e8f5e9',
    icon: <VerifiedUserIcon sx={{ color: '#43a047', fontSize: 36 }} />
  },
  {
    name: { ko: "FSC", en: "FSC" },
    desc: { ko: "지속가능한 산림경영 인증", en: "Sustainable Forest Management Certification" },
    image: "/images/fsc.png",
    color: '#fffbe7',
    icon: <VerifiedUserIcon sx={{ color: '#ffb300', fontSize: 36 }} />
  }
];

export default function Certifications({ lang = "ko" }) {
  const t = messages[lang] || messages.ko;
  return (
    <Box sx={{ minHeight: '70vh', bgcolor: '#f5f7fa', py: 6 }}>
      <Helmet>
        <title>{t.title} | iOVU Shop</title>
      </Helmet>
      <Container maxWidth="md">
        <Box sx={{ p: { xs: 2, md: 5 }, borderRadius: 3, bgcolor: 'transparent', boxShadow: 'none' }}>
          <Typography variant="h3" component="h1" align="center" sx={{ fontWeight: 700, mb: 4, letterSpacing: 2 }}>
            {t.title}
          </Typography>
          <Typography align="center" sx={{ mb: 4, color: '#1976d2', fontWeight: 500 }}>{t.intro}</Typography>
          <Divider sx={{ mb: 4 }} />
          <Grid container spacing={4} justifyContent="center">
            {certifications.map((cert, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Paper elevation={0} sx={{ p: 3, borderRadius: 3, bgcolor: cert.color, textAlign: 'center', boxShadow: '0 2px 12px #1976d233', minHeight: 320 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
                    {cert.icon}
                    {cert.name.en === 'ISO 9001' ? (
                      <Avatar src={cert.image} sx={{ width: 80, height: 80, my: 2, bgcolor: 'transparent', objectFit: 'contain', img: { objectFit: 'contain', width: '100%', height: '100%' } }} />
                    ) : cert.name.en === 'OEKO-TEX®' ? (
                      <Avatar src={cert.image} sx={{ width: 80, height: 80, my: 2, bgcolor: 'transparent', objectFit: 'contain', img: { objectFit: 'contain', width: '100%', height: '100%' } }} />
                    ) : cert.name.en === 'FSC' ? (
                      <Avatar src={cert.image} sx={{ width: 80, height: 80, my: 2, bgcolor: 'transparent', objectFit: 'contain', img: { objectFit: 'contain', width: '100%', height: '100%' } }} />
                    ) : (
                      <Avatar src={cert.image} sx={{ width: 80, height: 80, my: 2, bgcolor: '#fff' }} />
                    )}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#222', mb: 1 }}>{cert.name[lang] || cert.name.ko}</Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>{cert.desc[lang] || cert.desc.ko}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
} 