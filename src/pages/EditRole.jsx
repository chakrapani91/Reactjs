import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditRole() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const navigate = useNavigate();

  // ✅ get single role
  const fetchRole = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/roles/${id}`);
      setName(res.data.name);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRole();
  }, []);

  // ✅ update role
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:3001/roles/${id}`, {
        name,
      });

      navigate("/roles");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Edit Role</h2>

      <form onSubmit={handleUpdate}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter role name"
        />

        <button style={{ marginLeft: 10 }}>Update</button>
      </form>
    </div>
  );
}

export default EditRole;