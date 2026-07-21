import Note from "./Note";

function NotesGrid({ notes, deleteNote, pinNote }) {

  return (
    <div className="notes-grid">

      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          deleteNote={deleteNote}
          pinNote={pinNote}
        />
      ))}

    </div>
  );
}

export default NotesGrid;