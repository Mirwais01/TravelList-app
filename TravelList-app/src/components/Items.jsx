export default function Items({ item, handleToggleItem, handleDeleteItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => handleToggleItem(item.id)}
        className="m-2 w-4 h-4"
      />
      <span className={`text-orange-100 ${item.packed ? "line-through" : ""}`}>
        <span>{item.quantity}</span>&nbsp;
        <span>{item.description}</span>
      </span>
      &nbsp;
      <span
        className="text-red-600 text-3xl cursor-pointer"
        onClick={() => handleDeleteItem(item.id)}
      >
        &times;
      </span>
    </li>
  );
}
