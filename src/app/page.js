"use client";
import "./chain-gpt.css";
import { useEffect, useRef, useState } from "react";
import HeroSection from "./Sections/HeroSection";
import { Roboto_Mono } from "next/font/google";
import LinksSection from "./Sections/LinksSection";
import MainCanvas from "@/Canvas";
import Footer from "./Sections/Footer";
import OurSolution from "./Sections/OurSolution";
import Header from "./Sections/Components/Header";
import RecentWorks from "./Sections/RecentWorks";
import Process from "./Sections/Process";
import LatestArticles from "./Sections/LatestArticles";
import TeamSection from "./Sections/TeamSection";
import FAQSection from "./Sections/FAQSection";
import SwapSection from "./Sections/SwapSection";
import ChatGPT from "./Sections/ChatGPT";

import { useLanguage } from "@/contexts/LanguageContext";
import en from "../translations/en.json"
import es from "../translations/es.json"
import fr from "../translations/fr.json"
import vi from "../translations/vi.json"
const translations = {
  en,
  es,
  fr,
  vi
}

const roboto_mono = Roboto_Mono({ subsets: ["latin"] });


export default function Home() {
  const { locale } = useLanguage();
  const t = translations[locale];


  const lastPage = useRef();
  const firstStage = useRef();
  const lastStage = useRef();
  const mainCanvasRef = useRef();
  const [progress, setProgress] = useState(0);

  const calculateDistance = (elementRef) => {
    const elementRect = elementRef?.current?.getBoundingClientRect();
    const mainCanvasRect = mainCanvasRef?.current?.getBoundingClientRect();
    const distance = Math.abs(elementRect?.top - mainCanvasRect?.top);
    return distance;
  };

  const handleScroll = () => {
    const distanceToPage3 = calculateDistance(lastPage);
    // console.log(mainCanvasRef, lastPage);
    const x = window.scrollY;
    const progress = x / distanceToPage3;
    requestAnimationFrame(() => {
      setProgress(progress);
    });
    // console.log(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
    
          <main
            className={
              "min-h-screen items-center justify-between " + roboto_mono.className
            }
            style={{background: `linear-gradient(to bottom, #1565C0, #1565C0)`}}
          >
            <Header />
            <div className="vertical-line vertical-line--left z-20"></div>
            <div className="vertical-line vertical-line--center z-20"></div>
            <div className="vertical-line vertical-line--right z-20"></div>

            <div ref={mainCanvasRef}>
          
              <MainCanvas progress={progress} lastStage={lastStage} firstStage={firstStage} />
            </div>

            <HeroSection title={t?.title}  firstStage={firstStage}  />
            <div className="p-[64px]" ></div>
            <OurSolution />
            <div className="p-[64px]" ></div>
            <RecentWorks />
            <div className="p-[64px]" ></div>
            
            <Process />
            <div className="p-[64px]" ></div>

            {/* <ChatGPT />
            <div className="p-[64px]" ></div> */}

            <SwapSection />
            <div className="p-[64px]" ></div>

            <LatestArticles />
            <div className="p-[64px]" ></div>
            
            {/* <TeamSection /> */}
            <div className="p-[64px]" ></div>
            
            {/* <FAQSection /> */}
            <div className="p-[64px]" ></div>
            <LinksSection lastStage={lastStage} />
            <Footer footerRef={lastPage} />
          </main>

    </>
  );
}
