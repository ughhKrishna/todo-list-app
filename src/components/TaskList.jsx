/* eslint-disable react/prop-types */
import { useState } from "react";
import { Edit } from "./Edit";

export function TaskList({
  items,
  onDeleteItems,
  onClearItems,
  onEditItem,
  onToggleItem,
  editItem,
  setEditItem,
}) {
  const [sortBy, setSortBy] = useState("input");
  const [selectedItem, setSelectedItem] = useState("");
  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "intensity")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(b.intensity) - Number(a.intensity));

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  function handleEditItem(item) {
    setEditItem(true);
    setSelectedItem(item);
  }

  return (
    <div>
      <div>
        <ul>
          {sortedItems.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                value={item.done}
                onChange={() => onToggleItem(item.id)}
                className="checkbox-input"
              />
              <span
                className="text"
                style={item.done ? { textDecoration: "line-through" } : {}}
              >
                {item.description}
              </span>
              <button className="d-btn" onClick={() => onDeleteItems(item.id)}>
                ❌
              </button>
              <button className="e-btn" onClick={() => handleEditItem(item)}>
                🖊️
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        {editItem && (
          <Edit
            item={selectedItem}
            setEditItem={setEditItem}
            onEditItem={onEditItem}
            editItem={editItem}
          />
        )}
      </div>
      <div className="active-button">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">input</option>
          <option value="intensity">intensity</option>
          <option value="description">description</option>
        </select>

        <button onClick={onClearItems}>Clear List</button>
      </div>
    </div>
  );
}
