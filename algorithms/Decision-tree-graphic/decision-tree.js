let weather = prompt("What's the weather like? (Sun, Clouds, Rain)");
let time = (" ");
let hungry = false;


function transportationOptions() {

  if (weather === "Sun") {
    time = prompt("What time do you have to get there?");
    if (time >= 30) {
      console.log("You should walk.");
    } else if (time < 30) {
      console.log("You should take the bus.");
    }
  } else if (weather === "Clouds") {
    hungry = prompt("Are you hungry? (Yes or No)").toLowerCase();
    if (hungry === "yes") {
      console.log("You should walk.");
    } else {
      console.log("You should take the bus.");
    }
  } else {
    console.log("You should take the bus.");
  }
}

transportationOptions();

