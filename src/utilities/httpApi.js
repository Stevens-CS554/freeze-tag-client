import { API_URL } from "../store/constants";
import axios from "axios";

const api = axios.create({
  baseURL: API_URL
});

export const fetchUserList = async () => {
  const result = await api.get("/current-users");

  return result.data;
};
