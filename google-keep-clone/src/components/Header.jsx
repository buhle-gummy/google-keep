import { HiOutlineMenu } from "react-icons/hi";
import { MdLightbulbOutline, MdDarkMode, MdLightMode } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";


function Header({ toggleMenu, toggleDarkMode, darkMode, searchQuery, onSearchChange }) {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-btn" onClick={toggleMenu}>
          <HiOutlineMenu size={28} />
        </button>

        <MdLightbulbOutline size={35} color="#F4B400" />

        <h2>Google Keep</h2>
      </div>

      <div className="header-center">
        {/* Controlled input: value comes from App state, onChange updates it live */}
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className="header-right">
        <button className="icon-btn" onClick={toggleDarkMode}>
          {darkMode ? (
            <MdLightMode size={24} />
          ) : (
            <MdDarkMode size={24} />
          )}
        </button>

        <button className="icon-btn">
          <IoSettingsOutline size={24} />
        </button>

        <button className="icon-btn">
          <FaRegCircleUser size={24} />
        </button>
      </div>
    </header>
  );
}

export default Header;



