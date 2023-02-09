const numberBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator')
const clearBtn = document.querySelector('.clear');
const delBtn = document.querySelector('.del');
const decimalBtn = document.querySelector('.decimal');
const equalBtn = document.querySelector('.equals');
const display = document.querySelector('.display');
let num1 = null;
let num2 = null;
let currentOperation = null;

numberBtn.forEach(btn => {
	btn.addEventListener('click', () => appendNumber(btn.textContent))
});

operatorBtn.forEach(btn => {
	btn.addEventListener('click', () => setOperator(btn.textContent))
});

function appendNumber(number) {
	if (display.textContent == '0' && number != '0'){
		display.textContent = number
	} else if (display.textContent == "0" && number == "0") {
		display.textContent = "0"
	} else {
		display.textContent += number
	}
}

function setOperator(operator) {
	// if (currentOperation != null) calculate()
	num1 = Number(display.textContent)
	currentOperation = operator
	display.textContent = ''
	decimalBtn.disabled = false;
}

equalBtn.addEventListener('click', calculate)

function calculate() {
	if (currentOperation == "÷" && display.textContent == "0") {
		alert("You can't divide by 0!");
		clear();
	}
	num2 = Number(display.textContent)
	display.textContent = Math.round(operate(currentOperation, num1, num2) * 1000) / 1000
	// currentOperation = null;
}

decimalBtn.addEventListener('click', addDecimal)

function addDecimal() {
	if (display.textContent.includes(".")) {
		decimalBtn.disabled = true
	} else {
		display.textContent += ".";
	}
}

clearBtn.addEventListener('click', clear);

function clear() {
	display.textContent = "0"
	num1 = null;
	num2 = null;
	currentOperation = null;
	decimalBtn.disabled = false;
}

delBtn.addEventListener('click', deleteLastChar);

function deleteLastChar() {
	if (display.textContent.length <= 1) {
		display.textContent = "0"
	} else {
		display.textContent = display.textContent.slice(0, -1);
	}
}

window.addEventListener('keydown', getKey)

function getKey(event) {
	if(event.key >= 0 && event.key <= 9) {
		appendNumber(event.key)
	} else if (event.key == '+' || event.key == '-' || event.key == '*' || event.key == '/') {
		setOperator(convertOperator(event.key))
	} else if (event.key == 'Backspace' || event.key == 'Delete') {
		deleteLastChar();
	} else if (event.key == '=' || event.key == 'Enter') {
		calculate();
	} else if (event.key == ".") {
		addDecimal();
	} else if (event.key === 'c') {
		clear();
	}
}

function convertOperator(keyboardOperator) {
	switch(keyboardOperator) {
		case '+':
			return '+'
		case '-':
			return '-'
		case '*':
			return 'X'
		case '/':
			return '÷'
	}
}

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
	switch(operator) {
	case '+':
		return add(x, y);
	case '-':
		return subtract(x, y);
	case 'X':
		return multiply(x, y);
	case '÷':
		return divide(x, y);
	default:
		return null;
	}
}