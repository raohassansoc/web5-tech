import HeroTitle from "./HeroTitle";

import { Roboto_Mono } from "next/font/google";
import ServicesList from "./ServicesList";
import companyLogos from "../SVGS/CompanyLogos";
import CompanyLogoSlider from "./Components/CompanyLogoSlider";

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


const roboto_mono = Roboto_Mono({ subsets: ["latin"] });
function HeroSection({ firstStage , title }) {
  const companyLogosList = companyLogos;
  const { locale } = useLanguage();
  const t = translations[locale];
  return (
    <>
      <div className="flex flex-wrap-reverse w-full overflow-hidden">
        <div className="flex-1">
          <div className="flex w-full min-w-[300px] justify-center h-[50vh]">
            <HeroTitle title={title} />
 
          </div>
        </div>
        <div className="flex-1 w-full m-auto min-w-[300px]">
          <div
            ref={firstStage}
            className=" w-[80%] h-[50vh]  m-auto min-w-[300px]"
          ></div>
        </div>
      </div>
      <div className="flex w-[66%] flex-col sm:flex-row m-auto min-w-[320px]  items-end z-10 relative">
        <div className="flex-1 ">
          <div className="p-5 border-2  border-white w-fit">
            <svg
              width="21"
              height="17"
              viewBox="0 0 21 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_5_296)">
                <path
                  d="M8.10734 0.541504H3.36866L0.163086 6.0564V16.5415H8.10734V8.7798H4.90177V6.66916L8.10734 0.541504ZM16.9575 6.66916L20.1631 0.541504H15.4244L12.2188 6.0564V16.5415H20.1631V8.7798H16.9575V6.66916Z"
                  fill="#EFEFE5"
                />
              </g>
              <defs>
                <clipPath id="clip0_5_296">
                  <rect
                    width="20"
                    height="16"
                    fill="white"
                    transform="translate(0.163086 0.541504)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p
            className={`px-5 py-1 border-2 border-white uppercase ${roboto_mono.className}`}
          >
          {t?.heroQuet}
          </p>
        </div>
        <div className="flex-1 w-full">
          <ServicesList />
        </div>
      </div>
      <CompanyLogoSlider />
    </>
  );
}
export default HeroSection;
