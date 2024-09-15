const result = document.getElementById("result");

function displayOnPanel(input) {
    result.value += input; 
}

function clearPanel(input) {
    result.value = "";
}

function calculate(input) {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = "ERROR";
    }
}