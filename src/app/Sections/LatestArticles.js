import Image from "next/image";
import { Arrow_Right } from "../SVGS/Arrows";
import ArticleCard from "./Components/ArticleCard";
import ScrollArrows from "./Components/ScrollArrows";
import { useRef } from "react";

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



function LatestArticles(params) {

  const { locale } = useLanguage();
  const t = translations[locale];

  const articles = t?.Articles;
  // {
  //   author: "ANDREW DIDOVSKIY",
  //   description: "Best tech stack for Web 3.0 development!",
  //   link: "#",
  //   date: "August 22, 2023",
  // }
  const scrollRef = useRef()
  return (
    <div className="w-[95%] m-auto relative z-10 ">
      <h3 className="max-w-full uppercase styled-border styled-border1 m-auto lg:m-0 md:m-0 sm:m-0">
        {t?.ArticalTitle}
      </h3>
      <div className="flex gap-5 pt-20 flex-wrap-reverse justify-center sm:flex-wrap-reverse md:flex-nowrap">
        <ScrollArrows scrollRef={scrollRef} />
        <div
          className="flex hide-scrollbar1 gap-y-5 w-full overflow-x-auto"
          style={{
            background: "rgba(0,0,0,.1)",
            backdropFilter: "blur(24px)",
          }}
          ref={scrollRef}
        >
          {articles.map((e, i) => (
            <ArticleCard key={i} index={i} article={e} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default LatestArticles;
