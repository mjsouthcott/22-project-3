import axios from "axios";

export default {
  getUsers: function() {
    return axios.get("/api/users")
  },
  getVehicles: function() {
    return axios.get("/api/vehicles")
  },
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id)
  // },
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id)
  // },
  createUser: function(userData) {
    return axios.post("/api/users", userData)
  },
  createVehicle: function(vehicleData) {
    return axios.post("/api/vehicles", vehicleData)
  }
}
