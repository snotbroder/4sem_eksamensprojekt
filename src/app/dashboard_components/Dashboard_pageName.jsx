function Dashboard_pageName({ text }) {
  return (
    <span className="flex overflow-clip pt-2 ">
      <h1 className=" md:!text-[270px] mr-xxs">{text}</h1> <h1 className=" md:!text-[270px] text-stroke-1 text-stroke-red-500">{text}</h1>
    </span>
  );
}

export default Dashboard_pageName;
