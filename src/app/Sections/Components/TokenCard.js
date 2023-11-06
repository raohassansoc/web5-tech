const { Short_Arrow } = require("@/app/SVGS/Arrows");

function TokenCard({ card }) {
  return (
    <div>
      <div className="flex justify-between items-center min-w-[290px] ">
        <div className="w-fit flex justify-center items-center">
          <div className="p-2">
            {card.icon}
            </div>
          <div>
            <h5 className="m-0">{card.short_name}</h5>
            <p className="m-0 uppercase">{card.name}</p>
          </div>
        </div>
        <div className="m-0">{Short_Arrow}</div>
      </div>
      <div className="p-5 bg-[#1A1724] rounded-lg">
        <p className="text-[24px] p-5 m-0">0.00537</p>
        <p className="px-5 m-0">~$2,930.00</p>
      </div>
    </div>
  );
}

export default TokenCard