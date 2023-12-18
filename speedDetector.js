/**
 * Function to check the car speed and calculate demerit points.
 */
function checkSpeed() {
  // Get user input
  const speedInput = document.getElementById("speedInput");
  const resultOutput = document.getElementById("resultOutput");

  // Convert input to a number
  const speed = parseFloat(speedInput.value);

  // Constants
  const speedLimit = 70;
  const pointsPerDemerit = 5;
  const limitOfDemerit = 12;

  // Check speed and calculate demerit points
  if (isNaN(speed) || speed < 0) {
    resultOutput.textContent = "Please enter a valid speed.";
  } else {
    const demeritPoints = Math.floor((speed - speedLimit) / pointsPerDemerit);

    // Display result
    if (speed < speedLimit) {
      resultOutput.textContent = "Ok";
    } else if (demeritPoints > limitOfDemerit) {
      resultOutput.textContent = "License suspended";
    } else {
      resultOutput.textContent = `Points: ${demeritPoints}`;
    }
  }
}
