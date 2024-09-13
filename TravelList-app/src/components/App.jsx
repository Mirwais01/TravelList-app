import "../index.css";
import Logo from "./Logo";
import Form from "./Form";
import PackedList from "./PackedList";
import Stats from "./Stats";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems(() => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function onDeleteList() {
    setItems([]);
  }

  return (
    <div>
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackedList
        items={items}
        handleDeleteItem={handleDeleteItem}
        handleToggleItem={handleToggleItem}
        onDeleteList={onDeleteList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
