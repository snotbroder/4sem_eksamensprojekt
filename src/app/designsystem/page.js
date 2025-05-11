import Button from "../button_components/Button";
export default function designsystem() {
  return (
    <div className="mx-s md:mx-6xl grid gap-ml py-xl overflow-hidden">
      <h1 className=" break-all ">designsystem</h1>
      <hr className=""></hr>
      {/* headings */}
      <article>
        <h2 className="">Headings</h2>
        <h1>heading1</h1>
        <h2>heading2</h2>
        <h3>heading3</h3>
        <h4>heading4</h4>
        <p>
          Body text - Regular Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </article>

      {/* colours */}
      <article>
        <h2> Colours</h2>
        {/* primary */}
        <h3>primary</h3>
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
        {/* secondary */}
        <h3>secondary</h3>
        <article className="flex flex-wrap gap-xs">
          <div className="text-center">
            <div className="h-xl w-xl bg-secondary-200"></div>
            <p>200</p>
          </div>
          <div className="text-center">
            <div className="h-xl w-xl bg-secondary-300"></div>
            <p>300</p>
          </div>
          <div className="text-center">
            <div className="h-xl w-xl bg-secondary-400"></div>
            <p>400</p>
          </div>
          <div className="text-center">
            <div className="h-xl w-xl bg-secondary-500"></div>
            <p>500</p>
          </div>
          <div className="text-center">
            <div className="h-xl w-xl bg-secondary-600"></div>
            <p>600</p>
          </div>
          <div className="text-center">
            <div className="h-xl w-xl bg-secondary-700"></div>
            <p>700</p>
          </div>
          <div className="text-center">
            <div className="h-xl w-xl bg-secondary-800"></div>
            <p>800</p>
          </div>
        </article>
        {/* neutral */}
        <h3>Neutral</h3>
        <article className="flex flex-wrap gap-xs">
          <div className="text-center">
            <div className="h-xl w-xl bg-beige "></div>
            <p>Beige</p>
          </div>
          <div className="text-center">
            <div className="h-xl w-xl bg-darkbrown"></div>
            <p>Dark Brown</p>
          </div>
        </article>
        {/* status */}
        <article className="">
          <h3>Status</h3>
          <article className="flex flex-wrap gap-xs">
            <div className="text-center">
              <div className="h-xl w-xl bg-succes"></div>
              <p>Success</p>
            </div>
            <div className="text-center">
              <div className="h-xl w-xl bg-cancel"></div>
              <p>Cancel</p>
            </div>
            <div className="text-center">
              <div className="h-xl w-xl bg-configure"></div>
              <p>Configure</p>
            </div>
            <div className="text-center">
              <div className="h-xl w-xl bg-danger"></div>
              <p>Danger</p>
            </div>
          </article>
        </article>
      </article>

      {/* spacing */}
      <article className="">
        <h2> spacing</h2>
        <article className="flex flex-wrap gap-xs">
          <div className="text-center">
            <div className="h-xl w-xxs bg-primary-500"></div>
            <p>xxs</p>
          </div>
          <div className="text-center">
            <div className="h-xl w-xs bg-primary-500"></div>
            <p>xs</p>
          </div>
          <div className="text-center">
            <div className="h-xl w-s bg-primary-500"></div>
            <p>s</p>
          </div>
          <div className="text-center">
            <div className="h-xl w-sm bg-primary-500"></div>
            <p>sm</p>
          </div>
          <div className="text-center">
            <div className="h-xl w-m bg-primary-500"></div>
            <p>m</p>
          </div>
          <div className="text-center">
            <div className="h-xl w-ml bg-primary-500"></div>
            <p>ml</p>
          </div>
          <div className="text-center">
            <div className="h-xl w-lg bg-primary-500"></div>
            <p>lg</p>
          </div>
          <div className="text-center">
            <div className="h-xl w-xl bg-primary-500"></div>
            <p>xl</p>
          </div>
          <div className="text-center">
            <div className="h-xl w-2xl bg-primary-500"></div>
            <p>2xl</p>
          </div>
          <div className="text-center">
            <div className="h-xl w-3xl bg-primary-500"></div>
            <p>3xl</p>
          </div>
          <div className="text-center">
            <div className="h-xl w-4xl bg-primary-500"></div>
            <p>4xl</p>
          </div>
          <div className="text-center">
            <div className="h-xl w-5xl bg-primary-500"></div>
            <p>5xl</p>
          </div>
          <div className="text-center">
            <div className="h-xl w-6xl bg-primary-500"></div>
            <p>6xl</p>
          </div>
          <div className="text-center">
            <div className="h-xl w-7xl bg-primary-500"></div>
            <p>7xl</p>
          </div>
          <div className="text-center">
            <div className="h-xl w-8xl bg-primary-500"></div>
            <p>8xl</p>
          </div>
          <div className="text-center">
            <div className="h-xl w-9xl bg-primary-500"></div>
            <p>9xl</p>
          </div>
        </article>
      </article>
      <article>
        <h2>Buttons</h2>
        <article className="flex flex-wrap gap-xs">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="forms">Forms</Button>
          <Button variant="cta">Cta</Button>
        </article>
      </article>
    </div>
  );
}
