/* eslint-disable react/prop-types */
import { useState } from "react";

export function Edit({ item, setEditItem, onEditItem, editItem }) {
  let difficulty;
  const [notes, setNotes] = useState(item.notes);
  if (item.intensity === 1) difficulty = "easy";
  if (item.intensity === 2) difficulty = "medium";
  if (item.intensity === 3) difficulty = "hard";

  function handleCloseItem() {
    setEditItem(false);
  }

  function handleSaveItem() {
    onEditItem(item.id, notes);
    console.log(item.id, notes);
    setEditItem(false);
  }

  return (
    <div className="popup-container">
      <div className={editItem ? "popup-box" : ""}>
        <div className="top-popup">
          <p>{item.description}</p>
          <p>{difficulty}</p>
          <button onClick={handleCloseItem}>X</button>
        </div>

        <div className="text-container">
          <textarea
            placeholder="Add notes to your task"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          >
            {item.note}
          </textarea>
        </div>

        <div className="save-container">
          <button onClick={handleSaveItem}>Save</button>
        </div>
      </div>
    </div>
  );
}
