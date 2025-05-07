export default function Headline3({ children, className = "" }) {
  return (
    <div className="">
      <h3 className="text-headline3-mobile md:text-headline3-desktop uppercase">
        {children}
      </h3>
    </div>
  );
}
