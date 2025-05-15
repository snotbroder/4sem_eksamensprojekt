function MenuCard({ menuData }) {
  const courseKeys = Object.keys(menuData).filter((key) => key.startsWith("course") && menuData[key]); //Filter gemmem menuData og fin objekter med "course"
  return (
    <article className="bg-beige border-8 border-darkbrown p-xs md:p-m w-90 md:w-[650px] md:h-[490px] flex flex-col gap-xs overflow-hidden">
      <header className="flex flex-col gap-xs">
        <div className={`h-50 md:h-30 bg-${menuData.bgColor} bg-[url('/Image_bank/food_2.svg')] bg-left`}></div>
        <p>{menuData.menuNote}</p>
      </header>
      <main className="border-b-2 border-darkbrown flex justify-between place-items-baseline">
        <h2>{menuData.menuTitle}</h2>
        <h4 className="italic">{menuData.price},-</h4>
      </main>
      <footer>
        <ul className="md:h-[130px] flex flex-col flex-wrap gap-xxs">
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
