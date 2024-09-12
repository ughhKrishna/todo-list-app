import { useState } from "react";

export function Input({ onAddItems }) {
  let newItems;
  const [description, setDescription] = useState("");
  const [intensity, setIntensity] = useState(1);

  function handleSubmit() {
    if (!description && !intensity) return;

    newItems = {
      id: Date.now(),
      description: description,
      intensity: intensity,
      note: "",
      done: false,
    };

    console.log(newItems);

    onAddItems(newItems);

    setDescription("");
    setIntensity(1);
  }
  return (
    <>
      <div className="input-container">
        <select
          defaultValue={intensity}
          onChange={(e) => setIntensity(Number(e.target.value))}
        >
          <option value="1">Easy</option>
          <option value="2">Medium</option>
          <option value="3">Hard</option>
        </select>

        <input
          placeholder="Enter your task"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button onClick={handleSubmit}>Add</button>
      </div>
    </>
  );
}
