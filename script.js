function validateInput(value, errorElement) {
  if (value < 0 || value > 50 || isNaN(value)) {
    errorElement.textContent = "Please enter a score between 0 and 50.";
    return false;
  } else {
    errorElement.textContent = "";
    return true;
  }
}

function calculateFinalScore() {
  const fat1 = parseFloat(document.getElementById("fat1").value);
  const assignment1 = parseFloat(document.getElementById("assignment1").value);
  const fat2 = parseFloat(document.getElementById("fat2").value);
  const assignment2 = parseFloat(document.getElementById("assignment2").value);
  const fat3 = parseFloat(document.getElementById("fat3").value);
  const assignment3 = parseFloat(document.getElementById("assignment3").value);

  const errorFat1 = document.getElementById("error-fat1");
  const errorAssignment1 = document.getElementById("error-assignment1");
  const errorFat2 = document.getElementById("error-fat2");
  const errorAssignment2 = document.getElementById("error-assignment2");
  const errorFat3 = document.getElementById("error-fat3");
  const errorAssignment3 = document.getElementById("error-assignment3");

  const isValidFat1 = validateInput(fat1, errorFat1);
  const isValidAssignment1 = validateInput(assignment1, errorAssignment1);
  const isValidFat2 = validateInput(fat2, errorFat2);
  const isValidAssignment2 = validateInput(assignment2, errorAssignment2);
  const isValidFat3 = validateInput(fat3, errorFat3);
  const isValidAssignment3 = validateInput(assignment3, errorAssignment3);

  if (
    isValidFat1 &&
    isValidAssignment1 &&
    isValidFat2 &&
    isValidAssignment2 &&
    isValidFat3 &&
    isValidAssignment3
  ) {
    const weighted1 = fat1 * 0.7 + assignment1 * 0.3;
    const weighted2 = fat2 * 0.7 + assignment2 * 0.3;
    const weighted3 = fat3 * 0.7 + assignment3 * 0.3;

    const internal = (weighted1 + weighted2 + weighted3) / 3;
    const finalScore = (internal / 50) * 40;

    document.getElementById(
      "result"
    ).textContent = `The final score is: ${finalScore.toFixed(2)}`;
  } else {
    document.getElementById("result").textContent = "";
  }
}
