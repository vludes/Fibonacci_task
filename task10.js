const button = document.querySelector("#submit");



// Creating click event for the button to call the func
button.addEventListener('click', function() {
    
  //  The entered value is splitted by commas into an array
  const arrVal = document.querySelector(".fibonacciInput").value.split(",");


  // Checks if the entered value is not empty
  if(arrVal == "") {
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

function arrChallenge (arr) {
    var sumArray = 0;
    // Obtaining the sum of the array
    for(i = 0; i < arr.length; i++) {
      // String converted to numbers
      sumArray += parseInt(arr[i]);
  }


  // Finding Fibonacci numbers
  var a = 0;
	var b = 1;
	var c = a + b;
	while (c < sumArray)
	{
		a = b;
		b = c;
		c = a + c;
	}
	
    // Returning the needed value
    return c - sumArray;
}
