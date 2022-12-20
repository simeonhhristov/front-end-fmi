var currentExpression = '';
var currentAction = null;
var currentOperator = null;
var expressionToLog = '';

const input = document.getElementsByClassName('input')[0];
const logger = document.getElementsByClassName('calculation-list')[0]
// action buttons and clear
const actionButtons = document.getElementsByClassName('action-btn');

Array.from(actionButtons).forEach ( button => {
    button.addEventListener("click", event => {
        if (event.target.textContent == 'C') {
            currentExpression = '';
            expressionToLog = '';
            currentAction = null;
            input.value = '';
            return;
        }
        currentAction = event.target;
    })
})

// operators
const operationButtons = document.getElementsByClassName('orange');
let operatorMap = new Map();
operatorMap.set("+", '+');
operatorMap.set("−", '-');
operatorMap.set("×", '*');
operatorMap.set("÷", '/');

const clearBorders = () => {
    Array.from(operationButtons).forEach (operation => {
        operation.style.border = 'none';
    })
}

const logExpression = () => {
    const log = document.createElement('li');
    log.innerHTML = expressionToLog;
    logger.append(log);
    expressionToLog = '';
}

Array.from(operationButtons).forEach (operation => {
    operation.addEventListener("click", event => {
        clearBorders();
        if (event.target.textContent == '=') {
            currentOperator = null;
            currentExpression = eval(currentExpression);
            expressionToLog = expressionToLog + '=' + currentExpression;
            logExpression();
            input.value = currentExpression;
            return;
        }

        if (currentOperator) {
            //change operator
            event.target.style.border = '1px solid black'
            currentExpression[currentExpression.length - 1] = operatorMap.get(event.target.textContent);
            expressionToLog[expressionToLog.length - 1] = operatorMap.get(event.target.textContent);
            event.target.style.border = '1px solid black'
            return;
        }
        
        currentExpression = currentExpression + operatorMap.get(event.target.textContent);
        expressionToLog = expressionToLog + operatorMap.get(event.target.textContent);
        currentOperator = operatorMap.get(event.target.textContent);
        event.target.style.border = '1px solid black'
    })
})

// numbers 
const numbers = document.querySelectorAll('[class="action"');
const zeroButton = document.getElementsByClassName('zero')[0];

zeroButton.addEventListener("click", event => {
    if (input.value.length <= 1 ) {
        if (input.value[0] == '0') {
            return;
        }
    }

    if (currentOperator) {
        input.value = event.target.textContent;
        currentOperator = null;
    } else {
        input.value = input.value + event.target.textContent;
    }

    currentExpression = currentExpression + event.target.textContent;
    expressionToLog = expressionToLog + event.target.textContent;
})

Array.from(numbers).forEach ( number => {
    number.addEventListener("click", event => {
        if (currentOperator) {
            input.value = event.target.textContent;
            currentOperator = null;
        } else {
            input.value = input.value + event.target.textContent;
        }
        currentExpression = currentExpression + event.target.textContent;
        expressionToLog = expressionToLog + event.target.textContent;
    })
})

// clear log

const clearLogButton = document.getElementsByClassName('clear')[0];
clearLogButton.addEventListener("click", event => {
    logger.innerHTML = '';
})
