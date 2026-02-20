import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoleList from "./pages/RoleList";
import AddRole from "./pages/AddRole";
import EditRole from "./pages/EditRole";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RoleList />} />
        <Route path="/roles" element={<RoleList />} />
        <Route path="/add-role" element={<AddRole />} />
        <Route path="/edit-role/:id" element={<EditRole />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;