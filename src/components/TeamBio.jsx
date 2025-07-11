import { Box, Container, Typography, Paper, Avatar, Grid, Chip, Link, Stack, Divider } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import VerifiedIcon from '@mui/icons-material/Verified';
import StarIcon from '@mui/icons-material/Star';
import LinkIcon from '@mui/icons-material/Link';

const messages = {
  ko: {
    title: "팀 소개",
    position: "직책",
    career: "경력",
    degree: "학위",
    cert: "자격증",
    specialty: "전문 분야",
    sns: "SNS"
  },
  en: {
    title: "Team Bio",
    position: "Position",
    career: "Career",
    degree: "Degree",
    cert: "Certifications",
    specialty: "Specialties",
    sns: "SNS"
  }
};

const team = [
  {
    name: { ko: "백시관", en: "Sigwan Baek" },
    position: { ko: "CEO & Founder", en: "CEO & Founder" },
    career: { ko: "패션 업계 15년 경력, 브랜드 비전 제시", en: "15 years in fashion industry, brand visionary" },
    degree: { ko: "서울대학교 패션디자인 학사", en: "B.A. in Fashion Design, Seoul National University" },
    cert: { ko: ["국제 패션 전문가 자격증"], en: ["International Fashion Expert Certificate"] },
    specialty: { ko: ["패션 디자인", "브랜드 경영"], en: ["Fashion Design", "Brand Management"] },
    image: "/images/team1.png",
    sns: [
      { label: 'Instagram', url: 'https://instagram.com/ceo_iovu', icon: <LinkIcon sx={{ fontSize: 18 }} /> }
    ]
  },
  {
    name: { ko: "김선욱", en: "Sunwook Kim" },
    position: { ko: "Chief Designer", en: "Chief Designer" },
    career: { ko: "트렌디한 디자인과 혁신을 이끄는 수석 디자이너", en: "Leading designer driving trendy and innovative styles" },
    degree: { ko: "파슨스 디자인 스쿨 석사", en: "M.A. Parsons School of Design" },
    cert: { ko: ["미국 패션디자인 자격증"], en: ["US Fashion Design Certificate"] },
    specialty: { ko: ["패션 일러스트", "소재 개발"], en: ["Fashion Illustration", "Material Development"] },
    image: "/images/team2.png",
    sns: [
      { label: 'Instagram', url: 'https://instagram.com/designer_iovu', icon: <LinkIcon sx={{ fontSize: 18 }} /> }
    ]
  },
  {
    name: { ko: "강신혁", en: "Shinhyuk Kang" },
    position: { ko: "마케팅 이사", en: "Marketing Director" },
    career: { ko: "글로벌 패션 마케팅 10년, 브랜드 성장 주도", en: "10 years in global fashion marketing, led brand growth" },
    degree: { ko: "연세대학교 경영학 석사", en: "M.A. in Business Administration, Yonsei University" },
    cert: { ko: ["국제 마케팅 전문가"], en: ["International Marketing Specialist"] },
    specialty: { ko: ["브랜드 전략", "디지털 마케팅"], en: ["Brand Strategy", "Digital Marketing"] },
    image: "/images/team3.png",
    sns: [
      { label: 'LinkedIn', url: 'https://linkedin.com/in/soojinlee', icon: <LinkIcon sx={{ fontSize: 18 }} /> }
    ]
  },
  {
    name: { ko: "이민영", en: "Minyoung Lee" },
    position: { ko: "상품기획 매니저", en: "Product Manager" },
    career: { ko: "패션 상품기획 및 생산관리 8년", en: "8 years in product planning and production management" },
    degree: { ko: "한양대학교 섬유공학 학사", en: "B.S. in Textile Engineering, Hanyang University" },
    cert: { ko: ["섬유기사 자격증"], en: ["Textile Engineer Certificate"] },
    specialty: { ko: ["상품기획", "공급망 관리"], en: ["Product Planning", "Supply Chain Management"] },
    image: "/images/team4.png",
    sns: [
      { label: 'Facebook', url: 'https://facebook.com/minsu.park', icon: <LinkIcon sx={{ fontSize: 18 }} /> }
    ]
  }
];

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
            "jobTitle": member.position[lang] || member.position.ko,
            "alumniOf": member.degree[lang] || member.degree.ko,
            "knowsAbout": member.specialty[lang] || member.specialty.ko,
            "image": member.image
          })}</script>
        ))}
      </Helmet>
      <Container maxWidth="md">
        <Typography variant="h3" component="h1" align="center" sx={{ fontWeight: 700, mb: 5, letterSpacing: 2 }}>
          {t.title}
        </Typography>
        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {team.map((member, i) => (
            <Grid item xs={12} md={6} key={i} sx={{ display: 'flex', height: '100%' }}>
              <Paper elevation={0} sx={{ p: 4, borderRadius: 3, bgcolor: 'transparent', boxShadow: 'none', border: '1px solid #e0e0e0', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar src={member.image} sx={{ width: 72, height: 72, mr: 2 }} />
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>{member.name[lang] || member.name.ko}</Typography>
                    <Typography variant="subtitle1" color="text.secondary" sx={{ fontWeight: 500 }}>{member.position[lang] || member.position.ko}</Typography>
                  </Box>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ flexGrow: 1 }}>
                  <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                    <WorkIcon color="primary" fontSize="small" />
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>{t.career}:</Typography>
                    <Typography variant="body2">{member.career[lang] || member.career.ko}</Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                    <SchoolIcon color="primary" fontSize="small" />
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>{t.degree}:</Typography>
                    <Typography variant="body2">{member.degree[lang] || member.degree.ko}</Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                    <VerifiedIcon color="success" fontSize="small" />
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>{t.cert}:</Typography>
                    {member.cert[lang] ? member.cert[lang].map((c, idx) => (
                      <Chip key={idx} label={c} size="small" sx={{ mx: 0.5 }} />
                    )) : null}
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                    <StarIcon color="warning" fontSize="small" />
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>{t.specialty}:</Typography>
                    {member.specialty[lang] ? member.specialty[lang].map((s, idx) => (
                      <Chip key={idx} label={s} size="small" sx={{ mx: 0.5 }} />
                    )) : null}
                  </Stack>
                </Box>
                <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 'auto' }}>
                  <LinkIcon color="info" fontSize="small" />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>{t.sns}:</Typography>
                  {member.sns.map((sns, idx) => (
                    <Link key={idx} href={sns.url} target="_blank" rel="noopener" sx={{ ml: 1, display: 'flex', alignItems: 'center' }} underline="hover">
                      {sns.icon}
                      <Typography variant="body2" sx={{ ml: 0.5 }}>{sns.label}</Typography>
                    </Link>
                  ))}
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
} 