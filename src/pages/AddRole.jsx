import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddRole() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3001/roles", {
        name: name,
      });

      navigate("/roles"); // save ayyaka list ki back
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Add Role</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter role name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default AddRole;