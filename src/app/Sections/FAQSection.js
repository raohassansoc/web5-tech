import Plus_Image from "@/../public/plus.svg";
import Image from "next/image";
import { useState } from "react";

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

function FAQSection(params) {
  const [opened, setOpened] = useState(-1);

  const { locale } = useLanguage();
  const t = translations[locale];

  const questions = t?.questions

  return (
    <div className="w-[95%] m-auto relative z-10 ">
      <h3 className="max-w-full uppercase styled-border styled-border3 m-auto lg:m-0 md:m-0 sm:m-0">
        {t?.TitleFAQ}
      </h3>
      <div
        className="w-[72%] min-w-[300px] m-auto p-5 pt-20"
        style={{
          background: "rgba(0,0,0,.1)",
          backdropFilter: "blur(24px)",
        }}
      >
        {questions.map((e, i) => (
          <>
            <div
              className={
                `flex justify-between p-5 border-t-2 border-x-2 border-[#353539] border-opacity-[0.6] ` +
                (i == questions.length - 1 ? "border-b-2" : "")
              }
              onClick={() => {
                if (opened == i) setOpened(-1);
                else setOpened(i)
              }}
            >
              <p className="m-0 capitalize">{e.q}</p>
              {i == opened ? (
                <div className="px-5 rotate-45" onClick={() => setOpened(-1)}>
                  <Image src={Plus_Image} />
                </div>
              ) : (
                <div className="px-5">
                  <Image src={Plus_Image} />
                </div>
              )}
            </div>
            {i == opened && (
              <div
                className={`flex justify-between p-5 border-t-2 border-x-2 border-[#353539] border-opacity-[0.6] `}
              >
                <p className="m-0">{e.a}</p>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
}
export default FAQSection;
