export default function Stats({ items }) {
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const average = Math.floor((packedItems * 100) / numItems);

  return (
    <p className="p-4 text-lg md:text-xl leading-9 text-zinc-700 font-sans text-center bg-green-300 font-bold">
      {average === 100
        ? "Ready to go ✈"
        : `You have ${numItems} item on your list , and you already packed
      ${packedItems}(%${numItems === 0 ? "0" : average})`}
    </p>
  );
}
