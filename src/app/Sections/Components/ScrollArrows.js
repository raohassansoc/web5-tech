import { Arrow_Right } from "@/app/SVGS/Arrows";
import { useRef } from "react";

function ScrollArrows({ scrollRef }) {
  const handleScroll = (scrollIncrement) => {
    // console.log(scrollRef.current);
    const container = scrollRef.current;
    const scrollAmount = container?.children?.[0]?.clientWidth;

    if (scrollIncrement > 0) {
      container?.scrollBy({ left: scrollAmount, behavior: "smooth" });
    } else {
      container?.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="flex">
      <div
        className="p-5 opacity-[.50]"
        style={{
          transform: "rotateY(180deg)",
        }}
        onMouseDown={() => handleScroll(-1)}
        onTouchStart={() => handleScroll(-1)}
      >
        {Arrow_Right}
      </div>
      <div
        className="p-5"
        onMouseDown={() => handleScroll(1)}
        onTouchStart={() => handleScroll(1)}
      >
        {Arrow_Right}
      </div>
      {/* Add more child elements here */}
    </div>
  );
}

export default ScrollArrows;
