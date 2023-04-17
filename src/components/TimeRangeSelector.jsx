import React, { useState } from 'react';

function TimeRangeSelector({ options, onSelect }) {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  function handleOptionSelect(option) {
    setSelectedOption(option);
    onSelect(option);
  }

  return (
    <select value={selectedOption} onChange={(e) => handleOptionSelect(e.target.value)}>
      {options.map((option) => (
        <option key={option} value={option}>
          TimeRangeSelector
        </option>
      ))}
    </select>
  );
}

export default TimeRangeSelector;
