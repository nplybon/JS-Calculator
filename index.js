var numOne = document.getElementById('num-one');
var numTwo = document.getElementById('num-two');
var result = document.getElementById('result');

document.getElementById("add").addEventListener('click', add);
document.getElementById("sub").addEventListener('click', sub);
document.getElementById("mult").addEventListener('click', mult);
document.getElementById("div").addEventListener('click', div);

function add() {
    var one = parseFloat(numOne.value) || 0;
    var two = parseFloat(numTwo.value) || 0;
    result.innerText = one + two;
}

function sub() {
    var one = parseFloat(numOne.value) || 0;
    var two = parseFloat(numTwo.value) || 0;
    result.innerText = one - two;
}
function mult() {
    var one = parseFloat(numOne.value) || 0;
    var two = parseFloat(numTwo.value) || 0;
    result.innerText = one * two;
}
function div() {
    var one = parseFloat(numOne.value) || 0;
    var two = parseFloat(numTwo.value) || 0;
    result.innerText = one / two;
}

