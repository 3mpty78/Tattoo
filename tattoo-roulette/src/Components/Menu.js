import { useState } from "react";

export default function Styles() {
  const [name, setName] = useState("New School");
  const result = name;

  function handleNameChange(e) {
    setName(e.target.value);
  }
  return (
    <>
      <label>
        Choisis ton style :
        <select value={name} onChange={handleNameChange}>
          <option value="New School">New School</option>
          <option value="Old School">Old School</option>
          <option value="Japonais">Japonais</option>
          <option value="3D">3D</option>
        </select>
      </label>
      <p>T'as choisis {result}</p>
      <button>Valider</button>
    </>
  );
}
