import { useState } from "react";

import {
  MdOutlinePalette,
  MdOutlineImage,
  MdOutlineArchive,
  MdOutlineMoreVert,
  MdPushPin
} from "react-icons/md";

import { IoNotificationsOutline } from "react-icons/io5";

import { FaUserPlus } from "react-icons/fa6";

function NoteForm({ addNote }) {

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [expanded, setExpanded] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const newNote = {
      id: Date.now(),
      title,
      text
    };

    addNote(newNote);

    setTitle("");
setText("");
setExpanded(false);
  }


  return (
    <form 
      className="note-form"
      onSubmit={handleSubmit}
    >

      {expanded && (
  <input
    type="text"
    placeholder="Title"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
  />
)}


      <textarea
  placeholder="Take a note..."
  value={text}
  onClick={() => setExpanded(true)}
  onChange={(e) => setText(e.target.value)}
/>


      {expanded && (
  
    <div className="note-footer">

  <div className="note-toolbar">

    <button type="button" className="tool-btn">
      <MdOutlinePalette />
    </button>

    <button type="button" className="tool-btn">
      <IoNotificationsOutline />
    </button>

    <button type="button" className="tool-btn">
      <FaUserPlus />
    </button>

    <button type="button" className="tool-btn">
      <MdOutlineImage />
    </button>

    <button type="button" className="tool-btn">
      <MdOutlineArchive />
    </button>

    <button type="button" className="tool-btn">
      <MdOutlineMoreVert />
    </button>

    <button type="button" className="tool-btn">
      <MdPushPin />
    </button>

  </div>

  <div className="note-actions">

    <button type="submit">
      Add Note
    </button>

    <button
      type="button"
      onClick={() => setExpanded(false)}
    >
      Close
    </button>

  </div>

</div>
  
)}

    </form>
  );
}

export default NoteForm;