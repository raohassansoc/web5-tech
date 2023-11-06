import Profile1_Image from "@/../public/profile1.png";
import ProfileCard from "./Components/ProfileCard";
import { useRef } from "react";
import ScrollArrows from "./Components/ScrollArrows";

import { useLanguage } from "@/contexts/LanguageContext";
import en from "../../../src/translations/en.json"
import es from "../../../src/translations/es.json"
import fr from "../../../src/translations/fr.json"
import vi from "../../../src/translations/vi.json"
const translations = {
  en,
  es,
  fr,
  vi
}

function TeamSection(params) {

  const { locale } = useLanguage();
  const t = translations[locale];

  const team = t?.Team;

  const scrollRef = useRef();

  return (
    <div className="w-[95%] m-auto relative z-10 ">
      <h3 className="max-w-full uppercase styled-border styled-border2 m-auto lg:m-0 md:m-0 sm:m-0">
        {t?.TitleTeam}
      </h3>
      <div className="flex gap-5 pt-20 flex-wrap-reverse justify-center sm:flex-wrap-reverse md:flex-nowrap relative z-20 ">
        <ScrollArrows scrollRef={scrollRef} />
        <div
          className="flex hide-scrollbar1 gap-y-5 w-full overflow-x-auto"
          style={{
            background: "rgba(0,0,0,.1)",
            backdropFilter: "blur(24px)",
          }}
          ref={scrollRef}
        >
          {team?.map(( e, i) => (
            <ProfileCard key={i} index={i} profile={e} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default TeamSection;
