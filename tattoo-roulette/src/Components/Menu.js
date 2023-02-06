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
          <option value="3D">3D</option>
          <option value="Abstrait">Abstrait</option>
          <option value="Biomécanique">Biomécanique</option>
          <option value="Blackwork">Blackwork</option>
          <option value="Caligraphie">Caligraphie</option>
          <option value="Cartoon">Cartoon</option>
          <option value="Géométrique">Géométrique</option>
          <option value="Japonais">Japonais</option>
          <option value="New School">New School</option>
          <option value="Noir et Gris">Noir et Gris</option>
          <option value="Old School">Old School</option>
          <option value="Polynésien">Polynésien</option>
          <option value="Portrait">Portrait</option>
          <option value="Réaliste">Réaliste</option>
          <option value="Stick N' Poke">Stick N' Poke</option>
          <option value="Trash Polka">Trash Polka</option>
          <option value="Tribal">Tribal</option>
        </select>
      </label>
      <button>{name}</button>
    </>
  );
}
