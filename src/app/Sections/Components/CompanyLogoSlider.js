const { default: companyLogos } = require("@/app/SVGS/CompanyLogos");
import { useLanguage } from "@/contexts/LanguageContext";
import en from "../../../translations/en.json"
import es from "../../../translations/es.json"
import fr from "../../../translations/fr.json"
import vi from "../../../translations/vi.json"
const translations = {
  en,
  es,
  fr,
  vi
}
function CompanyLogoSlider(params) {
  const companyLogosList = companyLogos;
  const { locale } = useLanguage();
  const t = translations[locale];
  return (
    <>
      <div
        className="flex pt-11 w-[66%] min-w-[300px] mx-auto relative"
        style={{
          overflow: "hidden",
        }}
      >
        {/* Background Gradient */}
        <div
          className="absolute inset-0 z-20"
          style={{
            background: `linear-gradient(90deg, #0a090f 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, #0a090f 100%)`,
          }}
        ></div>

        <div className="flex[1] flex hide-scrollbar justify-center items-center z-10 relative">
          {companyLogosList.map((e, i) => (
            <div key={i} className="px-5">
              {e}
            </div>
          ))}
        </div>
      </div>
      <div className="text-center">
        <p>{t?.companyLogoDec}</p>
      </div>
    </>
  );
}

export default CompanyLogoSlider;
