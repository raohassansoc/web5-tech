import { Indent_Arrow } from "../SVGS/Arrows";

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


function ContactSection() {

  const { locale } = useLanguage();
  const t = translations[locale];

  const contactInfo = t?.contactInfo;
  const contactFormFields = t?.contactFormFields;

  return (
    <div className="flex flex-col-reverse sm:flex-row justify-center items-center">
      <div className="flex-1 flex-col items-center">
        <div className="w-[80%] m-auto">
          {contactInfo?.map((item, index) => (
            <div key={index}>
              <p className="flex   items-center m-0 font-medium text-18 pt-4 leading-7 text-[#524E65]">
                <span className="pr-1">{Indent_Arrow}</span>
                {item.label}
              </p>
              <p>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 w-full p-5">
        <div className="m-auto">
          <p className="flex items-center m-0 font-medium text-18 pt-4 leading-7 text-[#524E65]">
            <span className="pr-1">{Indent_Arrow}</span>
            {t?.contectForm}
          </p>
          {contactFormFields?.map((field, index) => (
            <div key={index} className="py-5">
              <input
                className="w-full border-b-2 border-[white] p-2 focus-visible:border-none"
                style={{ background: "none" }}
                type="text" // Assuming you want text inputs
                placeholder={field.placeholder}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <div className="btn-bg w-[80%] text-center ">
            <p className="p-4  m-0 text-center">{t?.sendMessageButton}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactSection;
