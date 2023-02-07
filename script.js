const numberBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator')
const clearBtn = document.querySelector('.clear');
const plusMinusBtn = document.querySelector('.plus-minus');
const delBtn = document.querySelector('.del');
const decimalBtn = document.querySelector('.decimal');
const equalBtn = document.querySelector('.equals');
const display = document.querySelector('.display');
let num1 = null;
let num2 = null;
let currentOperation = null;

//Instructions called for making these functions, that I commented out. Not sure they're needed or make my solution simpler

// function add(x, y) {
// 	return x + y;
// }

// function subtract(x, y) {
// 	return x - y;
// }

// function multiply(x, y) {
// 	return x * y;
// }

// function divide(x, y) {
// 	return x / y;
// }

// function operate(operator, x, y) {
// 	if (operator == add) {
// 		return add(x, y);
// 	} else if (operator == subtract) {
// 		return subtract(x, y);
// 	} else if (operator == multiply) {
// 		return multiply(x, y);
// 	} else if (operator == divide) {
// 		return divide(x, y);
// 	} else {
// 		return "Invalid Operator"
// 	}
	
// }

numberBtn.forEach(btn => {
	btn.onclick = function (btn) {
		if (display.textContent == "0" && btn.target.value != "0") {
			display.textContent = btn.target.value;
		} else if (display.textContent == "0" && btn.target.value == "0"){
			display.textContent = "0";
		} else {
			display.textContent += btn.target.value;
		}
	} 
});

operatorBtn.forEach(btn => {
	btn.onclick = function (btn) {
		num1 = Number(display.textContent)
		currentOperation = btn.target.value
		display.textContent = ""

	}
});

equalBtn.addEventListener('click', () => {
	num2 = Number(display.textContent)
	if (currentOperation == "+") {
		display.textContent = num1 + num2;
	} else if (currentOperation == "-") {
		display.textContent = num1 - num2;
	} else if (currentOperation == "*") {
		display.textContent = num1 * num2;
	} else if (currentOperation == "/" ) {
		display.textContent = num1 / num2;
	}
});

plusMinusBtn.addEventListener('click', () => {
	display.textContent = display.textContent * -1;
});

decimalBtn.addEventListener('click', () => {
	display.textContent += ".";
});

clearBtn.addEventListener('click', () => {
	display.textContent = "0";
});

delBtn.addEventListener('click', () => {
	if (display.textContent.length <= 1) {
		display.textContent = "0"
	} else {
		display.textContent = display.textContent.slice(0, -1);
	}
});

