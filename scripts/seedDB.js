let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/tripplanner", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

let userSeed = [
  {
    userName: "studentSteve",
    name: {
      firstName: "Steve",
      lastname: "Babb",
    },
    memberOf: ["Nashville", "Vegas"],
  },
  {
    userName: "studentKolton",
    name: {
      firstName: "Kolton",
      lastName: "Decker",
    },
    memberOf: ["Vegas"],
  },
  {
    userName: "studentCarly",
    name: {
      firstName: "Carly",
      lastName: "Gouge",
    },
    // memberOf: ["Nashville"],
  },
  {
    userName: "studentChristina",
    name: {
      firstName: "Christina",
      lastName: "Moss",
    },
    memberOf: "Nashville",
  },
];

db.User.deleteMany({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

let tripSeed = [
  {
    members: ["studentSteve, studentKolton"],
    tripName: "Nashville",
    collections: [
      {
        name: "Dinner Spot",
        url: "https://mcdonalds.com",
      },
    ],
    expenses: [
      {
        description: "dinner with everyone",
        cost: "120",
        submitter: "Steve",
        date: Date.now,
      },
    ],
  },
  {
    members: ["studentCarly", "studentChristina"],
    tripName: "Vegas",
    collections: [
      {
        name: "Lunch Spot",
        url: "https://burgerking.com",
      },
    ],
    expenses: [
      {
        description: "lunch with everyone",
        cost: "125",
        submitter: "Carly",
        date: Date.now,
      },
    ],
  },
];

db.Trip.deleteMany({})
  .then(() => db.Trip.collection.insertMany(tripSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
