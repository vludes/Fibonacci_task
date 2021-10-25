const button = document.querySelector("#submit");

// Creating click event for the button to call the func
button.addEventListener('click', function () {

  //  The entered value is splitted by commas into an array
  var arrVal = document.querySelector(".fibonacciInput").value.split(",");
  const toNumbers = arr => arr.map(Number);
  arrVal = toNumbers(arrVal);

  // Checks if the entered value is not empty
  if (arrVal == "") {
    // Adding a warning
    document.querySelector(".input").innerHTML = "Please enter your value";
    document.querySelector(".output").innerHTML = "";
  } else {
    // Calling the Fibonacci function
    const result = arrChallenge(arrVal);
    document.querySelector(".input").innerHTML = "Input: " + arrVal;
    document.querySelector(".output").innerHTML = "Output: " + result;
  }
});

function arrChallenge(arr) {
  var sumArray = 0;
  // Obtaining the sum of the array
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  sumArray = arr.reduce(reducer);

  // Finding Fibonacci numbers
  var firstPrevious = 0;
  var secondPrevious = 1;
  var fibonacciNumber = firstPrevious + secondPrevious;
  while (fibonacciNumber < sumArray) {
    firstPrevious = secondPrevious;
    secondPrevious = fibonacciNumber;
    fibonacciNumber = firstPrevious + fibonacciNumber;
  }

  // Returning the needed value
  return fibonacciNumber - sumArray;
}
