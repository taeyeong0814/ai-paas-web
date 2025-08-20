import ky from "ky";
import { LOCAL_STORAGE } from "../constant/local-storage";

export const api = ky.create({
  prefixUrl: `${import.meta.env.VITE_SERVER_URL}/api/v1`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  hooks: {
    beforeRequest: [
      (request) => {
        const accessToken = localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN);
        if (accessToken) {
          request.headers.set("Authorization", `Bearer ${accessToken}`);
        }
      },
    ],
    afterResponse: [
      (_request, _options, response) => {
        if (response.status === 401) {
          localStorage.removeItem(LOCAL_STORAGE.ACCESS_TOKEN);
          localStorage.removeItem(LOCAL_STORAGE.REFRESH_TOKEN);
          window.location.href = "/login";
        }
      },
    ],
  },
});
