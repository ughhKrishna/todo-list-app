/* eslint-disable react/prop-types */
import { useState } from "react";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { TaskList } from "./components/TaskList";

function App() {
  const [items, setItems] = useState([]);

  const [editItem, setEditItem] = useState(false);

  function onAddItems(newItem) {
    setItems((i) => [...i, newItem]);
  }

  function onDeleteItems(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function onClearItems() {
    setItems([]);
  }

  function onToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  }

  function onEditItem(id, note) {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, note: note };
        } else {
          return item;
        }
      })
    );
  }

  return (
    <div>
      <div className="main-container">
        <Header></Header>
        <Input onAddItems={onAddItems} />
        <TaskList
          items={items}
          onDeleteItems={onDeleteItems}
          onClearItems={onClearItems}
          onEditItem={onEditItem}
          onToggleItem={onToggleItem}
          editItem={editItem}
          setEditItem={setEditItem}
        />
      </div>
    </div>
  );
}

export default App;
