import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function RoleList() {

  const [roles, setRoles] = useState([]);
  const navigate = useNavigate();

  // fetch
  const fetchRoles = async () => {
    try {
      const res = await axios.get("http://localhost:3001/roles");
      setRoles(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // ✅ DELETE — OUTSIDE useEffect
  const handleDelete = async (id) => {
    if (!window.confirm("Delete role?")) return;

    try {
      await axios.delete(`http://localhost:3001/roles/${id}`);
      fetchRoles();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Roles</h2>

      {roles.map((r) => (
        <div key={r.id} style={{ marginBottom: 10 }}>
          {r.name}

          <button
            style={{ marginLeft: 10 }}
            onClick={() => navigate(`/edit-role/${r.id}`)}
          >
            Edit
          </button>

          <button
            style={{ marginLeft: 10 }}
            onClick={() => handleDelete(r.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default RoleList;