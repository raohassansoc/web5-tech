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




function RecentWorkCard({ recentWork }) {

  const { locale } = useLanguage();
  const t = translations[locale];

  return (
    <div className="border-y-2 border-l-2 border-[#353539] border-opacity-[0.6] ">
      <div className="flex gap-2 p-5">
        {recentWork.tags.map((e, i) => (
          <p key={i}>{e}</p>
        ))}
      </div>
      <div className="w-full h-[200px] p-[20px] recent-bg flex justify-center items-center ">
        <div className="workimage w-[290px] bg-gray-800 min-h-[165px]">
          <img src={recentWork.image} alt="..." />
        </div>
      </div>
      <div className="px-5">
        <h3>{recentWork.name}</h3>
        <p>{recentWork.description}</p>
      </div>
      <div>
        <p className="flex justify-center items-center gap-2 w-full p-3 text-center uppercase border-t-2 border-[#353539] border-opacity-[0.6]">{t?.recentCardButton} {Arrow_45}</p>
      </div>
    </div>
  );
}
export default RecentWorkCard;
