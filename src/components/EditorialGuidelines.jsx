import { Box, Container, Typography, Paper, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import EditNoteIcon from '@mui/icons-material/EditNote';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import UpdateIcon from '@mui/icons-material/Update';
import BusinessIcon from '@mui/icons-material/Business';

const messages = {
  ko: {
    title: "운영원칙",
    desc: "iOVU SHOP은 신뢰할 수 있는 정보 제공을 위해 아래의 운영원칙을 엄격히 준수합니다.",
    sections: [
      {
        icon: <EditNoteIcon color="primary" />, title: "콘텐츠 작성", desc: "모든 콘텐츠는 전문 에디터가 최신 트렌드와 고객의 니즈를 반영하여 직접 작성합니다."
      },
      {
        icon: <FactCheckIcon color="success" />, title: "사실 검증", desc: "상품 정보, 소재, 인증 등은 공식 자료와 전문가 검토를 통해 사실 여부를 꼼꼼히 확인합니다."
      },
      {
        icon: <SmartToyIcon color="info" />, title: "AI 사용 정책", desc: "AI는 초안 작성 및 데이터 분석에 활용되며, 최종 공개 전 반드시 사람이 검수합니다."
      },
      {
        icon: <UpdateIcon color="warning" />, title: "업데이트 주기", desc: "모든 정보는 최소 월 1회 이상 정기적으로 업데이트되며, 변경 시 즉시 반영합니다."
      },
      {
        icon: <BusinessIcon color="secondary" />, title: "책임 부서", desc: "콘텐츠팀(문의: editorial@iovu-shop.com)이 운영원칙 준수 및 정보 관리를 책임집니다."
      }
    ]
  },
  en: {
    title: "Editorial Guidelines",
    desc: "iOVU SHOP strictly adheres to the following editorial guidelines to provide trustworthy information.",
    sections: [
      {
        icon: <EditNoteIcon color="primary" />, title: "Content Creation", desc: "All content is created by professional editors, reflecting the latest trends and customer needs."
      },
      {
        icon: <FactCheckIcon color="success" />, title: "Fact-Checking", desc: "Product details, materials, and certifications are thoroughly verified by official documents and expert review."
      },
      {
        icon: <SmartToyIcon color="info" />, title: "AI Usage Policy", desc: "AI is used for drafting and data analysis, but all content is human-reviewed before publication."
      },
      {
        icon: <UpdateIcon color="warning" />, title: "Update Frequency", desc: "All information is updated at least monthly, and changes are reflected immediately."
      },
      {
        icon: <BusinessIcon color="secondary" />, title: "Responsible Department", desc: "The Content Team (contact: editorial@iovu-shop.com) is responsible for compliance and information management."
      }
    ]
  }
};

export default function EditorialGuidelines({ lang = "ko" }) {
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
                  secondary={<Typography variant="body1" color="text.secondary">{section.desc}</Typography>}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Container>
    </Box>
  );
} 