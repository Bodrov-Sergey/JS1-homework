
let num1 = 1, num2 = 2;
function takeNum (number1, sumFunc){
    return sumFunc(num2, number1);
}
function funcSum (number2, n1){
    return number2+n1;
}
const result = takeNum(num1, funcSum);
console.log(result);
