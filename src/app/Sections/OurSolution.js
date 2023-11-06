import SolutionCard from "./Components/SolutionCard";

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

function OurSolution(params) {

  const { locale } = useLanguage();
  const t = translations[locale];

  const solutions = t?.solutions;

  return (
    <div className="w-[95%] m-auto relative z-10 ">
      <h3 className="max-w-full uppercase styled-border m-auto lg:m-0 md:m-0 sm:m-0">{t?.TitleSolution}</h3>
      <div
        style={{
          background: "rgba(0,0,0,.1)",
          backdropFilter: "blur(24px)",
          width:'auto'
        }}
      >
        {solutions?.map((e, i) => (
          <SolutionCard key={i} index={i} solution={e} />
        ))}
      </div>
    </div>
  );
}
export default OurSolution;
