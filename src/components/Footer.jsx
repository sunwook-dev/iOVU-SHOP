import { Link as RouterLink, useParams } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

function Footer() {
  const { lang } = useParams();
  
  // 다국어 메시지
  const messages = {
    ko: {
      tagline: "최고 품질의 티셔츠를 만나보세요",
      customerSupport: "고객지원",
      contact: "문의하기",
      shipping: "배송안내",
      exchange: "교환/반품",
      companyInfo: "회사정보",
      about: "회사소개",
      team: "팀 소개",
      editorial: "에디토리얼 가이드",
      evidence: "과학적/CSR 증거",
      certifications: "인증/트러스트",
      terms: "이용약관",
      privacy: "개인정보처리방침",
      copyright: "© 2025 IOVU SHOP. All rights reserved."
    },
    en: {
      tagline: "Discover the highest quality t-shirts",
      customerSupport: "Customer Support",
      contact: "Contact Us",
      shipping: "Shipping Info",
      exchange: "Exchange/Return",
      companyInfo: "Company Info",
      about: "About Us",
      team: "Team Bio",
      editorial: "Editorial Guidelines",
      evidence: "Scientific/CSR Evidence",
      certifications: "Certifications/Trust",
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      copyright: "© 2025 IOVU SHOP. All rights reserved."
    }
  };

  const currentMessages = messages[lang] || messages.ko;

  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
        color: "white",
        py: 5,
        mt: "auto",
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              sx={{ color: "#667eea", fontWeight: "bold" }}
            >
              IOVU SHOP
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#bdc3c7", lineHeight: 1.6 }}
            >
              {currentMessages.tagline}
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ color: "#667eea" }}>
              {currentMessages.customerSupport}
            </Typography>
            <List dense sx={{ p: 0 }}>
              <ListItem sx={{ px: 0 }}>
                <ListItemText
                  primary={<RouterLink to={`/${lang}/contact`} style={{ color: '#bdc3c7', textDecoration: 'none' }}>{currentMessages.contact}</RouterLink>}
                  sx={{
                    "& .MuiListItemText-primary": {
                      color: "#bdc3c7",
                      cursor: "pointer",
                      "&:hover": { color: "#667eea" },
                    },
                  }}
                />
              </ListItem>
              <ListItem sx={{ px: 0 }}>
                <ListItemText
                  primary={<RouterLink to={`/${lang}/shipping`} style={{ color: '#bdc3c7', textDecoration: 'none' }}>{currentMessages.shipping}</RouterLink>}
                  sx={{
                    "& .MuiListItemText-primary": {
                      color: "#bdc3c7",
                      cursor: "pointer",
                      "&:hover": { color: "#667eea" },
                    },
                  }}
                />
              </ListItem>
              <ListItem sx={{ px: 0 }}>
                <ListItemText
                  primary={<RouterLink to={`/${lang}/exchange`} style={{ color: '#bdc3c7', textDecoration: 'none' }}>{currentMessages.exchange}</RouterLink>}
                  sx={{
                    "& .MuiListItemText-primary": {
                      color: "#bdc3c7",
                      cursor: "pointer",
                      "&:hover": { color: "#667eea" },
                    },
                  }}
                />
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ color: "#667eea" }}>
              {currentMessages.companyInfo}
            </Typography>
            <List dense sx={{ p: 0 }}>
              <ListItem sx={{ px: 0 }}>
                <ListItemText
                  primary={<RouterLink to={`/${lang}/about`} style={{ color: '#bdc3c7', textDecoration: 'none' }}>{currentMessages.about}</RouterLink>}
                  sx={{
                    "& .MuiListItemText-primary": {
                      color: "#bdc3c7",
                      cursor: "pointer",
                      "&:hover": { color: "#667eea" },
                    },
                  }}
                />
              </ListItem>
              <ListItem sx={{ px: 0 }}>
                <ListItemText
                  primary={<RouterLink to={`/${lang}/team`} style={{ color: '#bdc3c7', textDecoration: 'none' }}>{currentMessages.team}</RouterLink>}
                  sx={{
                    "& .MuiListItemText-primary": {
                      color: "#bdc3c7",
                      cursor: "pointer",
                      "&:hover": { color: "#667eea" },
                    },
                  }}
                />
              </ListItem>
              <ListItem sx={{ px: 0 }}>
                <ListItemText
                  primary={<RouterLink to={`/${lang}/editorial`} style={{ color: '#bdc3c7', textDecoration: 'none' }}>{currentMessages.editorial}</RouterLink>}
                  sx={{
                    "& .MuiListItemText-primary": {
                      color: "#bdc3c7",
                      cursor: "pointer",
                      "&:hover": { color: "#667eea" },
                    },
                  }}
                />
              </ListItem>
              <ListItem sx={{ px: 0 }}>
                <ListItemText
                  primary={<RouterLink to={`/${lang}/evidence`} style={{ color: '#bdc3c7', textDecoration: 'none' }}>{currentMessages.evidence}</RouterLink>}
                  sx={{
                    "& .MuiListItemText-primary": {
                      color: "#bdc3c7",
                      cursor: "pointer",
                      "&:hover": { color: "#667eea" },
                    },
                  }}
                />
              </ListItem>
              <ListItem sx={{ px: 0 }}>
                <ListItemText
                  primary={<RouterLink to={`/${lang}/certifications`} style={{ color: '#bdc3c7', textDecoration: 'none' }}>{currentMessages.certifications}</RouterLink>}
                  sx={{
                    "& .MuiListItemText-primary": {
                      color: "#bdc3c7",
                      cursor: "pointer",
                      "&:hover": { color: "#667eea" },
                    },
                  }}
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, borderColor: "#34495e" }} />

        <Typography
          variant="body2"
          textAlign="center"
          sx={{ color: "#95a5a6" }}
        >
          {currentMessages.copyright}
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
