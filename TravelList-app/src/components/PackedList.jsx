import Items from "./Items";

export default function PackedList({
  items,
  handleDeleteItem,
  handleToggleItem,
}) {
  return (
    <div className="w-full pb-1 bg-orange-950 text-white">
      <div className="max-w-6xl mx-auto px-10 pt-12 mb-5 pb-4">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center gap-7 text-xl">
          {items.map((item) => (
            <Items
              item={item}
              key={item.id}
              handleToggleItem={handleToggleItem}
              handleDeleteItem={handleDeleteItem}
            />
          ))}
        </ul>
        {/* buttons container  */}
        <div className="flex flex-col md:space-x-4 space-y-3 md:space-y-0 md:flex-row md:max-w-sm md:mx-auto mt-20 md:mt-32 ">
          <select
            name=""
            id=""
            className="text-zinc-800 md:px-4 py-2 bg-orange-100 rounded-2xl text-center md:text-left"
          >
            <option value="Sort by Price">Sort by Price</option>
            <option value="">Sort by Name</option>
            <option value="">Sort by Quantity</option>
          </select>
          <button className="bg-orange-100 text-zinc-800 rounded-2xl px-12 py-2 hover:shadow-lg hover:scale-105">
            Clear list
          </button>
        </div>
      </div>
    </div>
  );
}
