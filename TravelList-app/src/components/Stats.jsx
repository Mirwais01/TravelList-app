export default function Stats({ items }) {
  return (
    <p className="p-4 text-lg md:text-xl leading-9 text-zinc-700 font-sans text-center bg-green-300 font-bold">
      You have {items.length} item on your list , and you already packed X(%X)
    </p>
  );
}
