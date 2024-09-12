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
    <div className="w-full mx-auto p-12 flex flex-col md:flex-row justify-center items-center md:space-x-4 bg-amber-600">
      <h3 className="font-bold text-xl max-w-md text-center">
        What do you need for your trip?🎈
      </h3>

      <form action="" className="align-baseline" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 mt-4 md:mt-0 pt-3 md:pt-0">
          <select
            name=""
            id=""
            className="text-zinc-900 bg-orange-100 outline-0 text-center rounded-lg md:py-2 md:px-4 md:rounded-3xl"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          >
            {Array.from({ length: 20 }, (_, i) => {
              return <option key={i}>{i + 1}</option>;
            })}
          </select>
          <input
            className="px-7 py-1 mt-5 text-[17px] md:mt-0 rounded-lg md:rounded-3xl outline-none bg-orange-100"
            type="text"
            placeholder="Enter your items..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="py-1 md:py-3 md:px-6 md:rounded-3xl text-xl rounded-lg bg-green-400 text-zinc-900 font-bold hover:shadow-lg hover:-translate-y-1 hover:duration-300">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
