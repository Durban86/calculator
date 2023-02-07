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

function add(x, y) {
	return x + y;
}

function subtract(x, y) {
	return x - y;
}

function multiply(x, y) {
	return x * y;
}

function divide(x, y) {
	return x / y;
}

function operate(operator, x, y) {
	if (operator == add) {
		return add(x, y);
	} else if (operator == subtract) {
		return subtract(x, y);
	} else if (operator == multiply) {
		return multiply(x, y);
	} else if (operator == divide) {
		return divide(x, y);
	} else {
		return "Invalid Operator"
	}
	
}

// numberBtn.addEventListener('click', (event) => {
// 	display.textContent += event.target.value;
// });

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
		display.textContent = ""
		currentOperation = btn.target.value

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
	display.textContent = display.textContent.slice(0, -1);
});
// zeroBtn.addEventListener('click', () => {
// 	display.textContent += "0";	
// });
// oneBtn.addEventListener('click', () => {
// 	display.innerText += "1";	
// });
// twoBtn.addEventListener('click', () => {
// 	display.innerText += "2";	
// });
// threeBtn.addEventListener('click', () => {
// 	display.innerText += "3";	
// });
// fourBtn.addEventListener('click', () => {
// 	display.innerText += "4";	
// });
// fiveBtn.addEventListener('click', () => {
// 	display.innerText += "5";	
// });
// sixBtn.addEventListener('click', () => {
// 	display.innerText += "6";	
// });
// sevenBtn.addEventListener('click', () => {
// 	display.innerText += "7";	
// });
// eightBtn.addEventListener('click', () => {
// 	display.innerText += "8";	
// });
// nineBtn.addEventListener('click', () => {
// 	display.innerText += "9";	
// });
// percentBtn.addEventListener('click', () => {
// 	display.innerText = "%";	
// });
// plusMinusBtn.addEventListener('click', () => {
// 	display.innerText = "plus minus";	
// });
// divideBtn.addEventListener('click', () => {
// 	display.innerText = "/";	
// });
// multiplyBtn.addEventListener('click', () => {
// 	display.innerText = "*";	
// });
// subtractBtn.addEventListener('click', () => {
// 	display.innerText = "-";	
// });
// addBtn.addEventListener('click', () => {
// 	display.innerText = "+";	
// });
// decimalBtn.addEventListener('click', () => {
// 	display.innerText = ".";	
// });
// equalBtn.addEventListener('click', () => {
// 	display.innerText = "=";	
// });
// clearBtn.addEventListener('click', () => {
// 	display.innerText = "";	
// });
