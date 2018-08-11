import axios from "axios";

const axiosWithToken = axios.create({
  headers: {'Authorization': "Bearer " + localStorage.getItem('access_token')}
});

export default {
  // Gets all users
  getUsers: function() {
    return axiosWithToken.get("/api/users");
  },
  // Gets the user with the given email
  getUser: function(email) {
    return axiosWithToken.get("/api/users/" + email);
  },
  // // Deletes the user with the given email
  // deleteUser: function(email) {
  //   return axiosWithToken.delete("/api/tenants/" + email);
  // },
  saveUser: function(usersData) {
    return axiosWithToken.post("/api/users", usersData);
  }
};