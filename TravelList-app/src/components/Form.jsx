import { useState } from "react";

export default function Form() {
  // const [items, setItems] = useState();
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, id: Date.now(), packed: false };
    console.log(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <div className="p-12 flex flex-col md:flex-row justify-center items-center space-x-4 bg-amber-600">
      <h3 className="font-bold text-justify sm:text-xl md:text-2xl">
        What do you need for your trip?🎈
      </h3>
      <form action="" className="align-baseline" onSubmit={handleSubmit}>
        <select
          name=""
          id=""
          className="px-7 text-zinc-900 py-2 rounded-3xl bg-orange-200 mx-1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => {
            return <option key={i}>{i + 1}</option>;
          })}
        </select>
        <input
          className="px-7 py-2 mt-5 text-[17px] md:mt-0 rounded-3xl outline-none bg-orange-200"
          type="text"
          placeholder="Enter your items..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="px-7 py-2 rounded-3xl bg-green-400 ms-2 font-extrabold">
          ADD
        </button>
      </form>
    </div>
  );
}
