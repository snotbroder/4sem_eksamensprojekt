function MenuCard({ menuData }) {
  const courseKeys = Object.keys(menuData).filter(
    (key) => key.startsWith("course") && menuData[key]
  ); //Filter gemmem menuData og fin objekter med "course"
  return (
    <article className="bg-beige p-xs md:p-m w-100 md:w-[650px] md:h-[490px] flex flex-col gap-xs overflow-hidden bg-[url('/Image_bank/illustrations/frame-vector-vertical.svg')] md:bg-[url('/Image_bank/illustrations/frame-vector.svg')] bg-no-repeat bg-cover">
      <header className="flex flex-col gap-xs m-xs">
        <div
          className={`h-50 md:h-30 bg-${menuData.bgColor} bg-[url('/Image_bank/illustrations/foodandwine2_darkbrown.svg')] bg-left md:bg-cover border-2 border-darkbrown`}
        ></div>
        <span>
          <strong>Menu note:</strong>
          <p>{menuData.menuNote}</p>
        </span>
      </header>
      <main className="border-b-2 mx-xs border-darkbrown flex justify-between place-items-baseline">
        <h2>{menuData.menuTitle}</h2>
        <h4 className="italic">{menuData.price},-</h4>
      </main>
      <footer>
        <ul className="mx-xs md:h-[130px] flex flex-col flex-wrap gap-xxs">
          {courseKeys.length > 0 ? (
            courseKeys.map((key, index) => (
              <li className="capitalize" key={key}>
                <strong>{++index}.</strong> {menuData[key]}
              </li>
            ))
          ) : (
            <p>Fejl: Ingen items på menuen</p>
          )}
        </ul>
      </footer>
    </article>
  );
}
export default MenuCard;
