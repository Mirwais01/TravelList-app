export default function Items({ item }) {
  return (
    <li>
      <span className={`text-orange-200 ${item.packed ? "line-through" : ""}`}>
        <span>{item.quantity}</span>&nbsp;
        <span>{item.description}</span>
      </span>
      &nbsp;
      <span className="text-red-600 text-3xl cursor-pointer">&times;</span>
    </li>
  );
}
