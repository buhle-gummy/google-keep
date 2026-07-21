import { useState } from "react";

function Note({ note, deleteNote, pinNote }) {

  return (
    <div className={`note ${note.pinned ? "pinned" : ""}`}>

      <h3>{note.title}</h3>

      <p>{note.text}</p>


      <button onClick={() => pinNote(note.id)}>
        📌 {note.pinned ? "Unpin" : "Pin"}
      </button>


      <button onClick={() => deleteNote(note.id)}>
        🗑 Delete
      </button>

    </div>
  );
}

export default Note;