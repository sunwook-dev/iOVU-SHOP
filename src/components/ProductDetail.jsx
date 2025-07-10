import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  Button,
  Chip,
  Paper,
  Divider,
  Alert,
} from "@mui/material";
import { ArrowBack, ShoppingCart, Favorite } from "@mui/icons-material";
import { products } from "../data/products";
import usePageSEO from '../utils/usePageSEO';

function ProductDetail() {
  const { id, lang } = useParams();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const product = products.find((p) => p.id === parseInt(id));
  const messages = {
    ko: {
      notFound: "상품을 찾을 수 없습니다",
      back: "홈으로 돌아가기",
      details: "상품 상세 정보",
      spec: "제품 사양",
      brand: "브랜드",
      material: "소재",
      sizes: "사이즈",
      colors: "색상",
      stock: "재고",
      rating: "평점",
      selectSize: "사이즈",
      selectColor: "컬러",
      addToCart: "장바구니 담기",
      buyNow: "바로 구매하기",
      selectAlert: "사이즈와 컬러를 선택해주세요.",
      addedAlert: (name, size, color) => `장바구니에 추가되었습니다!\n상품: ${name}\n사이즈: ${size}\n컬러: ${color}`,
      buyAlert: (name, size, color) => `바로 구매하겠습니다!\n상품: ${name}\n사이즈: ${size}\n컬러: ${color}`
    },
    en: {
      notFound: "Product not found",
      back: "Back to Home",
      details: "Product Details",
      spec: "Product Specs",
      brand: "Brand",
      material: "Material",
      sizes: "Sizes",
      colors: "Colors",
      stock: "Stock",
      rating: "Rating",
      selectSize: "Size",
      selectColor: "Color",
      addToCart: "Add to Cart",
      buyNow: "Buy Now",
      selectAlert: "Please select size and color.",
      addedAlert: (name, size, color) => `Added to cart!\nProduct: ${name}\nSize: ${size}\nColor: ${color}`,
      buyAlert: (name, size, color) => `Buying now!\nProduct: ${name}\nSize: ${size}\nColor: ${color}`
    }
  };

  usePageSEO({
    title: (product ? (lang === 'en' ? product.name_en : product.name_ko) : '') + ' | iOVU Shop',
    description: product ? (lang === 'en' ? product.description_en : product.description_ko) : '',
    canonical: `https://iovu-shop.vercel.app/${lang}/product/${id}`,
    alternates: [
      { href: `https://iovu-shop.vercel.app/ko/product/${id}`, hreflang: 'ko' },
      { href: `https://iovu-shop.vercel.app/en/product/${id}`, hreflang: 'en' },
      { href: `https://iovu-shop.vercel.app/product/${id}`, hreflang: 'x-default' }
    ]
  });

  if (!product) {
    return (
      <Box sx={{ minHeight: "100%", width: "100%", py: 5 }}>
        <Container>
          <Typography variant="h4" gutterBottom>
            {messages[lang]?.notFound}
          </Typography>
          <Button
            component={Link}
            to={`/${lang}/`}
            variant="contained"
            startIcon={<ArrowBack />}
          >
            {messages[lang]?.back}
          </Button>
        </Container>
      </Box>
    );
  }

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert(messages[lang]?.selectAlert);
      return;
    }
    alert(
      messages[lang]?.addedAlert(
        lang === "en" ? product.name_en || product.name : product.name_ko || product.name,
        selectedSize,
        selectedColor
      )
    );
  };

  const handleBuyNow = () => {
    if (!selectedSize || !selectedColor) {
      alert(messages[lang]?.selectAlert);
      return;
    }
    alert(
      messages[lang]?.buyAlert(
        lang === "en" ? product.name_en || product.name : product.name_ko || product.name,
        selectedSize,
        selectedColor
      )
    );
  };

  return (
    <Box sx={{ minHeight: "100%", width: "100%", py: 5 }}>
      <Container maxWidth={false}>
        <Button
          component={Link}
          to={`/${lang}/`}
          variant="outlined"
          startIcon={<ArrowBack />}
          sx={{ mb: 4 }}
        >
          {messages[lang]?.back}
        </Button>

        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
          <Grid container spacing={4}>
            {/* Product Image */}
            <Grid item xs={12} md={6}>
              <Card elevation={0}>
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={`${product.gender || ''}용 ${lang === "en" ? product.name_en || product.name : product.name_ko || product.name} 정면 이미지`}
                  sx={{
                    borderRadius: 2,
                    width: "100%",
                    height: "auto",
                  }}
                />
              </Card>
            </Grid>

            {/* Product Info */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                component="h1"
                gutterBottom
                sx={{ fontWeight: "bold" }}
              >
                {lang === "en" ? product.name_en || product.name : product.name_ko || product.name}
              </Typography>

              <Typography variant="h6" color="text.secondary" paragraph>
                {lang === "en" ? product.description_en || product.description : product.description_ko || product.description}
              </Typography>

              <Typography
                variant="h4"
                color="primary"
                sx={{ fontWeight: "bold", mb: 3 }}
              >
                {lang === "en"
                  ? `₩${product.price.toLocaleString()}`
                  : `${product.price.toLocaleString()}원`}
              </Typography>

              <Divider sx={{ my: 3 }} />

              {/* Product Details */}
              <Typography variant="h6" gutterBottom>
                {messages[lang]?.details}
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                {lang === "en" ? product.details_en || product.details : product.details_ko || product.details}
              </Typography>

              {/* Product Spec Table (시멘틱) */}
              <Box sx={{ my: 3 }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: 8, overflow: 'hidden' }}>
                  <caption style={{ captionSide: 'top', fontWeight: 600, fontSize: '1.1rem', marginBottom: 8, color: '#333' }}>
                    {messages[lang]?.spec}
                  </caption>
                  <thead style={{ background: '#f5f5f5' }}>
                    <tr>
                      <th scope="col" style={{ padding: 8, border: '1px solid #eee', textAlign: 'left' }}>{messages[lang]?.brand}</th>
                      <th scope="col" style={{ padding: 8, border: '1px solid #eee', textAlign: 'left' }}>{messages[lang]?.material}</th>
                      <th scope="col" style={{ padding: 8, border: '1px solid #eee', textAlign: 'left' }}>{messages[lang]?.sizes}</th>
                      <th scope="col" style={{ padding: 8, border: '1px solid #eee', textAlign: 'left' }}>{messages[lang]?.colors}</th>
                      <th scope="col" style={{ padding: 8, border: '1px solid #eee', textAlign: 'left' }}>{messages[lang]?.stock}</th>
                      <th scope="col" style={{ padding: 8, border: '1px solid #eee', textAlign: 'left' }}>{messages[lang]?.rating}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: 8, border: '1px solid #eee' }}>{product.brand || 'iOVU'}</td>
                      <td style={{ padding: 8, border: '1px solid #eee' }}>{lang === 'en' ? (product.material_en || product.material) : product.material}</td>
                      <td style={{ padding: 8, border: '1px solid #eee' }}>{product.sizes && product.sizes.length > 0 ? product.sizes.join(', ') : '-'}</td>
                      <td style={{ padding: 8, border: '1px solid #eee' }}>{product.colors && product.colors.length > 0 ? (lang === 'en' ? (product.colors_en ? product.colors_en.join(', ') : product.colors.join(', ')) : product.colors.join(', ')) : '-'}</td>
                      <td style={{ padding: 8, border: '1px solid #eee' }}>{typeof product.stock === 'number' ? (lang === 'en' ? `${product.stock} pcs` : `${product.stock}개`) : '-'}</td>
                      <td style={{ padding: 8, border: '1px solid #eee' }}>{product.rating ? (lang === 'en' ? `${product.rating} / 5.0 (${product.reviews} reviews)` : `${product.rating} / 5.0 (${product.reviews}건)`) : '-'}</td>
                    </tr>
                  </tbody>
                </table>
              </Box>

              {/* Size Selection */}
              <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                {messages[lang]?.selectSize}
              </Typography>
              <Box sx={{ display: "flex", gap: 1, mb: 3, flexWrap: "wrap" }}>
                {product.sizes.map((size) => (
                  <Chip
                    key={size}
                    label={size}
                    variant={selectedSize === size ? "filled" : "outlined"}
                    color={selectedSize === size ? "primary" : "default"}
                    clickable
                    onClick={() => handleSizeClick(size)}
                    sx={{
                      "&:hover": {
                        backgroundColor:
                          selectedSize === size
                            ? "primary.main"
                            : "primary.light",
                        color: "white",
                      },
                    }}
                  />
                ))}
              </Box>

              {/* Color Selection */}
              <Typography variant="h6" gutterBottom>
                {messages[lang]?.selectColor}
              </Typography>
              <Box sx={{ display: "flex", gap: 1, mb: 4, flexWrap: "wrap" }}>
                {product.colors && (lang === 'en' ? (product.colors_en || product.colors) : product.colors).map((color, idx) => (
                  <Chip
                    key={color + idx}
                    label={color}
                    variant={selectedColor === color ? "filled" : "outlined"}
                    color={selectedColor === color ? "primary" : "default"}
                    clickable
                    onClick={() => handleColorClick(color)}
                    sx={{
                      "&:hover": {
                        backgroundColor:
                          selectedColor === color
                            ? "primary.main"
                            : "primary.light",
                        color: "white",
                      },
                    }}
                  />
                ))}
              </Box>

              {/* Selected Options Display */}
              {(selectedSize || selectedColor) && (
                <Alert severity="info" sx={{ mb: 3 }}>
                  <Typography variant="body2">
                    선택된 옵션: {selectedSize && `사이즈 ${selectedSize}`} {selectedSize && selectedColor && " | "} {selectedColor && `컬러 ${selectedColor}`}
                  </Typography>
                </Alert>
              )}

              {/* Action Buttons */}
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<ShoppingCart />}
                  onClick={handleAddToCart}
                  sx={{ flex: 1, minWidth: 150 }}
                >
                  {messages[lang]?.addToCart}
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<Favorite />}
                  onClick={handleBuyNow}
                  sx={{ flex: 1, minWidth: 150 }}
                >
                  {messages[lang]?.buyNow}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}
export default ProductDetail;

