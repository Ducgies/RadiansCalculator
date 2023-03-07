function looper(numerator, denominator) {
    for (; i <= numerator; i++) {
        if ((numerator % i == 0)&&(denominator % i == 0)) {
            newNumerator = numerator/i
            newDenominator = denominator/i
        }
    }
}
let numerator = prompt("Please enter a degree: ")

let denominator = 180

let newNumerator = 0

let newDenominator = 0

let i = 1

looper(numerator, denominator)
console.log((newNumerator) + "pi/" + (newDenominator))