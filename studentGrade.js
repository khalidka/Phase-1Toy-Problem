const input = document.querySelector(".inputField");
const button = document.querySelector(".btnCalculator");
let gradeOut = document.querySelector("#grade-out");

// Generate student Grade using a function
function generateStudentGrade() {
  const score = parseFloat(input.value);
  // Check if the input is valid
  if (!isNaN(score) && score >= 0 && score <= 100) {
    // Determine the grade based on the scores
    let grade;

    if (score >= 79) {
      grade = "A";
    } else if (score >= 60 && score <= 79) {
      grade = "B";
    } else if (score >= 49 && score <= 59) {
      grade = "C";
    } else if (score >= 40 && score <= 49) {
      grade = "D";
    } else if (score <= 40) {
      grade = "E";
    }
    // Output the result
    gradeOut.textContent = `Grade: ${grade}`;
  } else {
    // If the input is not valid, show an error message
    gradeOut.textContent = "Please use valid score between 0 and 100";
  }
}

// call the function if the button is clicked!
button.addEventListener("click", function () {
  generateStudentGrade();
});
