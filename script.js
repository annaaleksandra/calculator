class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operator = undefined;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === ',' && this.currentOperand.includes(',')) return
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operator) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operator = operator
        this.previousOperand = this.currentOperand
        this.currentOperand = '';
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousOperand) //converts strings back to numbers
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return //checks that input is numbers
        switch (this.operator) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '/':
                computation = prev / current
                break
            default: 
                return
        }
        this.currentOperand = computation
        this.operator = undefined
        this.previousOperand = ''
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split(',')[0])
        const decimalDigits = stringNumber.split(',')[1]
        let intergerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay= ''
        } else {
            intergerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0}) 
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand
        if (this.operator != null) {
            this.previousOperandTextElement.innerText =
                `${this.previousOperand} ${this.operator}`
        } else {
            this.previousOperandTextElement.innerText = ''
        }
    }
}


const numberButtons = document.querySelectorAll('.digit');
const operationButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('#equals');
const backspaceButton = document.querySelector('#backspace');
const allclearButton = document.querySelector('#allclear');
const previousOperandTextElement = document.querySelector('.previous-operand');
const currentOperandTextElement = document.querySelector('.current-operand')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allclearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

backspaceButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})

// function add(a, b) {
//     return a + b
// }

// function substract(a, b) {
//     return a - b
// }

// function multiply(a, b) {
//     return a * b
// }

// function divide(a, b) {
//     return a / b
// }

// let firstValue = document.getElementById("numbers").value
// console.log(firstValue)

// let operator = document.getElementsByClassName("operator");
// console.table(operator)


// function operate(firstValue, secondValue, operator) {
//     if (document.getElementById("add")) {
//         return firstValue + secondValue
//     } else if (document.getElementById("substract")){
//         return firstValue - secondValue
//     } else if (document.getElementById("multiply")) {
//         return firstValue * secondValue
//     } else if (document.getElementById("divide")) {
//         return firstValue / secondValue
//     } else {
//         return error
//     }
// }



// //clicks 0
// const button0 = document.getElementById('0')
// button0.addEventListener('click', clicked0);

// function clicked0(){
//     document.getElementById("numbers").value="0";
    
// }

// //clicks 1
// const button1 = document.getElementById('1')
// button1.addEventListener('click', clicked1);

// function clicked1(){
//     document.getElementById("numbers").value="1";
// }

// //clicks 2
// const button2 = document.getElementById('2')
// button2.addEventListener('click', clicked2);

// function clicked2(){
//     document.getElementById("numbers").value="2";
// }

// //clicks 3
// const button3 = document.getElementById('3')
// button3.addEventListener('click', clicked3);

// function clicked3(){
//     document.getElementById("numbers").value="3";
// }

// //clicks 4
// const button4 = document.getElementById('4')
// button4.addEventListener('click', clicked4);

// function clicked4(){
//     document.getElementById("numbers").value="4";
// }

// //clicks 5
// const button5 = document.getElementById('5')
// button5.addEventListener('click', clicked5);

// function clicked5(){
//     document.getElementById("numbers").value="5";
// }

// //clicks 6
// const button6 = document.getElementById('6')
// button6.addEventListener('click', clicked6);

// function clicked6(){
//     document.getElementById("numbers").value="6";
// }

// //clicks 7
// const button7 = document.getElementById('7')
// button7.addEventListener('click', clicked7);

// function clicked7(){
//     document.getElementById("numbers").value="7";
// }

// //clicks 8
// const button8 = document.getElementById('8')
// button8.addEventListener('click', clicked8);

// function clicked8(){
//     document.getElementById("numbers").value="8";
// }

// //clicks 9
// const button9 = document.getElementById('9')
// button9.addEventListener('click', clicked9);

// function clicked9(){
//     document.getElementById("numbers").value="9";
// }