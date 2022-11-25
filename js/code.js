class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) { //where to display the output display text for the cal
      this.previousOperandTextElement = previousOperandTextElement //variables for this class,set it inside the calculator class
      this.currentOperandTextElement = currentOperandTextElement
      this.clear()      //clear all inputs and reset to default values
    }
  
    clear() {
      this.currentOperand = ''          // '' replaces text with an empty string
      this.previousOperand = ''
      this.operation = undefined
    }
  
    delete() {
      this.currentOperand = this.currentOperand.toString().slice(0, -1)         //clears range of numbers
    }
  
    appendNumber(number) {          //click on a number, then displays on the output 
      if (number === '.' && this.currentOperand.includes('.')) return       //stops function from executing further (adding a single period.)
      this.currentOperand = this.currentOperand.toString() + number.toString()      //want numbers to be appended and not added (as strings)
    }
  
    chooseOperation(operation) {        
      if (this.currentOperand === '') return        // not let us execute any further
      if (this.previousOperand !== '') {
        this.compute()
      }
      this.operation = operation        //set to operation so that the cal knows which operation to use when it computes the value
      this.previousOperand = this.currentOperand        //done typing current number and recycled over to previous operand and clear out new current operand
      this.currentOperand = ''
    }
  //COMPUTATION
    compute() {             //compute a single value for what we need to display on the cal
      let computation           //result of compute function
      const prev = parseFloat(this.previousOperand)         //number version of the previous operand (converting string to number)
      const current = parseFloat(this.currentOperand)
      if (isNaN(prev) || isNaN(current)) return         //user doesn't enter anything, we don't want the code to run (which cancels the function completely)
      switch (this.operation) {
        /* The CASE expression goes through conditions and returns a value 
        when the first condition is met (like an if-then-else statement). 
        So, once a condition is true, it will stop reading and return the result. 
        If no conditions are true, it returns the value in the ELSE clause */
        case '+':                         
          computation = prev + current
          break
        case '-':
          computation = prev - current
          break
        case '*':
          computation = prev * current
          break
        case '÷':
          computation = prev / current
          break
        default:        //else statement (incase none of these values get executed - invalid operation)
          return
      }
      this.currentOperand = computation
      this.operation = undefined
      this.previousOperand = ''
    }
  
    getDisplayNumber(number) {      //update values inside the output
      const stringNumber = number.toString()
      const integerDigits = parseFloat(stringNumber.split('.')[0]) //decimal
      const decimalDigits = stringNumber.split('.')[1]
      let integerDisplay
      if (isNaN(integerDigits)) {
        integerDisplay = ''
      } else {
        integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
      }
      if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`
      } else {
        return integerDisplay
      }
    }
  
    updateDisplay() {           //update values inside the output
      this.currentOperandTextElement.innerText =        
        this.getDisplayNumber(this.currentOperand)
      if (this.operation != null) {
        this.previousOperandTextElement.innerText =
          `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
      } else {
        this.previousOperandTextElement.innerText = ''
      }
    }
  }
  
  //VARIABLES
  const numberButtons = document.querySelectorAll('[data-number]')  // querySelectorAll ,all elements that match a certain string, data number gets all number elements
  const operationButtons = document.querySelectorAll('[data-operation]')
  const equalsButton = document.querySelector('[data-equals]')  //querySelector used just for one element
  const deleteButton = document.querySelector('[data-delete]')
  const allClearButton = document.querySelector('[data-all-clear]')
  const previousOperandTextElement = document.querySelector('[data-previous-operand]')
  const currentOperandTextElement = document.querySelector('[data-current-operand]')
  
  //CALCULATOR (making the variables above operate on the cal)
  const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)      //new defines classes
  //NUMBERS BUTTON
  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })
  //OPERATIONS BUTTON
  operationButtons.forEach(button => {
    button.addEventListener('click', () => {        //each one
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay()        //every-time a number is clicked, the display is updated
    })
  })
  //EQUALS BUTTON
  equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
  })
  //ALL CLEAR BUTTON
  allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
  })
  
  //DELETE BUTTON
  deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
  })