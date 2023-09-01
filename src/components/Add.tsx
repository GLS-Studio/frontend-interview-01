import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Add(props: {
  setItems: (items: string[]) => string[];
}) {
  const [currentItem, setCurrentItem] = useState("");
  return (
    <div>
      <span>Add new item</span>
      <input
        type="text"
        onChange={(e) => {
          setCurrentItem(e.target.value);
        }}
      />
      <button
        onClick={() => {
          props.setItems((items) => {
            return items.concat(currentItem);
          });
          setCurrentItem('')
        }}
      >
        Add
      </button>
    </div>
  );
}
