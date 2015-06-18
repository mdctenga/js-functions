/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */
function numberToString (n){
	// var numString = n
	return n.toString();
}
// numberToString(15);
/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
function increase (numIncreased){
	return ++numIncreased;
}
// increase(8);

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
function decrease(numDecreased){
	return --numDecreased;
}

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
function add (x,y){
	return x + y;
}

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
function subtract(x,y){
	return x - y;
}

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
function multiply(x,y){
	return x * y;
}

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
function divide(x,y){
	return x / y;
}

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
function square(x){
	return x * x;
}

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
function calculate (operation,x,y){
	// console.log(x);
	// console.log(y);
	// console.log(operation);
	// console.log(typeof x);
	// console.log(typeof y);
	// console.log(typeof operation);
	// var sum = x + y;
	// var difference = x - y;
	// var product = x * 2;
	// var endProduct = product * x;
	// var division = product / x;
	// console.log(x.toString() + " + " + y.toString() + " = " + sum.toString());
	// console.log(x.toString() + " - " + y.toString() + " = " + difference.toString());
	// console.log(product.toString() + " * " + x.toString() + " = " + endProduct.toString());
	// console.log(product.toString() + " / " + x.toString() + " = " + division.toString());

	// if (operation === "add") {
	// 	return console.log(x.toString() + " + " + y.toString() + " = " + sum.toString());
	// }; else if (operation === "subtract") {
	// 	return console.log(x.toString() + " - " + y.toString() + " = " + difference.toString());
	// }; else if (operation === "multiply") {
	// 	return console.log(product.toString() + " * " + x.toString() + " = " + endProduct.toString());
	// }; else {
	// 	console.log(product.toString() + " / " + x.toString() + " = " + division.toString());
	// }
	
	var num;
	switch (operation) {
		case "add":
			var sum = add(x,y);
			console.log(x + " + " + y + " = " + sum);
			num = sum;
			break;
		case "subtract":
			var difference = subtract(x,y);
			console.log(x + " - " + y + " = " + difference);
			num = difference;
			break;
		case "multiply":
			var product = multiply(x,y);
			console.log(x + " * " + y + " = " + product);
			num = product;
			break;
		case "divide":
			var quotient = divide(x,y);
			console.log(x + " / " + y + " = " + quotient);
			num = quotient;
			break;
	}
	return num;
}

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
function isGreaterThan(a,b){
	if (a > b){
		return true;
	} else {
		return false;
	}
}

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
function isLessThan(a,b){
	if (a < b) {
		return true;
	} else {
		return false;
	}
}

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
function areEqual(a,b){
	if (a === b){
		return true;
	} else {
		return false;
	}
}

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
function minimum(x,y){
	var smallestNum;
	if (x > y) {
		return y;
	} else {
		return x;
	}
}

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
function maximum(x,y){
	if (x > y) {
		return x;
	} else {
		return y;
	}
}

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
function isEven(n){
	if (n % 2 === 0) {
		return true;
	} else {
		return false
	}
}

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
function isOdd(n){
	if (n % 2 !== 0) {
		return true;
	} else {
		return false;
	}
}

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
function letterGrade(score,total) {
	// Divde score over total to get a decimal
	// Multiply the decimal by 100 to get a whole number
	// Concatinate a "%" to make a percentage
	// Define a range
	// Compare the percentage with the range
	// 
	
	var roundNumber = Math.round(percentage);
	var percentage = (score / total) * 100;
	
	if (percentage >= 90 && percentage <=	 100) {
		return "A";
	} else if (percentage >= 80 && percentage < 89) {
		return "B";
	} else if (percentage >= 70 && percentage < 79) {
		return "C";
	} else if (percentage >= 60 && percentage < 70) {
		return "D";
	} else if (percentage >= 0 && percentage < 59) {
		return "F";
	} else {
		return percentage;
	}

}

/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */
function incrementReviews(restaurant){
	if (restaurant.reviews > 0) {
		restaurant.reviews++;
	} else {
		restaurant.reviews = 1;
	}
	return restaurant;
}

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
function combine(word1, word2){
	var words = word1 + " " + word2;
	return words;
}

/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */
function createCircle(radius){
	if (radius > 0) {
		var diameter = radius * 2;
		var circle = {
			area: Math.PI * (radius * radius),	
			circumference: Math.PI * diameter
		};
	}

	return circle;
}
