import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Footer";
import "./App.css";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Category from "./components/Category";
import FAQ from "./components/FAQ";
import StoreInfo from "./components/StoreInfo";
import Guide from "./components/Guide";
import AboutUs from "./components/AboutUs";
import TeamBio from "./components/TeamBio";
import EditorialGuidelines from "./components/EditorialGuidelines";
import Evidence from "./components/Evidence";
import Certifications from "./components/Certifications";
import Trust from './components/Trust';

// 언어별 라우트 Wrapper
function LangRoutes() {
  const { lang } = useParams();
  // 지원 언어가 아니면 /ko/로 리디렉트
  if (!['ko', 'en'].includes(lang)) return <Navigate to="/ko/" replace />;
  return (
    <>
      <Navbar lang={lang} />
      <main className="main-content" id="main-content">
        <Routes>
          <Route path="" element={<Home lang={lang} />} />
          <Route path="product/:id" element={<ProductDetail lang={lang} />} />
          <Route path="category/:type" element={<Category lang={lang} />} />
          <Route path="faq" element={<FAQ lang={lang} />} />
          <Route path="store" element={<StoreInfo lang={lang} />} />
          <Route path="guide" element={<Guide lang={lang} />} />
          <Route path="about" element={<AboutUs lang={lang} />} />
          <Route path="team" element={<TeamBio lang={lang} />} />
          <Route path="editorial" element={<EditorialGuidelines lang={lang} />} />
          <Route path="evidence" element={<Evidence lang={lang} />} />
          <Route path="certifications" element={<Certifications lang={lang} />} />
          <Route path="contact" element={<Contact lang={lang} />} />
          <Route path="shipping" element={<Shipping lang={lang} />} />
          <Route path="exchange" element={<Exchange lang={lang} />} />
        </Routes>
      </main>
      <footer>
        <Footer lang={lang} />
      </footer>
    </>
  );
}

// 임시 컴포넌트 (404 방지용)
const Shipping = () => <div><Helmet><title>배송안내 - iOVU SHOP</title></Helmet><h1>배송안내</h1></div>;
const Exchange = () => <div><Helmet><title>교환/반품 - iOVU SHOP</title></Helmet><h1>교환/반품</h1></div>;
const Contact = () => <div><Helmet><title>문의하기 - iOVU SHOP</title></Helmet><h1>문의하기</h1></div>;

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Helmet>
          <title>iOVU Shop</title>
          <meta name="description" content="iOVU Shop - 최고의 상품을 만나는 곳" />
          <script type="application/ld+json">{`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "iOVU Shop",
              "url": "https://iovu-shop.vercel.app/",
              "logo": "https://iovu-shop.vercel.app/logo.svg",
              "sameAs": [
                "https://www.facebook.com/yourpage",
                "https://www.instagram.com/yourpage"
              ]
            }
          `}</script>
        </Helmet>
        <Routes>
          {/* 기본 경로는 /ko/로 리디렉트 */}
          <Route path="/" element={<Navigate to="/ko/" replace />} />
          <Route path=":lang/*" element={<LangRoutes />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
