import axios from "axios";

const API = "http://localhost:5000/roles";

export const getRoles = () => axios.get(API);
export const addRole = (data) => axios.post(API, data);
export const deleteRole = (id) => axios.delete(`${API}/${id}`);