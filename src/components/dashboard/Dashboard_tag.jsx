function Dashboard_tag({ content, bgColor }) {
  return (
    <div className={`border-[1.5px] border-darkbrown rounded-sm p-[5px] w-fit ${bgColor != "" ? `bg-${bgColor}` : ""}`}>
      <p className="font-bold">{content == false ? "No content" : content}</p>
    </div>
  );
}

export default Dashboard_tag;
