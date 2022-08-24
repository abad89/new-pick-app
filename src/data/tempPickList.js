// This is my model for the object that Faker or "the API" will return. After a user is signed in and is ready, they request a picklist. 
// A picklist contains a route number ("[A-G]"+"[00-25]")*, a staging location, the number of the cart in the picklist (first, second, third, etc.),
// which wave it belongs to (1-5), and of course the bags/oversized boxes to be picked.
// A cart can have nine bags or 5 backs and an amount of oversized packages. I'm not sure what the maximum amount is, so I will be assuming 30 for the purposes of this app.

//*Note that I am using values true for DJE5. I recognize that these components should be adjustable by Operations at each site.

const pickList = [
  {
    id: 43,
    routeNumber: 23,
    stagingLoc: "B07",
    cartNumber: 1,
    bagList: [
      {
        bagColor: "orange",
        bagNumber:1,
        bagShelfLoc: "G-13.3A",
        bagCartLoc: 1,
        // If a bag is over 30 pounds it is "heavy", and the picker is warned.
        weight: 8.14
      },
      {
        bagColor: "orange",
        bagNumber: 2,
        bagShelfLoc: "G-13.2A",
        bagCartLoc: 2
      },
      {
        bagColor: "orange",
        bagNumber: 3,
        bagShelfLoc: "G-13.1A",
        bagCartLoc: 3
      },
      {
        bagColor: "orange",
        bagNumber: 4,
        bagShelfLoc: "G-3.A",
        bagCartLoc: 4
      },
      {
        bagColor: "orange",
        bagNumber: 5,
        bagShelfLoc: "G-3.A",
        bagCartLoc: 5
      },
      {
        bagColor: "orange",
        bagNumber: 6,
        bagShelfLoc: "G-3.A",
        bagCartLoc: 6
      },
      {
        bagColor: "orange",
        bagNumber: 7,
        bagShelfLoc: "G-3.A",
        bagCartLoc: 7
      },
      {
        bagColor: "orange",
        bagNumber: 8,
        bagShelfLoc: "G-3.A",
        bagCartLoc: 8
      },
      {
        bagColor: "orange",
        bagNumber: 9,
        bagShelfLoc: "G-3.A",
        bagCartLoc: 9
      },
    ]
  },
]

export { pickList };