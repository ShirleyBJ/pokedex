import React from "react";

function Favorites() {
  //iterate localStorage
  for (var i = 0; i < localStorage.length; i++) {
    // set iteration key name
    var key = localStorage.key(i);
    // use key name to retrieve the corresponding value
    var value = localStorage.getItem(key);
    // console.log the iteration key and value
    console.log("Key: " + key + ", Value: " + value);
  }
  return <h1>Favorites</h1>;
}

export default Favorites;
