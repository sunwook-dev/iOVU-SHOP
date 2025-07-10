import { Helmet } from "react-helmet-async";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useParams } from "react-router-dom";

export default function FAQ() {
  const { lang } = useParams();
  
  // 다국어 메시지
  const messages = {
    ko: {
      title: "자주 묻는 질문(FAQ)",
      faqs: [
        {
          question: "배송은 얼마나 걸리나요?",
          answer: "평균 1~3일 이내에 발송되며, 지역에 따라 1~5일 내 도착합니다."
        },
        {
          question: "교환/환불은 어떻게 하나요?",
          answer: "상품 수령 후 7일 이내에 마이페이지 또는 고객센터를 통해 신청하실 수 있습니다."
        },
        {
          question: "사이즈가 맞지 않으면 어떻게 하나요?",
          answer: "사이즈 교환 1회는 무료로 제공되며, 왕복 배송비는 쇼핑몰에서 부담합니다."
        },
        {
          question: "회원가입 없이도 주문 가능한가요?",
          answer: "비회원도 주문이 가능하지만, 주문/배송 조회 등 일부 서비스는 회원만 이용 가능합니다."
        },
        {
          question: "적립금/쿠폰은 어떻게 사용하나요?",
          answer: "결제 단계에서 보유하신 적립금과 쿠폰을 선택하여 사용하실 수 있습니다."
        },
        {
          question: "세탁 및 관리 방법이 궁금해요.",
          answer: "모든 티셔츠는 30도 이하의 찬물로 단독 세탁을 권장합니다. 건조기 사용은 피해 주세요."
        },
        {
          question: "품절 상품은 재입고 되나요?",
          answer: "재입고 알림 신청 시, 재입고 시점에 문자 또는 이메일로 안내드립니다."
        }
      ]
    },
    en: {
      title: "Frequently Asked Questions (FAQ)",
      faqs: [
        {
          question: "How long does shipping take?",
          answer: "Orders are typically shipped within 1-3 days and arrive within 1-5 days depending on your location."
        },
        {
          question: "How do I exchange or return items?",
          answer: "You can request exchanges or returns within 7 days of receiving your order through My Page or Customer Service."
        },
        {
          question: "What if the size doesn't fit?",
          answer: "One free size exchange is provided, and we cover the round-trip shipping costs."
        },
        {
          question: "Can I order without creating an account?",
          answer: "Non-members can place orders, but some services like order tracking and delivery status are only available to members."
        },
        {
          question: "How do I use points and coupons?",
          answer: "You can select and use your available points and coupons during the payment process."
        },
        {
          question: "I'm curious about washing and care methods.",
          answer: "All t-shirts should be washed separately in cold water (30°C or below). Please avoid using a dryer."
        },
        {
          question: "Do out-of-stock items get restocked?",
          answer: "When you sign up for restock notifications, we'll notify you via text or email when items are back in stock."
        }
      ]
    }
  };

  const currentMessages = messages[lang] || messages.ko;
  const currentFaqs = currentMessages.faqs;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": currentFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const baseUrl = "https://iovu-shop.vercel.app";
  return (
    <Box sx={{ minHeight: '70vh', bgcolor: '#f5f7fa', py: 6 }}>
      <Helmet>
        <link rel="canonical" href={`https://iovu-shop.vercel.app/${lang}/faq`} />
        <link rel="alternate" href={`${baseUrl}/ko/faq`} hreflang="ko" />
        <link rel="alternate" href={`${baseUrl}/en/faq`} hreflang="en" />
        <link rel="alternate" href={baseUrl + "/faq"} hreflang="x-default" />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>
      <Container maxWidth="md">
        <Typography variant="h3" component="h1" align="center" sx={{ fontWeight: 700, mb: 5, color: '#222' }}>
          {currentMessages.title}
        </Typography>
        {currentFaqs.map((faq, i) => (
          <Accordion key={i} sx={{ mb: 2, borderRadius: 2, boxShadow: 1 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Q. {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="text.secondary">
                A. {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
} 