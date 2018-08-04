import axios from "axios";

const axiosWithToken = axios.create({
  headers: {'Authorization': "Bearer " + localStorage.getItem('access_token')}
});

export default {
  // Gets all managements
  getTenants: function() {
    return axiosWithToken.get("/api/tenants");
  },
  // Gets the management with the given id
  getTenant: function(id) {
    return axiosWithToken.get("/api/tenants/" + id);
  },
  // Deletes the management with the given id
  deleteTenant: function(id) {
    return axiosWithToken.delete("/api/tenants/" + id);
  },
  // Saves a management to the database
  saveTenant: function(tenantsData) {
    return axiosWithToken.post("/api/tenants", tenantsData);
  }
};
