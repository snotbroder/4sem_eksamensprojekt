function Dashboard_pageName({ text }) {
  return (
    <div className="flex overflow-hidden pt-2 mb-sm gap-[-40px] md:gap-xs">
      <h1 className={`md:!text-[270px] text-darkbrown">{text} ${(text === "newsletter" || text === "bookings") && "!text-[85px] md:!text-[270px]"}`}>{text}</h1>
      <h1 className={`stroke-text opacity-30 md:!text-[270px] text-darkbrown">{text} ${(text === "newsletter" || text === "bookings") && "!text-[85px] md:!text-[270px]"}`}>{text}</h1>
      <h1 className={`stroke-text opacity-30 md:!text-[270px] text-darkbrown">{text} ${(text === "newsletter" || text === "bookings") && "!text-[85px] md:!text-[270px]"}`}>{text}</h1>
    </div>
  );
}

export default Dashboard_pageName;
