const display1 = document.querySelector('.display1');
const display2 = document.querySelector('.display2');
const temp_Result = document.querySelector('.temp-result');
const numbers = document.querySelectorAll('.number');
const operator1 = document.querySelectorAll('.operator')
const equal = document.querySelector('.equal');
const clearAll = document.querySelector('.all-clear');
const clearLast = document.querySelector('.last-value-clear');

// Variables
let display_1_Num = '';
let display_2_Num = '';
let result = null;
let lastOperation = '';
let haveDot = false;

//Event Listeners to enable numbers to be added to screen when added clicked on the calculator
numbers.forEach(number => {
    number.addEventListener('click', (e)=> {
        /*check if there is a decimal point clicked before on
         the calculator*/
        if (e.target.innerText === '.' && !haveDot) {
            haveDot = true;
        //Then if there's no decimal point clicked, then add a decimal point or don't add if there's a decimal point already
        }else if (e.target.innerText === '.' && haveDot){
            return;
        }
        display_2_Num += e.target.innerText;
        display2.innerText = display_2_Num;
    })
});

//Mathematical operators -+*%/
operator1.forEach(operator => {
    operator.addEventListener('click', (e)=>{
        if (!display_2_Num) result; 
        haveDot = false;  
        const operationName = e.target.innerText;
        if (display_1_Num && display_2_Num && lastOperation) {
            mathOperation();
        } else{
            result = parseFloat(display_2_Num);
        }   
        clearVar(operationName);
        lastOperation = operationName;
        console.log(result);
    })
});

function clearVar(name = '') {
    display_1_Num += display_2_Num+ ' ' + name + ' ';
    display1.innerText = display_1_Num;
    display2.innerText = '';
    display_2_Num = '';
    temp_Result.innerText = result;
}

//Math Operators function
function mathOperation() {
    if (lastOperation === 'X') {
        result = parseFloat(result) * parseFloat(display_2_Num);       
    }else if (lastOperation === '+') {
        result = parseFloat(result) + parseFloat(display_2_Num);
    }else if (lastOperation === '-') {
        result = parseFloat(result) - parseFloat(display_2_Num);
    }else if (lastOperation === '%') {
        result = parseFloat(result) % parseFloat(display_2_Num);
    }else if (lastOperation === '/') {
        result = parseFloat(result) / parseFloat(display_2_Num);
    }
}

equal.addEventListener('click', (e)=>{
    if ( !display_1_Num || !display_2_Num) return; 
    haveDot = false;
    mathOperation();
    clearVar();
    display2.innerText = result;      
    temp_Result.innerText = '';
    display_2_Num = result;
    display_1_Num = '';
});

clearAll.addEventListener('click', (e)=>{
    display1.innerText = 'Please Calculate Something';
    display2.innerText = '';
    display_1_Num = '';
    display_2_Num = '';
    result = '';
    temp_Result.innerText = '';
});

clea0rLast.addEventListener('click', (e) => {
display2.innerText = '';
display_2_Num = '';
});

//Key board accepting inputs
window.addEventListener('keydown', (e) => {
    if (
        e.key === '0' ||
        e.key === '1' ||
        e.key === '2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key ==='6' ||
        e.key ==='7' ||
        e.key ==='8' ||
        e.key ==='.'
    ){
        clickButton(e.key);
    }else if(
        e.key === '*' ||
        e.key === '+' ||
        e.key === '-' ||
        e.key === '%' 
    ){
        clickOperation(e.key);
    }else if (e.key === "*") {
        click.clickOperation('X');
    }
    });
    
    function clickButton(key) {
        numbers.forEach( button => {
            if (button.innerText === key) {
                button.click();
            }
        })
    }

    function clickOperation(key) {
        operator1.forEach(button => {
            if (button.innerText === key) {
                button.click();
            }
        })
    }