import React, { useState } from "react";

function DropdownRoom({ options, onSelect }) {
  function handleOptionSelect(option) {
    onSelect(option);
  }

  return (
    <select onChange={(e) => handleOptionSelect(e.target.value)}>
      {options.map((option) => (
        <option key={option} value={option}>
          Pollux
        </option>
      ))}
    </select>
  );
}

export default DropdownRoom;
