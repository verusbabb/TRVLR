import axios from "axios";
// const passport = require("../config/passport");

const API = {
  //USER ROUTES

  // Gets all users
  getUsers: function () {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function (id) {
    return axios.get("/api/users/" + id);
  },
  getUserByUsername: function (username) {
    return axios.get("/api/username/" + username);
  },
  // Deletes the user with the given id
  deleteUser: function (id) {
    return axios.delete("/api/users/" + id);
  },
  // UPDATED saveUser route that now includes authentication
  saveUser: function (userData) {
    console.log(userData);
    return axios.post("/api/users/signup", userData);
  },
  // Saves a trip to the database
  saveTrip: function (tripData) {
    console.log(tripData);
    return axios.post("/api/users/:id", tripData);
  },

  findOneUser: function (userData) {
    console.log(userData);
    return axios.post("/api/users/login", {
      username: userData.userName,
      password: userData.password,
    });
  },

  //TRIP ROUTES

  // Gets all trips
  getTrips: function () {
    return axios.get("/api/trips");
  },
  // Gets the trip with the given id
  getTrip: function (id) {
    return axios.get("/api/trips/" + id);
  },
  // Deletes the trip with the given id
  deleteTrip: function (id) {
    return axios.delete("/api/trips/" + id);
  },
};

export default API;
