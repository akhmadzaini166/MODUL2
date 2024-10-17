let displayValue = "";

function input(value) {
    displayValue += value;
    document.getElementById('display').textContent = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementById('display').textContent = "0";
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('display').textContent = displayValue;
    } catch (error) {
        document.getElementById('display').textContent = "Error";
    }
}
