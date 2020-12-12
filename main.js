//VALUTE CONVENTER

//money = prompt("enter your summ in $");
//money = money*75.48;
//alert(money);

//Задание 1 практика 1

//name = prompt("What is your name?");
//surname = prompt('What is your surname?');
//alert(`Hallo, ${name} ${surname}!`);


//задание 1


//let newNumber = prompt(`your number:`);
//newNumber = +newNumber;
//if (typeof newNumber === "number") {
//    if (Number.isNaN(newNumber)) {
//        console.log(`упс кажется вы ошиблись`);
//    } else {
//        if (newNumber % 2 == 0) {
//            console.log(`even`);
//        } else {
//            console.log(`odd`);
//        }
//    }
//}

//задание 2

//let x = 0;
//x = typeof x;
//console.log(x)
//switch (x) { 
//    case "boolean":
//        console.log('x-логический тип');
//        break;
//    case "number":
//        console.log('x-число');
//        break;
//    case "string":
//        console.log('x-строка');
//        break;
//    default:
//        console.log('Тип х не определен');
//}

//задание 3

//let newWord = prompt("введите слово");
//let lengthWord = newWord.length;
//lengthWord-=1;
//let result= "";
//while (lengthWord>=0) {
//    result+=newWord.slice(lengthWord, lengthWord+1);
//    lengthWord-=1;
//}
//console.log(result);

//задание 4

//let randomNum = Math.random();
//randomNum*=100;
//randomNum = Math.round(randomNum);
//console.log(randomNum);

//задание 5
//let arr = [13, 15, 17, 19, 23, 9];
//console.log(arr.length);
//for(let i=0; i<arr.length; i++){
//    console.log(arr[i]);
//}

//задание 6
//let arr = [12, 12, 12, 12, 12, 13];
//let result = true;
//for(let i=0; i<arr.length-1; i++){
//    if (arr[i]!=arr[i+1]){
//        result = false;
//    }
//}
//console.log(result);

//задание 7
//let even=0, odd=0, nul=0;
//let arr = [1, 2, 3, 54, 12, 7, 0, NaN, null, '0', 'hi'];
//arr.forEach(function(item, index, array){
//    item = +item;
//    if(Number.isNaN(item)){
//        
//    }else if(item!=0){
//        if (item%2==0){
//            even++;
//        } else {
//            odd++
//        }
//    } else{
//        nul++
//    }
//
//});
//console.log(`even: ${even}, odd: ${odd}, nul: ${nul}`)

//задание 8
let newMap = new Map();
newMap.set(true, "answer");
newMap.set(13, false);
newMap.set("jj", 90);

for (let elem of newMap){
    console.log(`Ключ - ${elem[0]}, значение - ${elem[0]} `)
}
