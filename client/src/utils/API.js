import axios from "axios";

const axiosWithToken = axios.create({
  headers: {'Authorization': "Bearer " + localStorage.getItem('access_token')}
});

export default {
  // Gets all managements
  getManagements: function() {
    return axiosWithToken.get("/api/managements");
  },
  // Gets the management with the given id
  getManagement: function(id) {
    return axiosWithToken.get("/api/managements/" + id);
  },
  // Deletes the management with the given id
  deleteManagement: function(id) {
    return axiosWithToken.delete("/api/managements/" + id);
  },
  // Saves a management to the database
  saveManagement: function(managementData) {
    return axiosWithToken.post("/api/managements", managementData);
  }
};
