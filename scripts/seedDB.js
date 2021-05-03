let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/tripplanner", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

// seed users
let userSeed = [
  {
    userName: "studentSteve",
    password: "sdfsdfwerwer6t",
    name: {
      firstName: "Steve",
      lastname: "Babb",
    },
    memberOf: ["Nashville", "Vegas"],
  },
  {
    userName: "studentKolton",
    password: "%%(#selsdf0",
    name: {
      firstName: "Kolton",
      lastName: "Decker",
    },
    memberOf: ["Vegas"],
  },
  {
    userName: "studentCarly",
    password: "$(()DFASLD",
    name: {
      firstName: "Carly",
      lastName: "Gouge",
    },
    memberOf: ["Nashville"],
  },
  {
    userName: "studentChristina",
    password: "@))R,LRJELEFE",
    name: {
      firstName: "Christina",
      lastName: "Moss",
    },
    memberOf: ["Nashville"],
  },
];

// insert users into user table
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

// see trips
let tripSeed = [
  {
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

//insert trips into trip table
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
