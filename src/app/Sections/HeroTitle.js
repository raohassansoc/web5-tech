import Image from "next/image";
import HERO_TITLE from "@/../public/herotitle.svg"

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


function HeroTitle({params, title}) {

  const { locale } = useLanguage();
  const t = translations[locale];

  return (
    <div className="flex-1">
      <div className="flex justify-center items-end">
        <div className="overflow-hidden w-full h-[47vh] m-5">
          <div  className="object-contain w-full h-[49vh] p-[16px]" >
            <h2 style={{color:'white'}}>{t?.TitleMain}</h2>
            <span style={{display:'flex'}}> <h3 className="max-w-full uppercase styled-border m-auto lg:m-0 md:m-0 sm:m-0">{t?.TitleMainTechnology}</h3>
            <h2 style={{color:'white' , marginBottom:'auto', marginTop:'auto'}}>{t?.TitleMainFrom}</h2>
            </span>
            <span style={{display:'flex'}}>  <h2 style={{color:'white'}}>{t?.TitleMainTraditional}</h2>
            <h3 className="max-w-full uppercase styled-border m-auto lg:m-0 md:m-0 sm:m-0"><span style={{padding:'10px 10px'}}>{t?.TitleMainWeb}<span style={{color:'#E2255E'}}>5</span></span></h3>
            </span>
           
          </div>
          {/* <Image src={HERO_TITLE} alt="hero-title" className="object-contain w-full h-[49vh] p-[16px]"  /> */}
        </div>
      </div>
    </div>
  );
}

export default HeroTitle;
