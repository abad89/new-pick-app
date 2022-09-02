// This is my model for the object that Faker or "the API" will return. After a user is signed in and is ready, they request a picklist. 
// A picklist contains a route number ("[A-G]"+"[00-25]")*, a staging location, the number of the cart in the picklist (first, second, third, etc.),
// which wave it belongs to (1-5), and of course the bags/oversized boxes to be picked.
// A cart can have nine bags or 5 bags and an amount of oversized packages. I'm not sure what the maximum amount is, so I will be assuming 30 for the purposes of this app.

//*Note that I am using values true for DJE5. I recognize that these components should be adjustable by Operations at each site.

const pickList = [
  {
    id: 43,
    routeNumber: 23,
    stagingLoc: "B07",
    cartNumber: 1,
    bagList: [
      {
        bagColor: "black",
        bagNumber: 234,
        bagShelfLoc: "G-13.3A",
        bagCartLoc: 1,
        // If a bag is over 30 pounds it is "heavy", and the picker is warned.
        weight: 8.14
      },
      {
        bagColor: "green",
        bagNumber: 739,
        bagShelfLoc: "G-13.2A",
        bagCartLoc: 2,
        weight: 32.25
      },
      {
        bagColor: "navy",
        bagNumber: 362,
        bagShelfLoc: "G-13.1A",
        bagCartLoc: 3,
        weight: 14.54
      },
      {
        bagColor: "yellow",
        bagNumber: 425,
        bagShelfLoc: "G-13.3B",
        bagCartLoc: 4,
        weight: 29.32
      },
      {
        bagColor: "green",
        bagNumber: 168,
        bagShelfLoc: "G-13.2B",
        bagCartLoc: 5,
        weight: 11.23
      },
      {
        bagColor: "green",
        bagNumber: 263,
        bagShelfLoc: "G-13.1B",
        bagCartLoc: 6,
        weight: 26.42
      },
      {
        bagColor: "navy",
        bagNumber: 246,
        bagShelfLoc: "G-13.2E",
        bagCartLoc: 7,
        weight: 11.73
      },
      {
        bagColor: "black",
        bagNumber: 536,
        bagShelfLoc: "H-18.1G",
        bagCartLoc: 8,
        weight: 28.47
      },
      {
        bagColor: "yellow",
        bagNumber: 422,
        bagShelfLoc: "H-18.2G",
        bagCartLoc: 9,
        weight: 38.49
      },
    ]
  },
]

export { pickList };