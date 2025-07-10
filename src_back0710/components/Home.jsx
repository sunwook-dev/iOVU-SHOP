import { Link, useParams } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Button,
  Paper,
  IconButton,
} from "@mui/material";
import { ShoppingCart, Favorite } from "@mui/icons-material";
import { products } from "../data/products";
import { Helmet } from "react-helmet-async";

function Home() {
  const { lang } = useParams();
  // 인기상품 3개만 추출 (예: id 1~3)
  const bestProducts = products.slice(0, 3);
  const messages = {
    ko: {
      welcome: "IOVU SHOP에 오신 것을 환영합니다",
      subtitle: "최고 품질의 티셔츠를 만나보세요",
      best: "인기 상품",
      view: "상품 보기"
    },
    en: {
      welcome: "Welcome to IOVU SHOP",
      subtitle: "Discover the best quality t-shirts",
      best: "Best Products",
      view: "View Product"
    }
  };
  return (
    <>
      <Helmet>
        <link rel="canonical" href={`https://iovu-shop.vercel.app/${lang}/`} />
        <link rel="alternate" href={`https://iovu-shop.vercel.app/ko/`} hreflang="ko" />
        <link rel="alternate" href={`https://iovu-shop.vercel.app/en/`} hreflang="en" />
        <link rel="alternate" href={`https://iovu-shop.vercel.app/`} hreflang="x-default" />
      </Helmet>
      {/* Hero Section */}
      <Paper
        sx={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          textAlign: "center",
          py: 8,
          mb: 5,
          borderRadius: 0,
        }}
      >
        <Container>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            {messages[lang]?.welcome}
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9 }}>
            {messages[lang]?.subtitle}
          </Typography>
        </Container>
      </Paper>

      {/* Products Section */}
      <Container maxWidth={false} sx={{ pb: 5 }}>
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          gutterBottom
          sx={{ mb: 5, color: "text.primary" }}
        >
          {messages[lang]?.best}
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {bestProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card
                component={Link}
                to={`/${lang}/product/${product.id}`}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  textDecoration: "none",
                  color: "inherit",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={product.image}
                  alt={`${product.gender || ''}용 ${product.name_ko || product.name} 정면 이미지`}
                  sx={{
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {lang === "en" ? product.name_en || product.name : product.name_ko || product.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {lang === "en" ? product.description_en || product.description : product.description_ko || product.description}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    {product.price.toLocaleString()}원
                  </Typography>
                  <Button
                    variant="contained"
                    startIcon={<ShoppingCart />}
                    sx={{ mt: 2, width: "100%" }}
                  >
                    {messages[lang]?.view}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Home;
