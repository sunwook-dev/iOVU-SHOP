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
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 2 } }}>
        <Typography 
          variant="h3" 
          component="h1" 
          align="center" 
          sx={{ 
            fontWeight: 700, 
            mb: 6, 
            letterSpacing: 1,
            color: 'text.primary',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
          }}
        >
          {t.title}
        </Typography>
        <Grid container spacing={2} justifyContent="center" alignItems="stretch" sx={{ maxWidth: 1400, mx: 'auto' }}>
          {team.map((member, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={i} sx={{ display: 'flex', minWidth: 0 }}>
              <Paper 
                elevation={2} 
                sx={{ 
                  p: 2.5, 
                  borderRadius: 3, 
                  bgcolor: 'white',
                  display: 'flex', 
                  flexDirection: 'column', 
                  width: '100%',
                  height: 520,
                  minWidth: 280,
                  maxWidth: 300,
                  flex: 1,
                  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                  }
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2.5 }}>
                  <Avatar 
                    src={member.image} 
                    sx={{ 
                      width: 70, 
                      height: 70, 
                      mb: 1.5,
                      border: '3px solid #f0f0f0'
                    }} 
                  />
                  <Typography variant="h6" sx={{ fontWeight: 600, textAlign: 'center', mb: 0.5, fontSize: '1.1rem' }}>
                    {member.name[lang] || member.name.ko}
                  </Typography>
                  <Typography 
                    variant="subtitle2" 
                    color="primary" 
                    sx={{ fontWeight: 500, textAlign: 'center', fontSize: '0.85rem' }}
                  >
                    {member.position[lang] || member.position.ko}
                  </Typography>
                </Box>
                
                <Divider sx={{ mb: 2 }} />
                
                <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1.2, overflow: 'hidden' }}>
                  <Box sx={{ minHeight: 50 }}>
                    <Stack direction="row" alignItems="flex-start" spacing={1} sx={{ mb: 0.5 }}>
                      <WorkIcon color="primary" fontSize="small" sx={{ mt: 0.2, flexShrink: 0 }} />
                      <Box sx={{ overflow: 'hidden' }}>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary', fontSize: '0.8rem' }}>
                          {t.career}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          color="text.secondary" 
                          sx={{ 
                            lineHeight: 1.3,
                            fontSize: '0.75rem',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                          }}
                        >
                          {member.career[lang] || member.career.ko}
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>

                  <Box sx={{ minHeight: 50 }}>
                    <Stack direction="row" alignItems="flex-start" spacing={1} sx={{ mb: 0.5 }}>
                      <SchoolIcon color="primary" fontSize="small" sx={{ mt: 0.2, flexShrink: 0 }} />
                      <Box sx={{ overflow: 'hidden' }}>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary', fontSize: '0.8rem' }}>
                          {t.degree}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          color="text.secondary" 
                          sx={{ 
                            lineHeight: 1.3,
                            fontSize: '0.75rem',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                          }}
                        >
                          {member.degree[lang] || member.degree.ko}
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>

                  <Box sx={{ minHeight: 55 }}>
                    <Stack direction="row" alignItems="flex-start" spacing={1} sx={{ mb: 0.5 }}>
                      <VerifiedIcon color="success" fontSize="small" sx={{ mt: 0.2, flexShrink: 0 }} />
                      <Box sx={{ overflow: 'hidden' }}>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary', mb: 0.5, fontSize: '0.8rem' }}>
                          {t.cert}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.3 }}>
                          {member.cert[lang] ? member.cert[lang].map((c, idx) => (
                            <Chip 
                              key={idx} 
                              label={c} 
                              size="small" 
                              color="success" 
                              variant="outlined"
                              sx={{ fontSize: '0.65rem', height: 18 }}
                            />
                          )) : null}
                        </Box>
                      </Box>
                    </Stack>
                  </Box>

                  <Box sx={{ minHeight: 55 }}>
                    <Stack direction="row" alignItems="flex-start" spacing={1} sx={{ mb: 0.5 }}>
                      <StarIcon color="warning" fontSize="small" sx={{ mt: 0.2, flexShrink: 0 }} />
                      <Box sx={{ overflow: 'hidden' }}>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary', mb: 0.5, fontSize: '0.8rem' }}>
                          {t.specialty}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.3 }}>
                          {member.specialty[lang] ? member.specialty[lang].map((s, idx) => (
                            <Chip 
                              key={idx} 
                              label={s} 
                              size="small" 
                              color="warning" 
                              variant="outlined"
                              sx={{ fontSize: '0.65rem', height: 18 }}
                            />
                          )) : null}
                        </Box>
                      </Box>
                    </Stack>
                  </Box>
                </Box>

                <Box sx={{ mt: 'auto', pt: 1.5 }}>
                  <Divider sx={{ mb: 1.5 }} />
                  <Stack direction="row" alignItems="center" spacing={0.5} sx={{ justifyContent: 'center' }}>
                    <LinkIcon color="info" fontSize="small" />
                    <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary', fontSize: '0.8rem' }}>
                      {t.sns}:
                    </Typography>
                    {member.sns.map((sns, idx) => (
                      <Link 
                        key={idx} 
                        href={sns.url} 
                        target="_blank" 
                        rel="noopener" 
                        sx={{ 
                          ml: 0.5, 
                          display: 'flex', 
                          alignItems: 'center',
                          color: 'primary.main',
                          textDecoration: 'none',
                          '&:hover': {
                            textDecoration: 'underline'
                          }
                        }} 
                      >
                        {sns.icon}
                        <Typography variant="body2" sx={{ ml: 0.3, fontSize: '0.75rem' }}>
                          {sns.label}
                        </Typography>
                      </Link>
                    ))}
                  </Stack>
                </Box>
              </Paper>
            </Grid>            ))}
        </Grid>
      </Container>
    </Box>
  );
} 