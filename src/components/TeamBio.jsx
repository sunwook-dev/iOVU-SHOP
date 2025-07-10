import { Container, Typography, Box, Paper, Avatar, Grid } from '@mui/material';
import { Helmet } from 'react-helmet-async';

const team = [
  {
    name: "홍길동",
    role: "CEO & Founder",
    bio: "패션 업계 15년 경력, 브랜드 비전 제시.",
    image: "/logo.svg",
    alumniOf: "서울대학교",
    knowsAbout: ["패션 디자인", "브랜드 경영"]
  },
  {
    name: "Jane Kim",
    role: "Chief Designer",
    bio: "트렌디한 디자인과 혁신을 이끄는 수석 디자이너.",
    image: "/logo.svg",
    alumniOf: "Parsons School of Design",
    knowsAbout: ["패션 일러스트", "소재 개발"]
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

export default function TeamBio() {
  return (
    <Box sx={{ minHeight: '70vh', bgcolor: '#f5f7fa', py: 6 }}>
      <Helmet>
        <title>Team Bio | iOVU Shop</title>
        {personJsonLd.map((json, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify(json)}</script>
        ))}
      </Helmet>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: 5, borderRadius: 3 }}>
          <Typography variant="h3" component="h1" align="center" sx={{ fontWeight: 700, mb: 3 }}>
            Our Team
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {team.map((member, i) => (
              <Grid item xs={12} md={6} key={i}>
                <Box sx={{ textAlign: 'center' }}>
                  <Avatar src={member.image} sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }} />
                  <Typography variant="h6">{member.name}</Typography>
                  <Typography variant="subtitle1" color="text.secondary">{member.role}</Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>{member.bio}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
} 