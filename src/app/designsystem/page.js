import Test from "../admin_components/Test";
import TestVisualizer from "../admin_components/TestVisualizer";

export default function admin_test() {
  return (
    <div className="mx-s md:mx-6xl">
      <h1 className="text-headline2-mobile md:text-headline2-desktop">
        Designsystem
      </h1>
      <h2 className="text-headline2-mobile md:text-headline2-desktop">
        Headline
      </h2>
      <h1 className="text-headline1-mobile md:text-headline1-desktop">H1</h1>
      <h2 className="text-headline2-mobile md:text-headline2-desktop">H2</h2>
      <h3 className="text-headline3-mobile md:text-headline3-desktop">H3</h3>
      <h1 className="text-headline4-mobile md:text-headline4-desktop">H4</h1>
      <h2 className="text-headline2-mobile md:text-headline2-desktop">
        Colours
      </h2>
      <h3 className="text-headline3-mobile md:text-headline3-desktop">
        Primary
      </h3>
      <article className="flex flex-wrap gap-xs">
        <div className="text-center">
          <div className="h-xl w-xl bg-primary-200"></div>
          <p>200</p>
        </div>
        <div className="text-center">
          <div className="h-xl w-xl bg-primary-300"></div>
          <p>300</p>
        </div>
        <div className="text-center">
          <div className="h-xl w-xl bg-primary-400"></div>
          <p>400</p>
        </div>
        <div className="text-center">
          <div className="h-xl w-xl bg-primary-500"></div>
          <p>500</p>
        </div>
        <div className="text-center">
          <div className="h-xl w-xl bg-primary-600"></div>
          <p>600</p>
        </div>
        <div className="text-center">
          <div className="h-xl w-xl bg-primary-700"></div>
          <p>700</p>
        </div>
        <div className="text-center">
          <div className="h-xl w-xl bg-primary-800"></div>
          <p>800</p>
        </div>
      </article>
    </div>
  );
}
