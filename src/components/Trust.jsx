import React from 'react';
import { Helmet } from 'react-helmet-async';
import AboutUs from './AboutUs';
import TeamBio from './TeamBio';
import EditorialGuidelines from './EditorialGuidelines';
import Evidence from './Evidence';
import Certifications from './Certifications';
import FAQ from './FAQ';
import StoreInfo from './StoreInfo';

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "iOVU Shop",
  "url": "https://iovu-shop.vercel.app/",
  "logo": "https://iovu-shop.vercel.app/public/logo.png",
  "contactPoint": [{
    "@type": "ContactPoint",
    "telephone": "+82-2-1234-5678",
    "contactType": "customer service",
    "areaServed": "KR",
    "availableLanguage": ["Korean", "English"]
  }],
  "sameAs": [
    "https://www.instagram.com/iovu_shop/"
  ]
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is iOVU Shop?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "iOVU Shop is a premium online store for quality t-shirts and apparel."
      }
    }
    // ...추가 FAQ는 실제 FAQ.jsx에서 가져와서 동적으로 생성 가능
  ]
};

const Trust = () => (
  <div>
    <Helmet>
      <title>Trust & Credibility | iOVU Shop</title>
      <meta name="description" content="Learn about iOVU Shop's mission, team, certifications, evidence, and more. All trust signals in one place." />
      <link rel="canonical" href="https://iovu-shop.vercel.app/trust" />
      <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
    </Helmet>
    <h1>iOVU 신뢰센터</h1>
    <nav style={{marginBottom: 24}}>
      <a href="#about">About Us</a> | 
      <a href="#team">Team Bio</a> | 
      <a href="#editorial">Editorial Guidelines</a> | 
      <a href="#evidence">Evidence</a> | 
      <a href="#certifications">Certifications</a> | 
      <a href="#faq">FAQ</a> | 
      <a href="#contact">Contact</a>
    </nav>
    <section id="about"><AboutUs /></section>
    <section id="team"><TeamBio /></section>
    <section id="editorial"><EditorialGuidelines /></section>
    <section id="evidence"><Evidence /></section>
    <section id="certifications"><Certifications /></section>
    <section id="faq"><FAQ /></section>
    <section id="contact"><StoreInfo /></section>
  </div>
);

export default Trust; 