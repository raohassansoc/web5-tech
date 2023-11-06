import Image from "next/image";
import RecentWorkCard from "./Components/RecentWorkCard";
import { Arrow_Right } from "../SVGS/Arrows";

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


function Process(params) {
  const { locale } = useLanguage();
  const t = translations[locale];

  return (
    <div className="w-[95%] m-auto relative z-10 ">
      <h3 className="max-w-full uppercase styled-border styled-border1 m-auto lg:m-0 md:m-0 sm:m-0">
        {t?.TitleProcess}
      </h3>
      <div
        className="w-full"
        style={{
          background: "rgba(0,0,0,.1)",
          backdropFilter: "blur(24px)",
        }}
      >
        <div
          className="grid grid-cols-2 p-8 w-[90%] m-auto max-w-[800px] min-w-[300px]"
          style={{ gridColumnGap: 0, gridRowGap: 0 }}
        >
          <div className="w-full my-2">
            <p className="uppercase text-[10px] m-0 border-t-2 border-x-2 border-[#353539] border-opacity-[.7] w-fit px-2">
              {t?.ProcessStep1}
            </p>
            <h3 className=" border-y-2 border-l-2 border-[#353539] border-opacity-[.7] text-center m-0 p-2">
              {t?.ProcessResearch}
            </h3>
          </div>
          <div className="w-full ml-5 my-2">
            <p className="uppercase text-[10px] m-0 border-t-2 border-x-2 border-[#353539] border-opacity-[.7] w-fit px-2">
            {t?.ProcessStep2}
            </p>
            <h3 className=" border-2  border-[#353539] border-opacity-[.7] text-center m-0 p-2">
            {t?.ProcessIdeate}
            </h3>
          </div>
          <div className="w-full my-5">
            <p className="uppercase text-[10px] m-0 border-t-2 border-x-2 border-[#353539] border-opacity-[.7] w-fit px-2">
            {t?.ProcessStep3}
            </p>
            <h3 className=" border-y-2 border-l-2 border-[#353539] border-opacity-[.7] text-center m-0 p-2">
            {t?.ProcessPrototype}
            </h3>
          </div>
          <div className="w-full ml-5 my-5">
            <p className="uppercase text-[10px] m-0 border-t-2 border-x-2 border-[#353539] border-opacity-[.7] w-fit px-2">
            {t?.ProcessStep4}
            </p>
            <h3 className=" border-2 border-[#353539] border-opacity-[.7] text-center m-0 p-2">
            {t?.ProcessTest}
            </h3>
          </div>
        </div>

        <div
          className="flex hide-scrollbar1 gap-y-5 w-full overflow-x-auto"
          style={{
            background: "rgba(0,0,0,.1)",
            backdropFilter: "blur(24px)",
          }}
        ></div>
      </div>
    </div>
  );
}
export default Process;
