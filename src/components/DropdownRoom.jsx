import React from "react";

function DropdownRoom({ options, onSelect }) {
  function handleOptionSelect(option) {
    onSelect(option);
  }

  return (
    <div className="drop-down-room">
      <select onChange={(e) => handleOptionSelect(e.target.value)}>
        {options.map((option) => (
          <option key={option} value={option}>
            Pollux
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropdownRoom;
