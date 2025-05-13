function MenuCard() {
  return (
    <article className="bg-secondary-200 flex flex-col justify-between w-full m-xs p-s lg:m-ml  place-items-end">
      <div className="w-full place-items-end grid gap-xxs">
        <hr className="w-full fill-darkbrown"></hr>
        <h2>Menu title</h2>
        <hr className="w-full fill-darkbrown"></hr>
        <div className=" w-full flex flex-row justify-between">
          <h3 className="stroke-text">Amount of servings</h3>
          <h3 className="price">xDKK</h3>
        </div>
        <p>note</p>
      </div>
      <div className="">
        <p>serving 1</p>
        <p>serving 2</p>
        <p>serving 3</p>
        <p>serving 4</p>
        <p>serving 5</p>
        <p>serving 6</p>
        <p>serving 7</p>
      </div>
    </article>
  );
}
export default MenuCard;
