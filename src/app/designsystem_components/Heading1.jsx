export default function Headline1({ children, className = "" }) {
  return (
    <div className="">
      <h1 className="text-headline1-mobile md:text-headline1-desktop uppercase">
        {children}
      </h1>
    </div>
  );
}
