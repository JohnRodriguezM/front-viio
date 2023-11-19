/* eslint-disable no-console */
// eslint-disable-next-line @typescript-eslint/naming-convention
import axios from "axios";
export const baseURL = "http://localhost:4000/api/";

export const api = axios.create({
  baseURL,
});

api.interceptors.request.use(
  async (request) => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        request.headers.Authorization = `Bearer ${token}`;

        //* interceptar la solicitud por tipo de metodo y mostrar un mensaje de carga
        console.log(
          `%c ${request?.method?.toUpperCase()} ${request.url}`,
          "color: blue; font-weight: bold;"
        );
        return request;
      }
    } catch (e) {
      localStorage.removeItem("token");
      delete axios.defaults.headers.common["Authorization"];
    }
    return request;
  },
  async (error) => {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    return await Promise.reject(error);
  }
);
