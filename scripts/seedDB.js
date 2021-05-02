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
    trips: [
      {
        tripName: "Nashville",
      },
      {
        tripName: "Camping",
      },
    ],
  },
  {
    userName: "studentKolton",
    name: {
      firstName: "Kolton",
      lastName: "Decker",
    },
    trips: [
      {
        tripName: "Vegas",
      },
    ],
  },
  {
    userName: "studentCarly",
    name: {
      firstName: "Carly",
      lastName: "Gouge",
    },
    trips: [
      {
        tripName: "NYC Symphony",
      },
      {
        tripName: "Road trip West",
      },
    ],
  },
  {
    userName: "studentChristina",
    name: {
      firstName: "Christina",
      lastName: "Moss",
    },
    trips: [
      {
        tripName: "Road trip East",
      },
      {
        tripName: "Rio de Janeiro",
      },
    ],
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
