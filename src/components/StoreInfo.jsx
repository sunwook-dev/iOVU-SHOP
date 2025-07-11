import {
  Container,
  Typography,
  Paper,
  Box,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Stack
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import WifiIcon from "@mui/icons-material/Wifi";
import LanguageIcon from "@mui/icons-material/Language";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { useParams } from "react-router-dom";
import usePageSEO from '../utils/usePageSEO';
import { Helmet } from "react-helmet-async";

export default function StoreInfo() {
  const { lang } = useParams();
  
  // 다국어 메시지
  const messages = {
    ko: {
      title: "매장 정보",
      storeName: "iOVU Shop 강남점",
      address: "서울특별시 강남구 테헤란로 123 (06133)",
      phone: "02-1234-5678",
      hours: "매일 10:00 ~ 21:00",
      parking: "주차 가능",
      wifi: "무료 Wi-Fi 제공",
      website: "https://iovu-shop.vercel.app/store",
      mapTitle: "매장 위치 지도",
      mapDescription: "* 강남구 테헤란로 123, 2호선 강남역 3번 출구 도보 3분"
    },
    en: {
      title: "Store Information",
      storeName: "iOVU Shop Gangnam Branch",
      address: "123 Teheran-ro, Gangnam-gu, Seoul (06133)",
      phone: "02-1234-5678",
      hours: "Daily 10:00 ~ 21:00",
      parking: "Parking Available",
      wifi: "Free Wi-Fi Provided",
      website: "https://iovu-shop.vercel.app/store",
      mapTitle: "Store Location Map",
      mapDescription: "* 123 Teheran-ro, Gangnam-gu, 3 min walk from Gangnam Station Exit 3 (Line 2)"
    }
  };

  const currentMessages = messages[lang] || messages.ko;

  // JSON-LD 구조화 데이터
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": currentMessages.storeName,
    "image": "https://iovu-shop.vercel.app/logo.svg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": lang === 'en' ? "123 Teheran-ro" : "테헤란로 123",
      "addressLocality": lang === 'en' ? "Gangnam-gu" : "강남구",
      "addressRegion": lang === 'en' ? "Seoul" : "서울특별시",
      "postalCode": "06133",
      "addressCountry": "KR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.5012743,
      "longitude": 127.039585
    },
    "telephone": "+82-2-1234-5678",
    "email": "help@iovu-shop.com",
    "url": "https://iovu-shop.vercel.app/store",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "10:00",
        "closes": "21:00"
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "availableLanguage": ["Korean", "English"],
        "telephone": "+82-2-1234-5678",
        "email": "help@iovu-shop.com",
        "url": "https://wa.me/821012345678",
        "contactOption": ["TollFree", "Chat"],
        "areaServed": "KR"
      },
      {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "availableLanguage": ["Korean"],
        "url": "https://open.kakao.com/o/somekakaochat",
        "contactOption": ["Chat"],
        "areaServed": "KR"
      }
    ]
  };

  const baseUrl = "https://iovu-shop.vercel.app";
  usePageSEO({
    title: currentMessages.title + ' | iOVU Shop',
    canonical: `https://iovu-shop.vercel.app/${lang}/store`,
    alternates: [
      { href: `https://iovu-shop.vercel.app/ko/store`, hreflang: 'ko' },
      { href: `https://iovu-shop.vercel.app/en/store`, hreflang: 'en' },
      { href: `https://iovu-shop.vercel.app/store`, hreflang: 'x-default' }
    ]
  });
  return (
    <Box sx={{ minHeight: '70vh', bgcolor: '#f5f7fa', py: 6 }}>
      <Helmet>
        <title>{currentMessages.title} | iOVU Shop</title>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Container maxWidth="sm">
        <Paper elevation={0} sx={{ p: 5, borderRadius: 3, bgcolor: 'transparent', boxShadow: 'none' }}>
          <Typography variant="h3" component="h1" align="center" sx={{ fontWeight: 700, mb: 3 }}>
            {currentMessages.title}
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <Typography variant="h5" align="center" sx={{ fontWeight: 600, mb: 2 }}>
            {currentMessages.storeName}
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon><LocationOnIcon color="primary" /></ListItemIcon>
              <ListItemText primary={currentMessages.address} />
            </ListItem>
            <ListItem>
              <ListItemIcon><LocalPhoneIcon color="primary" /></ListItemIcon>
              <ListItemText primary={currentMessages.phone} />
            </ListItem>
            <ListItem>
              <ListItemIcon><AccessTimeIcon color="primary" /></ListItemIcon>
              <ListItemText primary={currentMessages.hours} />
            </ListItem>
            <ListItem>
              <ListItemIcon><DirectionsCarIcon color="primary" /></ListItemIcon>
              <ListItemText primary={currentMessages.parking} />
            </ListItem>
            <ListItem>
              <ListItemIcon><WifiIcon color="primary" /></ListItemIcon>
              <ListItemText primary={currentMessages.wifi} />
            </ListItem>
            <ListItem>
              <ListItemIcon><LanguageIcon color="primary" /></ListItemIcon>
              <ListItemText primary={currentMessages.website} />
            </ListItem>
          </List>
          {/* 채팅 위젯 */}
          <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 3, mb: 2 }}>
            <Button
              variant="contained"
              color="success"
              startIcon={<WhatsAppIcon />}
              href="https://wa.me/821012345678"
              target="_blank"
              rel="noopener"
              sx={{ fontWeight: 600 }}
            >
              WhatsApp
            </Button>
            <Button
              variant="contained"
              color="warning"
              startIcon={<ChatBubbleIcon />}
              href="https://open.kakao.com/o/somekakaochat"
              target="_blank"
              rel="noopener"
              sx={{ fontWeight: 600, color: '#fff', background: '#fae100', '&:hover': { background: '#ffe066' } }}
            >
              Kakao
            </Button>
          </Stack>
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <iframe
              title={currentMessages.mapTitle}
              width="100%"
              height="250"
              frameBorder="0"
              style={{ border: 0, borderRadius: 8 }}
              src="https://www.openstreetmap.org/export/embed.html?bbox=127.0379%2C37.5005%2C127.0412%2C37.5020&amp;layer=mapnik&amp;marker=37.5012743%2C127.039585"
              allowFullScreen
            ></iframe>
            <Typography variant="caption" color="text.secondary">
              {currentMessages.mapDescription}
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
} 