function Dashboard_pageName({ text }) {
  return (
    <div className="flex overflow-hidden pt-2 gap-[-40px] md:gap-[-60px]">
      <h1 className="md:!text-[270px] text-darkbrown">{text}</h1>
      <h1 className="md:!text-[270px] stroke-text">{text}</h1>
      <h1 className="md:!text-[270px] stroke-text">{text}</h1>
      <h1 className="md:!text-[270px] stroke-text">{text}</h1>
    </div>
  );
}

export default Dashboard_pageName;
