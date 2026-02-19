import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { useEffect, useState } from "react";
import api from "../api/axios";

function Dashboard() {

  const [stats, setStats] = useState({
    users: 0,
    orders: 0,
    revenue: 0
  });

  // ✅ API call
  useEffect(() => {
    api.get("/dashboard")
      .then(res => setStats(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Topbar />

        <div style={{ padding: 20 }}>
          <h2>Dashboard Overview</h2>

          {/* Cards */}
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ padding: 20, background: "#eee" }}>
              Users: {stats.users}
            </div>

            <div style={{ padding: 20, background: "#eee" }}>
              Orders: {stats.orders}
            </div>

            <div style={{ padding: 20, background: "#eee" }}>
              Revenue: {stats.revenue}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;