// This is my model for the object that Faker or "the API" will return. After a user is signed in and is ready, they request a picklist. 
// A picklist contains a route number ("[A-G]"+"[00-25]")*, a staging location, the number of the cart in the picklist (first, second, third, etc.),
// which wave it belongs to (1-5), and of course the bags/oversized boxes to be picked.
// A cart can have nine bags or 5 bags and an amount of oversized packages. I'm not sure what the maximum amount is, so I will be assuming 30 for the purposes of this app.

//*Note that I am using values true for DJE5. I recognize that these components should be adjustable by Operations at each site.



const array_random = function(arr) {
  return arr[Math.floor(Math.random()*arr.length)]
}
const int_random = function(max) {
  return Math.floor(Math.random() * max)
}
const float_random = function(max, dec=100) {
  // dec should be 10 for 1 decimal place, 100 for 2 places.
  return Math.floor(Math.random() * max * dec) / dec
}
const shelfLoc_random = function() {
  const gh = ['G', 'H']
  const abeg = ['A', 'B', 'E', 'G']
  return `${array_random(gh)}-${1+int_random(20)}.${1+int_random(2)}${array_random(abeg)}`
}
const bag_random = function(bagCartLoc) {
  const colors = ["black", "green", "navy", "yellow",]
  return {
      bagColor: array_random(colors),
      bagNumber: 100 + int_random(900),
      bagShelfLoc: shelfLoc_random(),
      bagCartLoc: bagCartLoc,
      weight: float_random(50)
  }
}

const rangeInt = (from,to) => Array.from( { length: to-from+1 }, (e, i) => i + from );
const rangeChar = (from,to) => Array.from( { length: to.charCodeAt(0)-from.charCodeAt(0)+1 }, (e,i) => String.fromCharCode(i+from.charCodeAt(0)) );
function padToTwo(number) {
if (number<=99) { number = ("0"+number).slice(-2); }
return number;
}
const stagingLoc_random = function() {
  return `${array_random(rangeChar("A", "E"))}${padToTwo(1+int_random(24))}`
}
function new_picklist(cartNumber=1) {
  let pick = {
      id: int_random(100),
      routeNumber: int_random(100),
      stagingLoc: stagingLoc_random(),
      cartNumber: cartNumber,
      bagList: [],
  }
  rangeInt(1,9).forEach(bagNumber=>{
      pick.bagList.push(bag_random(bagNumber))
  })
    return pick
}


export { new_picklist };