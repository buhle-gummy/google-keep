import { useState, useEffect, useRef } from "react";
import "./App.css";

import Header from "./components/Header";
import NoteForm from "./components/NoteForm";
import NotesGrid from "./components/NotesGrid";

import Sidebar from "./components/Sidebar";

const STORAGE_KEY = "keep-notes";

function App() {

  const [notes, setNotes] = useState([]);
  const isInitialMount = useRef(true);

const [menuOpen, setMenuOpen] = useState(true);

const [currentView, setCurrentView] = useState("notes");

const [darkMode, setDarkMode] = useState(false);

  // Stores the current search text — updated live as the user types in the Header search bar
  const [searchQuery, setSearchQuery] = useState("");

  function addNote(note) {
    setNotes([...notes, note]);
  }

  

  function deleteNote(id) {
    const updatedNotes = notes.filter(
      (note) => note.id !== id
    );

    setNotes(updatedNotes);
  }


  function pinNote(id) {

    const updatedNotes = notes.map((note) =>
      note.id === id
        ? {
            ...note,
            pinned: !note.pinned
          }
        : note
    );

    setNotes(updatedNotes);
  }

function toggleMenu() {
  setMenuOpen(!menuOpen);
}

function toggleDarkMode() {
  setDarkMode(!darkMode);
}

  useEffect(() => {
    const savedNotes = localStorage.getItem(STORAGE_KEY);
    if (savedNotes) {
      try {
        setNotes(JSON.parse(savedNotes));
      } catch {
        // ignore invalid stored data
      }
    }
  }, []);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  // Checks whether a single note matches the search query (case-insensitive, title + content)
  function noteMatchesSearch(note) {
    // Empty search box → show every note (no filtering)
    if (!searchQuery.trim()) {
      return true;
    }

    const query = searchQuery.toLowerCase();
    const title = (note.title || "").toLowerCase();
    const text = (note.text || "").toLowerCase();

    // Match if the query appears in the title OR the note body
    return title.includes(query) || text.includes(query);
  }

  // Step 1: apply sidebar filter — "Pinned" shows only pinned notes;
  // "Notes" shows all notes with pinned ones listed first (existing behaviour)
  const viewFilteredNotes =
    currentView === "pinned"
      ? notes.filter((note) => note.pinned)
      : [
          ...notes.filter((note) => note.pinned),
          ...notes.filter((note) => !note.pinned),
        ];

  // Step 2: apply live search on top of the sidebar filter — re-runs on every keystroke
  const displayedNotes = viewFilteredNotes.filter(noteMatchesSearch);


  return (
   <div
  className={darkMode ? "app dark" : "app"}
  style={{
    marginLeft: menuOpen ? "250px" : "80px",
    transition: "margin-left 0.3s ease"
  }}
>

      <Header
  toggleMenu={toggleMenu}
  toggleDarkMode={toggleDarkMode}
  darkMode={darkMode}
  searchQuery={searchQuery}
  onSearchChange={setSearchQuery}
/>
      <Sidebar
  menuOpen={menuOpen}
  currentView={currentView}
  setCurrentView={setCurrentView}
/>

      <NoteForm addNote={addNote} />

      <NotesGrid
    notes={displayedNotes}
  deleteNote={deleteNote}
  pinNote={pinNote}
/>

    </div>
  );
}


export default App;