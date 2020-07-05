import axios from "axios";

export default {
  getUsers: function() {
    return axios.get("/api/users");
  },
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  createUser: function(userData) {
    return axios.post("/api/users", userData);
  }
};
