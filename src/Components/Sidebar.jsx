
import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  LogOut
} from "lucide-react";

function Sidebar({ onLogout }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">N</div>
        <h2>Nexicus</h2>
      </div>

      <p className="menu-label">MAIN MENU</p>

      <nav>
        <a className="nav-link active" href="#dashboard">
          <LayoutDashboard size={19} />
          Dashboard
        </a>

        <a className="nav-link" href="#users">
          <Users size={19} />
          Users
        </a>

        <a className="nav-link" href="#analytics">
          <BarChart3 size={19} />
          Analytics
        </a>

        <a className="nav-link" href="#settings">
          <Settings size={19} />
          Settings
        </a>
      </nav>

      <button className="logout-btn" onClick={onLogout}>
        <LogOut size={19} />
        Logout
      </button>
    </aside>
  );
}

export default Sidebar;
