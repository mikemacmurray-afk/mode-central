import React, { useState } from 'react';

export default function ModeCentral() {
  const [modes, setModes] = useState([]);
  const [activeMode, setActiveMode] = useState(null);

  // Example UI and logic
  const addMode = () => {
    const newMode = prompt("Enter mode name:");
    if (newMode) setModes([...modes, newMode]);
  };

  return (
    <div>
      <h1>Mode Central</h1>
      <button onClick={addMode}>Add Mode</button>
      <ul>
        {modes.map((mode, i) => (
          <li key={i}>
            <button onClick={() => setActiveMode(mode)}>
              {mode} {activeMode === mode ? "(Active)" : ""}
            </button>
          </li>
        ))}
      </ul>
      {activeMode && <p>Current Active Mode: {activeMode}</p>}
    </div>
  );
}
