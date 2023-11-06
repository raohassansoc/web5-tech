import Image from "next/image";
import RecentWorkCard from "./Components/RecentWorkCard";
import { Arrow_Right, Short_Arrow } from "../SVGS/Arrows";
import TokenCard from "./Components/TokenCard";
import SwapCard from "./Components/SwapCard";
import SwapIframe from "./Components/SwapIframe";
import Swapzone from "./Components/Swapzone";
import Swap1inch from "./Components/Swap1inch";

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


function SwapSection(params) {
  const { locale } = useLanguage();
  const t = translations[locale];
  return (
    <div className="w-[95%] m-auto relative z-10 ">
      <h3 className="max-w-full uppercase styled-border m-auto lg:m-0 md:m-0 p-5 min-w-[180px]  sm:m-0 text-center">
        {t?.TitleSwap}
      </h3>
      {/* <Swapzone /> */}
      {/* <Swap1inch /> */}
      <SwapCard />
      {/* <SwapIframe /> */}
      </div>
  );
}
export default SwapSection;
