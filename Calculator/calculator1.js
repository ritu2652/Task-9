function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;
    let result;

    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
    } else {
        result = 'Invalid operator';
    }

    document.getElementById("result").innerText = `Result: ${result}`;
}

