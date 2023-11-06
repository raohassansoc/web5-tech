"use client";
import companyLogos from "../SVGS/CompanyLogos";
import CompanyLogoSlider from "../Sections/Components/CompanyLogoSlider";
import GridBg from "../Sections/Components/GridBg";
import Header from "../Sections/Components/Header";
import ContactSection from "../Sections/ContactSection";
import Footer from "../Sections/Footer";
import LinksSection from "../Sections/LinksSection";
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
  const companyLogosList = companyLogos;
  const { locale } = useLanguage();
  const t = translations[locale];
  return (
    <div>
      <Header />
      <GridBg name={t?.TitleContact} />
      <ContactSection />
      <CompanyLogoSlider />
      <LinksSection />
      <Footer />
    </div>
  );
}

export default Contact;
