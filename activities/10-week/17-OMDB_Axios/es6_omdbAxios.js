// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
const axios = require("axios");

let search="remember+the+titans";
// Then run a request with axios to the OMDB API with the movie specified
axios.get(`http://www.omdbapi.com/?t=${search}&y=&plot=short&apikey=trilogy`).then(
  function(response) {
    console.log("The movie's rating is: " + response.data.imdbRating);
  }
);
