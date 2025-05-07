export default function Body({ children, className = "" }) {
  return (
    <div className="">
      <p className="text-body-normal-mobile md:text-body-normal-desktop ">
        {children}
      </p>
    </div>
  );
}
