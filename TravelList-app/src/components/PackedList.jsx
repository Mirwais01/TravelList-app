import Items from "./Items";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Bags", quantity: 14, packed: true },
  { id: 3, description: "Bags", quantity: 14, packed: true },
];

export default function PackedList() {
  return (
    <div className="w-full pb-12 bg-orange-950 text-white">
      <div className="max-w-6xl mx-auto px-10 pt-12">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center gap-7 text-2xl">
          {initialItems.map((el) => (
            <Items item={el} key={el.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}
