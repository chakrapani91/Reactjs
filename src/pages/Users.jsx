import { useEffect, useState } from "react";
import api from "../api/axios";

function Users() {

  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    api.get("/users")
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  }, []);

  const deleteUser = (id) => {
    setUsers(users.filter(u => u.id !== id));
  };

  const editUser = (user) => {
    setName(user.name);
    setEditingId(user.id);
  };

  const addUser = () => {
    if (!name) return;

    if (editingId) {
      setUsers(users.map(u =>
        u.id === editingId ? { ...u, name } : u
      ));
      setEditingId(null);
    } else {
      const newUser = {
        id: users.length + 1,
        name
      };
      setUsers([...users, newUser]);
    }

    setName("");
  };

  return (
    <div>

      <h1>Users</h1>

      <input
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={addUser}>Add User</button>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>
                <button onClick={() => deleteUser(u.id)}>Delete</button>
                <button onClick={() => editUser(u)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default Users;