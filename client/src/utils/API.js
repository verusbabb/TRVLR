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
    return axios.post("/api/users/signup", userData);
  },
  // Saves a trip to the database
  saveTrip: function (tripData) {
    return axios.post("/api/trips/", tripData);
  },

  findOneUser: function (userData) {
    return axios.post("/api/users/login", {
      username: userData.userName,
      password: userData.password,
    });
  },

  signOut: function () {
    console.log("signing out");
    return axios.get("/api/users/signout");
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
  findTripByTripId: function (tripId) {
    return axios.get("/api/trips/tripId/" + tripId.tripId);
  },
  updateTrip: function (id, tripData) {
    return axios.put("/api/trips/" + id, {
      members: tripData.members,
    });
  },
  editTrip: function (id, tripData) {
    return axios.put("/api/trips/editTrip/" + id, tripData)
  },
  // Deletes the trip with the given id
  deleteTrip: function (id) {
    return axios.delete("/api/trips/" + id);
  },

  createExpense: function (id, expenseData) {
    return axios.post(`/api/trips/${id}`, expenseData);
  },

  deleteExpense: function (id) {
    return axios.delete("/api/trips/expenses/" + id);
  },

  createSchedule: function (id, scheduleData) {
    return axios.post(`/api/trips/schedule/${id}`, scheduleData);
  },

  deleteSchedule: function (id) {
    return axios.delete("/api/trips/schedule/" + id);
  },

  createCollection: function (id, collectionData) {
    return axios.post(`/api/trips/collection/${id}`, collectionData);
  },

  createCollectionItem: function (id, collectionData) {
    return axios.put(`/api/trips/collection/${id}`, collectionData);
  },

  deleteCollection: function (id) {
    return axios.delete("/api/trips/collection/" + id);
  },

  createPackingItem: function (id, packingData) {
    return axios.post(`/api/trips/packing/${id}`, packingData);
  },

  deletePackingItem: function (id) {
    return axios.delete("/api/trips/packing/" + id);
  },
};

export default API;
