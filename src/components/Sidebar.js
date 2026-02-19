import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={{ width: 200, background: "#eee", height: "100vh", padding: 20 }}>
      <h3>Admin</h3>

      <div><Link to="/">Dashboard</Link></div>
      <div><Link to="/users">Users</Link></div>
    </div>
  );
}

export default Sidebar;