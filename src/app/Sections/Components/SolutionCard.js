import { Arrow_45 } from "@/app/SVGS/Arrows";
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

function SolutionCard({ solution, index }) {

  const { locale } = useLanguage();
  const t = translations[locale];

  return (
    <div className="w-full flex flex-wrap border-[#353539] border-opacity-[0.3] border-t-2 border-l-2">
      <div className="flex-[.6]  flex flex-col justify-center min-w-[300px]  mx-auto pt-10 ">
        <div className="max-w-fit my-5">
          <h4 className="w-[60px] h-[60px] flex items-center justify-center numbers-bg">
            {index + 1}
          </h4>
        </div>
        <p className="text-[32px] ">{solution.name}</p>
        <p>{solution.description}</p>
      </div>
      <div className="flex-[.4] flex-col flex border-x-2 border-[#353539] border-opacity-[0.3] py-5 min-w-[300px]  mx-auto">
        
        {solution?.links?.map((e, i) => (
          <div
            key={i}
            className="text-right border-t-2 border-[#353539] border-opacity-[0.3] justify-end flex p-2"
          >
            <p className="flex-1 flex w-full items-center text-left m-0">{e.name}</p>
            <p className="flex-1 flex justify-center items-center gap-2 w-full p-3 text-center uppercase m-0">
              {t?.ViewLiveProject} <a href={e.link} target="_blank">{Arrow_45}</a> 
            </p>
          </div>
        ))}
        
      </div>
    </div>
  );
}
export default SolutionCard;
