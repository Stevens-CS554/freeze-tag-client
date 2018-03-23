import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080"
});

export const fetchUserList = async () => {
  const result = await api.get("/current-users");

  return result.data;
};
