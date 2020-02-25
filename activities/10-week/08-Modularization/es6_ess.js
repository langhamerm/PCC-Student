//const only prevents reassignment. 
//You can however change the properties

//const should be use here
const essentials = {
  drink: "water",
  eat: "snickers",
  fun: "phone",
  friend: "facebook"
};

//const should be use here
const niceToHaves = {
  tools: ["can opener", "flashlight", "matches"],
  safety: ["first aid kit", "gloves"]
};

//const should be use here
const nonessentials = {
  cookware: "waffleMaker"
};

// module.exports is essentially an object that we can add data or variables to
// We can access them from other files using the 'require' keyword.

module.exports = {
  essentials: essentials,
  niceToHaves: niceToHaves
};
