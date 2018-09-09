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
  },
    // Retrieves comments from database
  getComments: function(id) {
      return axiosWithToken.get("/api/comments", + id);
  },
    // Save comments to database
  saveComment: function(commentData) {
    return axiosWithToken.post("/api/comments", commentData);
  },
  deleteComment: function(id) {
    return axios.delete("api/comments", + id);
  },
  saveReply:function(replyData){
    return axiosWithToken.post("/api/reply", replyData);
  },
  getReply: function(id) {
    return axiosWithToken.get("/api/reply", + id);
}
};
