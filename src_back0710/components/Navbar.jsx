import { Link, useLocation, useParams } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";
import { ShoppingCart, Home, Store } from "@mui/icons-material";

export default function Navbar({ lang = "ko" }) {
  const location = useLocation();
  const { lang: currentLang } = useParams();
  
  // 다국어 메시지
  const messages = {
    ko: {
      mens: "남성",
      womens: "여성", 
      unisex: "유니섹스",
      new: "신상품",
      sale: "세일",
      faq: "FAQ",
      store: "매장정보",
      guide: "가이드"
    },
    en: {
      mens: "Men",
      womens: "Women",
      unisex: "Unisex", 
      new: "New",
      sale: "Sale",
      faq: "FAQ",
      store: "Store",
      guide: "Guide"
    }
  };

  const currentMessages = messages[lang] || messages.ko;
  
  // 현재 경로에서 lang만 바꿔주는 함수
  const getLangUrl = (targetLang) => {
    return location.pathname.replace(/^\/(ko|en)/, `/${targetLang}`) + location.search + location.hash;
  };
  // 모든 링크에 현재 언어 prefix 적용
  const prefix = `/${lang}`;
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            component={Link}
            to={prefix + "/"}
            sx={{
              textDecoration: 'none',
              color: 'white',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <Home />
            iOVU SHOP
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            <Button
              color="inherit"
              component={Link}
              to={prefix + "/category/mens"}
              sx={{ fontWeight: 500 }}
            >
              {currentMessages.mens}
            </Button>
            <Button
              color="inherit"
              component={Link}
              to={prefix + "/category/womens"}
              sx={{ fontWeight: 500 }}
            >
              {currentMessages.womens}
            </Button>
            <Button
              color="inherit"
              component={Link}
              to={prefix + "/category/unisex"}
              sx={{ fontWeight: 500 }}
            >
              {currentMessages.unisex}
            </Button>
            <Button
              color="inherit"
              component={Link}
              to={prefix + "/category/new"}
              sx={{ fontWeight: 500 }}
            >
              {currentMessages.new}
            </Button>
            <Button
              color="inherit"
              component={Link}
              to={prefix + "/category/sale"}
              sx={{ fontWeight: 500 }}
            >
              {currentMessages.sale}
            </Button>
            <Button
              color="inherit"
              component={Link}
              to={prefix + "/faq"}
              sx={{ fontWeight: 500 }}
            >
              {currentMessages.faq}
            </Button>
            <Button
              color="inherit"
              component={Link}
              to={prefix + "/store"}
              sx={{ fontWeight: 500 }}
            >
              {currentMessages.store}
            </Button>
            <Button
              color="inherit"
              component={Link}
              to={prefix + "/guide"}
              sx={{ fontWeight: 500 }}
            >
              {currentMessages.guide}
            </Button>
          </Box>
          {/* 언어 전환 버튼 (오른쪽 끝) */}
          <Box sx={{ marginLeft: 2 }}>
            <Link
              to={getLangUrl("ko")}
              style={{
                color: currentLang === "ko" ? "#fff" : "#bbdefb",
                fontWeight: currentLang === "ko" ? "bold" : "normal",
                marginRight: 8,
                textDecoration: "none"
              }}
            >
              KO
            </Link>
            <span style={{ color: "#fff" }}>|</span>
            <Link
              to={getLangUrl("en")}
              style={{
                color: currentLang === "en" ? "#fff" : "#bbdefb",
                fontWeight: currentLang === "en" ? "bold" : "normal",
                marginLeft: 8,
                textDecoration: "none"
              }}
            >
              EN
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
