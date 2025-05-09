function Dashboard_card() {
  return (
    <article className="bg-[#F9F9F9] w-[360px] h-auto p-sm rounded-md shadow-lg">
      <ul className="flex flex-col gap-s">
        <li className="flex gap-s items-center">
          {/* Husk at fjerne text-size tailwindcss fra h1 element */}
          <h1 className="text-3xl">Dashboard card</h1>
          <h1>icon</h1>
        </li>
        <li>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi libero iusto ad quisquam molestiae hic, unde veniam omnis reiciendis nam!</p>
        </li>
        <li className="w-full border-2 border-gray-500">
          <button className="text-center p-xxs">Button text</button>
        </li>
      </ul>
    </article>
  );
}

export default Dashboard_card;
