import axios from "axios";

import URL from "./config";
import { clearStorage } from "../actions";

const request = axios.create({
  baseURL: `${URL}`,
});

const subscribe = (store) => {
  request.interceptors.request.use((config) => {
    const state = store.getState();
    let token = state.auth.accessToken;

    if (token) {
      config.headers["Authorization"] = ["Bearer", token].join(" ");
    }

    return config;
  });

  request.interceptors.response.use(
    (config) => config,
    (error) => {
      if (error?.response?.status == 401) {
        store.dispatch(clearStorage());
      }

      throw error;
    }
  );
};

export default { request, subscribe };
