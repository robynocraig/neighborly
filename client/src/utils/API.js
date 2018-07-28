import axios from "axios";

export default {
  // Gets all managements
  getManagements: function() {
    return axios.get("/api/managements");
  },
  // Gets the management with the given id
  getManagement: function(id) {
    return axios.get("/api/managements/" + id);
  },
  // Deletes the management with the given id
  deleteManagement: function(id) {
    return axios.delete("/api/managements/" + id);
  },
  // Saves a management to the database
  saveManagement: function(managementData) {
    return axios.post("/api/managements", managementData);
  }
};
