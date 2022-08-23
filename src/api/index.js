import ky from "ky";

// TODO: Load this from an environment variable
const API_URL = "http://localhost:3004/users";

export default {
  getAllUsers() {
    return ky.get(API_URL).json();
  },
};
