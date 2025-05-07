export default function Headline2({ children, className = "" }) {
  return (
    <div className="">
      <h2 className="text-headline2-mobile md:text-headline2-desktop uppercase italic">
        {children}
      </h2>
    </div>
  );
}
