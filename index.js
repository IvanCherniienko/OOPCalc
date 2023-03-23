'use strict'

function isValidation(num) {
    return !isNaN(num) && num !== '' && num !== null
}

function Calculator(base) {
  this.base = base
    this.add = function(num) {
        if (isValidation(num)) {
            this.base += num
        }
    }
    this.sub = function(num) {
        if (isValidation(num)) {
            this.base -= num
        }
    }
    this.set = function(num) {
        this.base = num
    }
    this.get = function () {
        return this.base 
    }
}

const calc = new Calculator(100);

calc.add(10) 
calc.add(10) 
calc.add('qwe') 
calc.sub(10)
calc.set(20)
calc.add(10)
calc.set(99)
calc.get() 

console.log(calc.get())
