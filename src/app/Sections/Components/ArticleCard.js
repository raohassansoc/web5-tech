import { Arrow_45 } from "@/app/SVGS/Arrows";

function ArticleCard({ article }) {
  return (
    <div className="border-y-2 border-x-2 border-[#353539] border-opacity-[0.6] ">
      <div className="flex gap-2 p-5">
        <p>{article.date}</p>
      </div>

      <div className="w-full h-[200px] p-[20px] recent-bg flex justify-center items-center ">
        <div className="workimage w-[290px] bg-gray-800 min-h-[165px]">
          <img src={article.image} alt=".."/>
        </div>
      </div>
      <div className="px-5">
        <p>{article.description}</p>
      </div>
      <div className="flex items-center gap-2 w-full p-6">
        <div className="w-[32px] h-[32px] rounded-full  bg-[#524E65]"></div>
        <p className="uppercase m-0">
          <span className="text-[#524E65]">BY</span> {article.author}
        </p>
      </div>
    </div>
  );
}
export default ArticleCard;
