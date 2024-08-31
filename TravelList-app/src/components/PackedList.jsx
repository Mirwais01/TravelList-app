import Items from "./Items";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Bags", quantity: 14, packed: true },
  { id: 3, description: "Bags", quantity: 14, packed: true },
  { id: 3, description: "Bags", quantity: 14, packed: true },
  { id: 3, description: "Bags", quantity: 14, packed: true },
];

export default function PackedList() {
  return (
    <div className="p-5 h-80 bg-orange-950 text-white flex justify-center">
      <ul className="text-2xl text-center flex space-x-32">
        {initialItems.map((el) => (
          <Items item={el} key={el.id} />
        ))}
      </ul>
    </div>
  );
}
