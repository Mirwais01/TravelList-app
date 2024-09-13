import { useState } from "react";
import Items from "./Items";

export default function PackedList({
  items,
  handleDeleteItem,
  handleToggleItem,
  onDeleteList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortItems;

  if (sortBy === "input") sortItems = items;

  if (sortBy === "description")
    sortItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="w-full pb-1 bg-orange-950 text-white">
      <div className="max-w-6xl mx-auto px-10 pt-12 mb-5 pb-4">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center gap-7 text-xl">
          {sortItems.map((item) => (
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
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-zinc-800 md:px-4 py-2 bg-orange-100 rounded-2xl text-center md:text-left"
          >
            <option value="input">Sort by input Order</option>
            <option value="description">Sort by Description</option>
            <option value="packed">Sort by packed status</option>
          </select>
          <button
            onClick={() => onDeleteList()}
            className="bg-orange-100 text-zinc-800 rounded-2xl px-6 py-2 hover:shadow-lg hover:scale-105"
          >
            Clear list
          </button>
        </div>
      </div>
    </div>
  );
}
