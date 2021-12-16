import axios from "axios";

export default interface dataProps {
  name: string;
  email: string;
  status: string;
  gender?: string;
}

const apiUrl = "https://gorest.co.in/public/v1";
const accessToken =
  "8eb8211ed89925ab1b009e1e5512d8a370ec5978c3e37ad22858b0b3cb74c97d";

const client = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

export const getUsers = () => {
  return client.get("/users");
};

export const createUser = (data: dataProps) => {
  return client.post("/users", data);
};

export const updateUser = (id: number, data: dataProps) => {
  return client.put(`/users/${id}`, data);
};

export const deleteUser = (id: number) => {
  return client.delete(`/users/${id}`);
};
