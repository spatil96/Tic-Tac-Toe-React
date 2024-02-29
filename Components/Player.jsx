import { useState } from "react";
export default function Player({ initalName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initalName);
  function handleEditClick() {
    // setIsEditing(isEditing ? false : true); //or
    //setIsEditing(!isEditing); //or
    setIsEditing((editing) => !editing);
  }
  function handleChange(event) {
    console.log(event);
    setPlayerName(event.target.value);
  }
  let editablePlayerName = <span className="player-name">{playerName}</span>;
  //let btnCaption = "Edit";
  if (isEditing) {
    editablePlayerName = (
      <input type="text" value={playerName} required onChange={handleChange} />
    );
    //btnCaption = "Save";
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
