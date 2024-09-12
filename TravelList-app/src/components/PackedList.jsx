import Items from "./Items";

export default function PackedList({
  items,
  handleDeleteItem,
  handleToggleItem,
}) {
  return (
    <div className="w-full pb-12 bg-orange-950 text-white">
      <div className="max-w-6xl mx-auto px-10 pt-12">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center gap-7 text-2xl">
          {items.map((item) => (
            <Items
              item={item}
              key={item.id}
              handleToggleItem={handleToggleItem}
              handleDeleteItem={handleDeleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
