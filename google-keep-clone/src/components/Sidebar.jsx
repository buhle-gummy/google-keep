import { MdOutlineStickyNote2, MdPushPin } from "react-icons/md";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { FiTrash2 } from "react-icons/fi";
import { useState } from "react";




function Sidebar({ menuOpen, currentView, setCurrentView }) {
  return (
    <aside className={menuOpen ? "sidebar expanded" : "sidebar collapsed"}>
      <ul>

        <li
          className={currentView === "notes" ? "active" : ""}
          onClick={() => setCurrentView("notes")}
        >
          <MdOutlineStickyNote2 size={24} />
          {menuOpen && <span>Notes</span>}
        </li>

        <li
          className={currentView === "pinned" ? "active" : ""}
          onClick={() => setCurrentView("pinned")}
        >
          <MdPushPin size={24} />
          {menuOpen && <span>Pinned</span>}
        </li>

        <li>
          <IoNotificationsOutline size={24} />
          {menuOpen && <span>Reminders</span>}
        </li>

        <li>
          <FiTrash2 size={24} />
          {menuOpen && <span>Trash</span>}
        </li>

        <li>
          <IoSettingsOutline size={24} />
          {menuOpen && <span>Settings</span>}
        </li>

      </ul>
    </aside>
  );
}

export default Sidebar;

