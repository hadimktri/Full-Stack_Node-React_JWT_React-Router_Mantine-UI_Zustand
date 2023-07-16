import axios from "axios";

export const setSession = (token: string | null) => {
  if (token) {
    localStorage.setItem("jwt_access_token", token);
    axios.defaults.headers.common["Authorization"] = "Bearer " + token; // dont undrestand
  } else {
    localStorage.removeItem("jwt_access_token");
    delete axios.defaults.headers.common["Authorization"]; // dont undrestand
  }
};
// getint token from local storage
export const getAccessToken = () => {
  return window.localStorage.getItem("jwt_access_token");
};