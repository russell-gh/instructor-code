module.exports = {
  config: {
    searchDistance: 100,
  },
  userData: [
    {
      id: 1,
      name: "Russell",
      age: 39,
      location: "Stafford",
      height: 184,
      ownSex: 1,
      eyeColor: "blue",
      weight: 80, //kg
      interestedInSex: [0, 1, 2], //- means women, 1 mean men, 2 means other
      interestedInDistance: 25,
    },
    {
      id: 3,
      name: "Simon",
      age: 30,
      location: "Stafford",
      height: 184,
      ownSex: 1,
      eyeColor: "blue",
      weight: 79, //kg
      interestedInSex: [0], //- means women, 1 mean men, 2 means other
      interestedInDistance: 25,
    },
    {
      id: 2,
      name: "Jacky",
      age: 20,
      location: "Stoke",
      height: 165,
      ownSex: 0,
      eyeColor: "brown",
      weight: 70, //kg
      interestedInSex: [1], //- means women, 1 mean men, 2 means other
      interestedInDistance: 125,
    },
  ],
};
