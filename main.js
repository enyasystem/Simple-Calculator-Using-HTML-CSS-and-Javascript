const display1 = document.querySelector('.display1');
const display2 = document.querySelector('.display2');
const temp_Result = document.querySelector('.temp-result');
const numbers = document.querySelectorAll('number');
const operator1 = document.querySelectorAll('.operator')
const equal = document.querySelector('.equal');
const clear = document.querySelector('.all-clear');
const clearLast = document.querySelector('.last value-clear');

// Variables
let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOperation = '';
let haveDot = false;

//Event Listeners to enable numbers to be added to screen when added clicked on the calculator
numbers.forEach(number =>{
    number.addEventListener('click', (e)=> {
        if (e.target.innerText === '.' && !haveDot) {
            haveDot = true;
        }else if (e.target.innerText === '.' && haveDot){
            return;
        }
        dis2Num += e.target.innerText;
        display2.innerText = dis2Num;
    })
})

//Mathematical operators -+*%/