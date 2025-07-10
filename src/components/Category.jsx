import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Container, Grid } from "@mui/material";
import usePageSEO from '../utils/usePageSEO';

function filterProducts(type) {
  switch (type) {
    case "mens":
      return products.filter(p => p.category === "남성");
    case "womens":
      return products.filter(p => p.category === "여성");
    case "unisex":
      return products.filter(p => p.category === "유니섹스");
    case "new":
      return products.filter(p => p.isNew);
    case "sale":
      return products.filter(p => p.isSale);
    default:
      return [];
  }
}

export default function Category() {
  const { type, lang } = useParams();
  const filtered = filterProducts(type);
  const messages = {
    ko: {
      mens: "남성 티셔츠",
      womens: "여성 티셔츠",
      unisex: "유니섹스 티셔츠",
      new: "신상품",
      sale: "세일",
      empty: "해당 카테고리에 상품이 없습니다.",
      empty2: "다른 카테고리를 확인해보세요.",
      view: "상품 보기"
    },
    en: {
      mens: "Men's T-Shirts",
      womens: "Women's T-Shirts",
      unisex: "Unisex T-Shirts",
      new: "New Arrivals",
      sale: "Sale",
      empty: "No products in this category.",
      empty2: "Check other categories.",
      view: "View Product"
    }
  };
  const title = messages[lang]?.[type] || (lang === "en" ? "Category" : "카테고리");

  usePageSEO({
    title: `${title} | iOVU Shop`,
    canonical: `https://iovu-shop.vercel.app/${lang}/category/${type}`,
    alternates: [
      { href: `https://iovu-shop.vercel.app/ko/category/${type}`, hreflang: 'ko' },
      { href: `https://iovu-shop.vercel.app/en/category/${type}`, hreflang: 'en' },
      { href: `https://iovu-shop.vercel.app/category/${type}`, hreflang: 'x-default' }
    ]
  });

  const baseUrl = "https://iovu-shop.vercel.app";
  return (
    <Box sx={{ minHeight: '70vh', bgcolor: '#fafafa', py: 4 }}>
      <Container maxWidth="lg">
        
        <Typography 
          variant="h3" 
          component="h1" 
          sx={{ 
            textAlign: 'center', 
            fontWeight: 700, 
            mb: 4,
            color: 'text.primary'
          }}
        >
          {title}
        </Typography>

        {filtered.length > 0 ? (
          <Grid container spacing={3}>
            {filtered.map(product => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                <Card 
                  component={Link}
                  to={`/${lang}/product/${product.id}`}
                  sx={{ 
                    height: '100%',
                    display: 'flex', 
                    flexDirection: 'column',
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'all 0.3s ease',
                    borderRadius: 2,
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    height="240"
                    image={product.image}
                    alt={`${product.gender || ''}용 ${product.name_ko || product.name} 정면 이미지`}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ 
                    flexGrow: 1, 
                    display: 'flex', 
                    flexDirection: 'column',
                    p: 3
                  }}>
                    <Typography 
                      variant="h6" 
                      component="h3" 
                      sx={{ 
                        fontWeight: 600,
                        mb: 1,
                        lineHeight: 1.3,
                        height: 40,
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical'
                      }}
                    >
                      {lang === "en" ? product.name_en || product.name : product.name_ko || product.name}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary" 
                      sx={{ 
                        mb: 2,
                        flexGrow: 1,
                        height: 40,
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical'
                      }}
                    >
                      {lang === "en" ? product.description_en || product.description : product.description_ko || product.description}
                    </Typography>
                    <Typography 
                      variant="h6" 
                      color="primary" 
                      sx={{ 
                        fontWeight: 700, 
                        mb: 2,
                        fontSize: '1.1rem'
                      }}
                    >
                      {product.price.toLocaleString()}원
                    </Typography>
                    <Button 
                      variant="contained" 
                      startIcon={<ShoppingCartIcon />} 
                      fullWidth 
                      sx={{ 
                        fontWeight: 600,
                        py: 1.2,
                        bgcolor: '#1976d2',
                        '&:hover': {
                          bgcolor: '#1565c0',
                        }
                      }}
                    >
                      {messages[lang]?.view}
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box sx={{ 
            textAlign: 'center', 
            py: 8,
            color: 'text.secondary'
          }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              {messages[lang]?.empty}
            </Typography>
            <Typography variant="body1">
              {messages[lang]?.empty2}
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
} 