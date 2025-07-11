import { Box, Container, Typography, Paper, Divider, Grid, Link, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ScienceIcon from '@mui/icons-material/Science';
import DescriptionIcon from '@mui/icons-material/Description';
import GavelIcon from '@mui/icons-material/Gavel';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PublicIcon from '@mui/icons-material/Public';
import { Helmet } from 'react-helmet-async';

const messages = {
  ko: {
    title: "기업의 사회적 원칙",
    desc: "iOVU SHOP은 투명하고 윤리적인 경영을 위해 아래와 같은 사회적 원칙을 실천합니다.",
    sections: [
      {
        icon: <ScienceIcon color="primary" />, title: "소재 시험 성적서", desc: "모든 제품은 공인 시험기관의 내구성, 친환경성 등 소재 시험을 통과하였으며, 성적서를 투명하게 공개합니다.", link: "/sample-report.pdf", linkLabel: "시험 성적서(PDF)"
      },
      {
        icon: <GavelIcon color="success" />, title: "특허", desc: "혁신적인 소재 및 디자인에 대한 국내외 특허를 보유하고 있습니다.", link: "/sample-patent.pdf", linkLabel: "특허증(PDF)"
      },
      {
        icon: <AutoStoriesIcon color="info" />, title: "논문", desc: "제품 개발 및 소재 연구 결과를 논문으로 발표하고 있습니다.", link: "/sample-paper.pdf", linkLabel: "연구 논문(PDF)"
      },
      {
        icon: <PublicIcon color="secondary" />, title: "윤리·지속가능 보고서", desc: "윤리경영, 친환경 생산, 사회공헌 등 지속가능경영 실천 내용을 연 1회 이상 보고서로 발간합니다.", link: "/sample-csr.pdf", linkLabel: "CSR 보고서(PDF)"
      }
    ]
  },
  en: {
    title: "Corporate Social Principles",
    desc: "iOVU SHOP practices the following social principles for transparent and ethical management.",
    sections: [
      {
        icon: <ScienceIcon color="primary" />, title: "Material Test Report", desc: "All products pass durability and eco-friendliness tests by certified agencies, and reports are transparently disclosed.", link: "/sample-report.pdf", linkLabel: "Test Report (PDF)"
      },
      {
        icon: <GavelIcon color="success" />, title: "Patents", desc: "We hold domestic and international patents for innovative materials and designs.", link: "/sample-patent.pdf", linkLabel: "Patent (PDF)"
      },
      {
        icon: <AutoStoriesIcon color="info" />, title: "Papers", desc: "We publish research results on product development and materials in academic papers.", link: "/sample-paper.pdf", linkLabel: "Research Paper (PDF)"
      },
      {
        icon: <PublicIcon color="secondary" />, title: "Ethics & Sustainability Report", desc: "We publish annual reports on ethical management, eco-friendly production, and social contribution.", link: "/sample-csr.pdf", linkLabel: "CSR Report (PDF)"
      }
    ]
  }
};

export default function Evidence({ lang = "ko" }) {
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
          <Typography align="center" sx={{ mb: 4, color: '#1976d2', fontWeight: 500 }}>{t.desc}</Typography>
          <Divider sx={{ mb: 4 }} />
          <List>
            {t.sections.map((section, idx) => (
              <ListItem key={idx} alignItems="flex-start" sx={{ mb: 3 }}>
                <ListItemIcon sx={{ minWidth: 44 }}>{section.icon}</ListItemIcon>
                <ListItemText
                  primary={<Typography variant="h6" sx={{ fontWeight: 600 }}>{section.title}</Typography>}
                  secondary={<>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>{section.desc}</Typography>
                    <Link href={section.link} target="_blank" rel="noopener" underline="hover" sx={{ fontWeight: 500 }}>{section.linkLabel}</Link>
                  </>}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Container>
    </Box>
  );
} 