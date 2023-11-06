"use client";
import companyLogos from "../SVGS/CompanyLogos";
import GridBg from "../Sections/Components/GridBg";
import Header from "../Sections/Components/Header";
import SwapCard from "../Sections/Components/SwapCard";
import Footer from "../Sections/Footer";
import LinksSection from "../Sections/LinksSection";
import SwapSection from "../Sections/SwapSection";
import "./../chain-gpt.css";

import { useLanguage } from "@/contexts/LanguageContext"; 
import en from "../../translations/en.json"
import es from "../../translations/es.json"
import fr from "../../translations/fr.json"
import vi from "../../translations/vi.json"
const translations = {
  en,
  es,
  fr,
  vi
}


function Contact(params) {
  const { locale } = useLanguage();
  const t = translations[locale];


  return (
    <div>
      <Header />
      <GridBg name={t?.TitleSwap} />
      <div className="p-5">
        <SwapCard />
      </div>
      <LinksSection />
      <Footer />
    </div>
  );
}

export default Contact;
