"use client";
import "./../chain-gpt.css";
import { Roboto_Mono } from "next/font/google";

import { useEffect, useRef, useState } from "react";
import LinksSection from "../Sections/LinksSection";
import Footer from "../Sections/Footer";
import Header from "../Sections/Components/Header";
import GridBg from "../Sections/Components/GridBg";
import BlogWCategories from "../Sections/Components/BlogWCategories";

const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

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


export default function Home() {

  const { locale } = useLanguage();
  const t = translations[locale];

  return (
    <main
      className={
        "min-h-screen items-center justify-between " + roboto_mono.className
      }
    >
      <Header />
      <GridBg name={t?.TitleBlogPost} />
      <BlogWCategories />
      <div className="p-[64px]"></div>
      <LinksSection />
      <Footer />
    </main>
  );
}
