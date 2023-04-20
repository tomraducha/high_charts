import React from "react";

function DropdownRoom({ onSelect }) {
  function handleOptionSelect(option) {
    onSelect(option);
  }

  return (
    <div className="drop-down-room">
      <select onChange={(e) => handleOptionSelect(e.target.value)}>
        <option value="Pollux">Pollux</option>
        <option value="Sirius">Sirius</option>
        <option value="Proxima">Proxima</option>
        <option value="Scuti">Scuti</option>
      </select>
    </div>
  );
}

export default DropdownRoom;
