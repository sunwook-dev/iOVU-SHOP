import { Helmet } from "react-helmet-async";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
  Grid,
  Paper,
  Divider,
  Alert
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { useParams } from "react-router-dom";

export default function Guide() {
  const { lang } = useParams();
  
  // 다국어 메시지
  const messages = {
    ko: {
      title: "티셔츠 오래 입는 세탁법",
      subtitle: "티셔츠를 변형 없이 오래 입기 위한 올바른 세탁 방법을 단계별로 안내합니다.",
      author: "작성자:",
      authorName: "iOVU 에디터",
      tip: "TIP:",
      tipText: "세탁 후에는 옷걸이에 걸어 자연 건조하면 형태가 오래 유지됩니다. 건조기 사용은 피해주세요!",
      steps: [
        {
          title: "분류 세탁",
          desc: "티셔츠는 밝은 색/어두운 색/프린트 제품으로 분류해 세탁하세요.",
          img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&h=300&fit=crop"
        },
        {
          title: "찬물 사용",
          desc: "30도 이하의 찬물로 세탁하면 변형과 수축을 줄일 수 있습니다.",
          img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=300&fit=crop"
        },
        {
          title: "중성세제 사용",
          desc: "강한 세제 대신 중성세제를 사용해 섬유 손상을 방지하세요.",
          img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=300&fit=crop"
        },
        {
          title: "뒤집어서 세탁",
          desc: "프린트/자수 티셔츠는 뒤집어서 세탁하면 색상과 프린트가 오래갑니다.",
          img: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=300&fit=crop"
        },
        {
          title: "자연 건조",
          desc: "건조기 대신 그늘에서 자연 건조하면 수축과 변형을 막을 수 있습니다.",
          img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=300&fit=crop"
        }
      ]
    },
    en: {
      title: "How to Wash T-Shirts to Make Them Last Longer",
      subtitle: "Step-by-step guide to proper washing methods to keep t-shirts in good shape without deformation.",
      author: "Author:",
      authorName: "iOVU Editor",
      tip: "TIP:",
      tipText: "After washing, hang on a clothes hanger to air dry naturally to maintain shape longer. Please avoid using a dryer!",
      steps: [
        {
          title: "Sort by Color",
          desc: "Sort t-shirts by bright colors, dark colors, and printed items before washing.",
          img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&h=300&fit=crop"
        },
        {
          title: "Use Cold Water",
          desc: "Washing in cold water (30°C or below) reduces deformation and shrinkage.",
          img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=300&fit=crop"
        },
        {
          title: "Use Mild Detergent",
          desc: "Use mild detergent instead of strong detergents to prevent fiber damage.",
          img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=300&fit=crop"
        },
        {
          title: "Wash Inside Out",
          desc: "Wash printed/embroidered t-shirts inside out to preserve colors and prints longer.",
          img: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=300&fit=crop"
        },
        {
          title: "Air Dry Naturally",
          desc: "Air dry in the shade instead of using a dryer to prevent shrinkage and deformation.",
          img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=300&fit=crop"
        }
      ]
    }
  };

  const currentMessages = messages[lang] || messages.ko;
  const currentSteps = currentMessages.steps;

  // HowTo 구조화 데이터 (티셔츠 오래 입는 세탁법)
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": currentMessages.title,
    "description": currentMessages.subtitle,
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
    "author": {
      "@type": "Person",
      "name": currentMessages.authorName
    },
    "step": currentSteps.map((step) => ({
      "@type": "HowToStep",
      "name": step.title,
      "text": step.desc
    }))
  };

  const baseUrl = "https://iovu-shop.vercel.app";
  return (
    <Box sx={{ minHeight: '70vh', bgcolor: '#f5f7fa', py: 6 }}>
      <Helmet>
        <link rel="canonical" href={`https://iovu-shop.vercel.app/${lang}/guide`} />
        <link rel="alternate" href={`${baseUrl}/ko/guide`} hreflang="ko" />
        <link rel="alternate" href={`${baseUrl}/en/guide`} hreflang="en" />
        <link rel="alternate" href={baseUrl + "/guide"} hreflang="x-default" />
        <script type="application/ld+json">{JSON.stringify(howToJsonLd)}</script>
      </Helmet>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: 5, borderRadius: 3, mb: 4 }}>
          <Typography variant="h3" component="h1" align="center" sx={{ fontWeight: 700, mb: 2 }}>
            {currentMessages.title}
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 3 }}>
            {currentMessages.subtitle}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            <CardMedia
              component="img"
              image="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=400&fit=crop"
              alt={lang === 'en' ? "Main t-shirt washing image (clean white t-shirt)" : "티셔츠 세탁 대표 이미지 (깨끗하게 정돈된 흰색 티셔츠)"}
              sx={{ width: 320, height: 210, borderRadius: 2, objectFit: 'cover', boxShadow: 2 }}
            />
          </Box>
          <Typography align="center" sx={{ color: '#888', mb: 2 }}>
            <b>{currentMessages.author}</b> {currentMessages.authorName}
          </Typography>
          <Divider sx={{ mb: 4 }} />
          <Grid container spacing={3}>
            {currentSteps.map((step, idx) => (
              <Grid item xs={12} sm={6} key={idx}>
                <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', borderRadius: 2, boxShadow: 1 }}>
                  <CardMedia
                    component="img"
                    image={step.img}
                    alt={lang === 'en' ? `T-shirt ${step.title} example image` : `티셔츠 ${step.title} 예시 이미지`}
                    sx={{ height: 160, objectFit: 'cover', borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      {idx + 1}. {step.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {step.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          {/* 시멘틱 HowTo 단계 리스트 */}
          <Box sx={{ mt: 5 }}>
            <ol style={{ marginLeft: 24, fontSize: '1.05rem' }}>
              {currentSteps.map((step, idx) => (
                <li key={idx} style={{ marginBottom: 8 }}>
                  <b>{step.title}</b>: {step.desc}
                </li>
              ))}
            </ol>
          </Box>
          <Alert icon={<InfoIcon />} severity="info" sx={{ mt: 5, fontSize: 16 }}>
            <b>{currentMessages.tip}</b> {currentMessages.tipText}
          </Alert>
        </Paper>
      </Container>
    </Box>
  );
} 