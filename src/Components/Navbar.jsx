
import { Search, Bell, UserCircle } from "lucide-react";

function Navbar() {
  return (
    <header className="navbar">
      <div className="search-box">
        <Search size={18} />
        <input placeholder="Search anything..." />
      </div>

      <div className="navbar-right">
        <button className="notification-btn">
          <Bell size={20} />
          <span></span>
        </button>

        <div className="profile">
          <UserCircle size={35} />
          <div>
            <strong>Admin User</strong>
            <p>Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
