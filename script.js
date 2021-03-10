let inp = ""

function dis(val) {
    document.getElementById("result").value += val
    inp += val
    console.log(inp)
}


function clr() {
    document.getElementById("result").value = ""
    inp = ""
}


function operate(operator, a, b) {
    let result = 0
    if (operator === "+") {

        result += add(a, b)
        console.log(result)
    } else if (operator === "-") {
        result += subtract(a, b)
        console.log(result)

    } else if (operator === "/") {
        result += divide(a, b)
        console.log(result)
    } else if (operator === "*") {
        result += multiply(a, b)
        console.log(result)
    }

}

function add(a, b) {
    return a + b;

}

function subtract(a, b) {
    return a - b;

}

function multiply(a, b) {
    return a * b
}

function power(a, b) {
    return a ** b;

}

function divide(a, b) {
    return a / b
}