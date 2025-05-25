function Dashboard_statusTag({ status }) {
  const statusStyle = {
    pending: "bg-pending",
  };
  return (
    <div className={`border-[1.5px] ${statusStyle} rounded-sm p-[5px] w-fit}`}>
      <span className="font-bold">{status == false ? "No content" : status}</span>
    </div>
  );
}

export default Dashboard_statusTag;
