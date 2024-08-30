export default function Items({ item }) {
  return (
    <li>
      {item.description} <span>&times;</span>
    </li>
  );
}
