const calc = document.getElementById('calc');
const inputValue = document.getElementById('calc-input');



function clearInput() {
    inputValue.value = "";
}
function display(input) {
    inputValue.value += input;
}
function sliceInput() {
    inputValue.value = inputValue.value.slice(0, -1)
}
function calculate() {
    try {
        inputValue.value = eval(inputValue.value);
    }
    catch (error) {
        inputValue.value = "Error";
    }
} 