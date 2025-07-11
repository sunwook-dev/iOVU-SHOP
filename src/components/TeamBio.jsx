import { Container, Typography, Box, Paper, Avatar, Grid } from '@mui/material';
import { Helmet } from 'react-helmet-async';

const messages = {
  ko: {
    title: "팀 소개"
  },
  en: {
    title: "Team Bio"
  }
};
const team = [
  {
    name: { ko: "홍길동", en: "Gil-Dong Hong" },
    role: { ko: "CEO & Founder", en: "CEO & Founder" },
    bio: {
      ko: "패션 업계 15년 경력, 브랜드 비전 제시.",
      en: "15 years in fashion industry, brand visionary."
    },
    image: "/logo.svg",
    alumniOf: { ko: "서울대학교", en: "Seoul National University" },
    knowsAbout: { ko: ["패션 디자인", "브랜드 경영"], en: ["Fashion Design", "Brand Management"] }
  },
  {
    name: { ko: "제인 김", en: "Jane Kim" },
    role: { ko: "Chief Designer", en: "Chief Designer" },
    bio: {
      ko: "트렌디한 디자인과 혁신을 이끄는 수석 디자이너.",
      en: "Leading designer driving trendy and innovative styles."
    },
    image: "/logo.svg",
    alumniOf: { ko: "파슨스 디자인 스쿨", en: "Parsons School of Design" },
    knowsAbout: { ko: ["패션 일러스트", "소재 개발"], en: ["Fashion Illustration", "Material Development"] }
  }
];

const personJsonLd = team.map(member => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": member.name,
  "jobTitle": member.role,
  "alumniOf": member.alumniOf,
  "knowsAbout": member.knowsAbout,
  "image": member.image
}));

export default function TeamBio({ lang = "ko" }) {
  const t = messages[lang] || messages.ko;
  return (
    <Box sx={{ minHeight: '70vh', bgcolor: '#f5f7fa', py: 6 }}>
      <Helmet>
        <title>{t.title} | iOVU Shop</title>
        {team.map((member, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": member.name[lang] || member.name.ko,
            "jobTitle": member.role[lang] || member.role.ko,
            "alumniOf": member.alumniOf[lang] || member.alumniOf.ko,
            "knowsAbout": member.knowsAbout[lang] || member.knowsAbout.ko,
            "image": member.image
          })}</script>
        ))}
      </Helmet>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: 5, borderRadius: 3 }}>
          <Typography variant="h3" component="h1" align="center" sx={{ fontWeight: 700, mb: 3 }}>
            {t.title}
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {team.map((member, i) => (
              <Grid item xs={12} md={6} key={i}>
                <Box sx={{ textAlign: 'center' }}>
                  <Avatar src={member.image} sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }} />
                  <Typography variant="h6">{member.name[lang] || member.name.ko}</Typography>
                  <Typography variant="subtitle1" color="text.secondary">{member.role[lang] || member.role.ko}</Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>{member.bio[lang] || member.bio.ko}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
} 