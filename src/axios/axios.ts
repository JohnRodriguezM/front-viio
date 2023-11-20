import axios from "axios";

// ? replace with deployed url
// https://back-viio-production.up.railway.app/api/

/**
 * The base URL for making API requests.
 */
export const baseURL = "http://localhost:4000/api/";

export const api = axios.create({
  baseURL,
});

api.interceptors.request.use(
  async (request) => {
    try {
      /**
       * The authentication token retrieved from the local storage.
       * @type {string | null}
       */
      const token: string | null = localStorage.getItem("token");
      if (token) {
        request.headers.Authorization = `Bearer ${token}`;

        //* interceptar la solicitud por tipo de metodo y mostrar un mensaje de carga
        // eslint-disable-next-line no-console
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
