
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import StatCard from "../Components/StatCard";
import {
  Users,
  DollarSign,
  ShoppingCart,
  TrendingUp,
  ArrowUpRight
} from "lucide-react";

function Dashboard({ onLogout }) {
  return (
    <div className="dashboard-layout">
      <Sidebar onLogout={onLogout} />

      <main className="main-content">
        <Navbar />

        <div className="dashboard-heading">
          <div>
            <h1>Dashboard Overview</h1>
            <p>Welcome back! Here's what's happening today.</p>
          </div>
          <button className="date-btn">Last 30 Days</button>
        </div>

        <div className="stats-grid">
          <StatCard
            title="Total Revenue"
            value="$45,230"
            change="+12.5%"
            icon={<DollarSign />}
          />

          <StatCard
            title="Total Users"
            value="2,450"
            change="+8.2%"
            icon={<Users />}
          />

          <StatCard
            title="Total Orders"
            value="1,250"
            change="+15.3%"
            icon={<ShoppingCart />}
          />

          <StatCard
            title="Growth Rate"
            value="24.8%"
            change="+5.4%"
            icon={<TrendingUp />}
          />
        </div>

        <div className="content-grid">
          <div className="panel chart-panel">
            <h3>Revenue Overview</h3>
            <p>Monthly revenue performance</p>

            <div className="chart-placeholder">
              <div className="chart-bars">
                {[40, 65, 45, 80, 55, 90, 70, 100, 60, 85, 50, 75].map(
                  (height, index) => (
                    <div
                      key={index}
                      className="chart-bar"
                      style={{ height: `${height}%` }}
                    />
                  )
                )}
              </div>
            </div>
          </div>

          <div className="panel activity-panel">
            <h3>Recent Activity</h3>

            {[
              ["New user registered", "John Smith", "2 min ago"],
              ["New order received", "Order #1024", "15 min ago"],
              ["Payment completed", "$450.00", "1 hour ago"],
              ["New user registered", "Sarah Wilson", "3 hours ago"]
            ].map((item, index) => (
              <div className="activity-item" key={index}>
                <div className="activity-icon">
                  <ArrowUpRight size={18} />
                </div>
                <div>
                  <strong>{item[0]}</strong>
                  <p>{item[1]}</p>
                </div>
                <small>{item[2]}</small>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
