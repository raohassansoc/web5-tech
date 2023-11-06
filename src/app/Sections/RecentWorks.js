import Image from "next/image";
import RecentWorkCard from "./Components/RecentWorkCard";
import { Arrow_Right } from "../SVGS/Arrows";
import { useRef } from "react";
import ScrollArrows from "./Components/ScrollArrows";

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



function RecentWorks(params) {

  const { locale } = useLanguage();
  const t = translations[locale];

  const recentWorks = t?.recentWork;
  // {
  //   name: "Young - crypto App",
  //   description:
  //     "Reliable & Fast Source of Information. Ask ChainGPT Al any question related to Blockchain and Crypto.",
  //   link: "*",
  //   tags: ["$YOUNG", "Young Tech"],
  // }
  const scrollRef = useRef()
  return (
    <div className="w-[95%] m-auto relative z-10 ">
      <h3 className="max-w-full uppercase styled-border m-auto lg:m-0 md:m-0 sm:m-0">
        {t?.TitleRecent}
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
          {recentWorks.map((e, i) => (
            <RecentWorkCard key={i} index={i} recentWork={e} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default RecentWorks;
