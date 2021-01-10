//Задание 1
//let even=0, odd=0, nul=0, i=0;
//let arr = [2, 2, 3, 54, 12, 7, 0, NaN, null, '0', 'hi'];
//function transfInNum(){
//    arr[i] = +arr[i];
//};
//function parityCalc(){
//    if(Number.isNaN(arr[i])){
//        //empty
//    }else if(arr[i]!=0){
//        if (arr[i]%2==0){
//            even++;
//        } else {
//            odd++;
//        }
//    } else{
//        nul++;
//    }
//    i++;
//
//};
// while (i<arr.length){
//    transfInNum();
//    parityCalc();
//};
//console.log(`even: ${even}, odd: ${odd}, nul: ${nul}`)
//
//задние 2
//function numIsPrime(num) {
//    for (let i = 2; i < num - 1; i++) {
//        if (num % i == 0) {
//            num = "not prime";
//            return num;
//        }
//    }
//    if (num == 2 || num==0) {
//        num = "not prime";
//    } else {
//        num = "prime";
//    }
//    return num;
//};
//let n = 8;
//n = Math.abs(n);
//if (n <= 1000) {
//    console.log(numIsPrime(n));
//} else {
//    console.log("ERROR. NUMBER IS NOT CORRECT")
//}
//
//Задание 3
//let num1 = 1, num2 = 2;
//function takeNum (number1, sumFunc){
//    return sumFunc(num2, number1);
//}
//function funcSum (number2, n1){
//    return number2+n1;
//}
//const result = takeNum(num1, funcSum);
//console.log(result);


//Задание 4
//let startNum = 7;
//let finishNum = 15;
//let counter = function(){
//  console.log(startNum)
//  startNum+=1;
//
//}
//const TIME = (finishNum - startNum + 1) * 1000;
//const intervalId = setInterval(counter,1000)
//setTimeout(function(){clearInterval(intervalId)}, TIME)

//Задание 5
//x=2;
//n=10;
//const degreeFunc = (num, degree) => {
//    const number = num;
//    for (let i =1; i<degree; i++){
//        num = num * number;
//    };
//    return num;
//}
//console.log(degreeFunc(x,n));
