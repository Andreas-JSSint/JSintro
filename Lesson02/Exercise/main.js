//Getting input/output fields
const inputA = document.querySelector('#inputA');
const inputB = document.querySelector('#inputB');
const output = document.querySelector('#output');

//Getting buttons
const buttonAdd = document.querySelector('#buttonAdd');
const buttonSubstract = document.querySelector('#buttonSubstract');
const buttonMultiply = document.querySelector('#buttonMultiply');
const buttonDivide = document.querySelector('#buttonDivide');

buttonAdd.addEventListener('click', calculation.bind(buttonAdd), true)
buttonSubstract.addEventListener('click', calculation.bind(buttonSubstract), true)
buttonMultiply.addEventListener('click', calculation.bind(buttonMultiply), true)
buttonDivide.addEventListener('click', calculation.bind(buttonDivide), true)



function calculation() {
    switch (this.innerText) {
        case "+":
            output.value = parseFloat(inputA.value) + parseFloat(inputB.value);
            break;
        case "-":
            output.value = parseFloat(inputA.value) - parseFloat(inputB.value);
            break;
        case "x":
            output.value = parseFloat(inputA.value) * parseFloat(inputB.value);
            break;
        case "/":
            if (parseFloat(inputB.value, 10) !== 0)
                output.value = parseFloat(inputA.value) / parseFloat(inputB.value);
            else
                output.value = "not defined!"
            break;
        default:
    }
}

