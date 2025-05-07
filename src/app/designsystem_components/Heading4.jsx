export default function Headline4({ children, className = "" }) {
  return (
    <div className="">
      <h4 className="text-headline4-mobile md:text-headline4-desktop uppercase">
        {children}
      </h4>
    </div>
  );
}
