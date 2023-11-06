import { Arrow_45 } from "../SVGS/Arrows";

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


function Footer({ footerRef }) {

  const { locale } = useLanguage();
  const t = translations[locale];

  return (
    <div className=" w-[66%] m-auto relative z-10" ref={footerRef}>
      <p className="text-[20px] uppercase text-center">
        {t?.FooterTitle}
      </p>
      <div className=" flex justify-between w-[90%] m-auto flex-wrap">
        <div className="w-[70%]  m-auto">
          <input
            className="w-full border-b-2 border-[white] p-2 focus-visible:border-none"
            style={{ background: "none" }}
            type="email"
            placeholder={t?.Footerinput}
          />
        </div>
        {/* <div className="w-[30%] text-center">
          <div className="flex submit-button-3 p-0">
            <p className="m-0">Get started </p>
            {Arrow_45}
          </div>

        </div> */}
        {/* <input
          type="submit"
          value={t?.FooterButton}
          data-wait="Please wait..."
          className="submit-button-3 w-button m-auto"
        ></input> */}
      </div>
      <p className="m-8 p-8 text-center">
        copyright © 2023 Web5 Solution | all rights reserved.
      </p>
    </div>
  );
}
export default Footer;
