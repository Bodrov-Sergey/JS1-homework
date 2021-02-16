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
//let num = -10;
//
//function isEven(number) {
//    if (number == 0) {
//        return true;
//    } else if (number == 1) {
//        return false;
//    } else {
//        return isEven(number-2);
//    }
//
//};
//num = Math.abs(num)
//console.log(isEven(num));

//let word = "BingoBoom";

//function range (start, end) {
//    let result = [];
//    while(start <= end){
//        result.push(start);
//        start+=1;
//    }
//    console.log(result);
//    return result;
//}
//function sum (arr){
//    let result = 0;
//    for (let elem in arr){
//        result+=arr[elem];
//    }
//    return result;
//}
//console.log(sum(range(1,10)))
//function reverseArray(arr) {
//    let result = [];
//    for (let i = (arr.length) - 1; i >= 0; i -= 1) {
//        result.push(arr[i]);
//    }
//    return result;
//}
//console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//
//function reverseArrayInPlace(arr) {
//    const LEN = (arr.length) - 1;
//    for (i = (arr.length) - 1; i >= (arr.length) / 2; i -= 1) {
//        let j = arr.length-1-i;
//        let saver = arr[i];
//        arr[i] = arr[j];
//        arr[j] = saver;
//    }
//    return arr;
//}
//console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
//let arr =[[1,2,3],[4,5,6],[7,8,9]];
//function reduction(array){
//    let result = array.reduce((a,b)=> a.concat(b));
//    return result;
//}
//console.log(reduction(arr));

//function loop (num, ifFunc, upgradeFunc, bodyFunc){
//    if( ifFunc(num) ){
//        let res = bodyFunc(num);
//        num = upgradeFunc(bodyFunc(num));
//        return loop(num, ifFunc, upgradeFunc, bodyFunc);
//    } else{
//        return num;
//    }
//};
//function ifFun(number){
//    if (number<25){
//        return true;
//    } else{
//        return false;
//    }
//}
//function upgradeFun(result){
//    result+=1;
//    return result;
//}
//function bodyFun(number){
//    return number;
//}
//console.log(loop(20, ifFun, upgradeFun, bodyFun));

//Задание 1
//function check (obj){
//    for (let key in obj){
//        if(obj.hasOwnProperty(key)){
//            console.log(key);
//        };
//    };
//};
//let parent = {"male": "not choosen"};
//let child = Object.create(parent);
//child = {"name": "Mike",
//             "graduate": "school"
//            };
//check(child);

//Задание 2
//function checker(obj, str){
//    if(obj.hasOwnProperty(str)){
//        return true;
//    } else{
//        return false;
//    }
//}
//let object = {"life": "regular"};
//console.log(checker(object, "greenn"))

//Задание 3
//let obj = {};
//obj = Object.create(null);
//console.log(Object.getPrototypeOf(obj));

//Задание 4
//function ElectricalApliances(name, consumption) {
//    this.name = name,
//    this.consumptionOfTheElectricalAppliance = consumption;
//    this.status = false;
//    ElectricalApliances.generalConsumption = 0;
//
//}
//ElectricalApliances.prototype.turnOn = function () {
//    console.log(` ${this.name} is turned on`);
//    if (!this.status) {
//        this.status = true;
//        ElectricalApliances.generalConsumption += this.consumptionOfTheElectricalAppliance;
//    }
//}
//ElectricalApliances.prototype.turnOff = function () {
//    console.log(`${this.name} is turned off`);
//    if (this.status) {
//        this.status = false;
//        ElectricalApliances.generalConsumption -= this.consumptionOfTheElectricalAppliance;
//    }
//}
//const kettle = new ElectricalApliances("kettle", 150);
//const laptop = new ElectricalApliances("laptop", 200);
//kettle.mission = "Boil";
//kettle.backlightCol = "Basic white";
//kettle.changeCol = function (color) {
//    this.backlightCol = color;
//};
//laptop.sleepMode = false;
//laptop.turnOnSleepMode = function(){
//    if (this.sleepMode==true || this.status==false){
//        console.log(`Your laptop is aleready in sleep mode or turned off`)
//    } else {
//        this.sleepMode=true;
//        ElectricalApliances.generalConsumption -= (this.consumptionOfTheElectricalAppliance / 2)
//    }
//}
//laptop.turnOffSleepMode = function(){
//    if (this.sleepMode==false || this.status==false){
//        console.log(`Your laptop is not in sleep mode or turned off`)
//    } else {
//        this.sleepMode=false;
//        ElectricalApliances.generalConsumption += (this.consumptionOfTheElectricalAppliance / 2)
//    }
//}
//laptop.turnOff = function() {
//    if (this.sleepMode==false || this.status==false){
//    } else {
//        this.sleepMode=false;
//        ElectricalApliances.generalConsumption += (this.consumptionOfTheElectricalAppliance / 2)
//    }
//    console.log(`${this.name} is turned off`);
//    if (this.status) {
//        this.status = false;
//        ElectricalApliances.generalConsumption -= this.consumptionOfTheElectricalAppliance;
//    }
//}

//Задание 5
//class ElectricalApliances {
//    constructor(name, consumption) {
//        this.name = name;
//        this.consumptionOfTheElectricalAppliance = consumption;
//        this.status = false;
//        ElectricalApliances.generalConsumption = 0;
//    }
//    turnOn() {
//        console.log(` ${this.name} is turned on`);
//        if (!this.status) {
//            this.status = true;
//            ElectricalApliances.generalConsumption += this.consumptionOfTheElectricalAppliance;
//        }
//    }
//    turnOff() {
//        console.log(`${this.name} is turned off`);
//        if (this.status) {
//            this.status = false;
//            ElectricalApliances.generalConsumption -= this.consumptionOfTheElectricalAppliance;
//        }
//    }
//}
//class AplianceWithBacklight extends ElectricalApliances {
//    constructor(name, consumption) {
//        super(name, consumption);
//        this.backlightCol = "Basic white";
//    }
//    changeCol(color) {
//        this.backlightCol = color;
//    }
//}
//class AplianceWithSleepmode extends ElectricalApliances {
//    constructor(name, consumption) {
//        super(name, consumption);
//        this.sleepMode = false;
//    }
//    turnOnSleepMode() {
//        if (this.sleepMode == true || this.status == false) {
//            console.log(`Your laptop is aleready in sleep mode or turned off`)
//        } else {
//            this.sleepMode = true;
//            ElectricalApliances.generalConsumption -= (this.consumptionOfTheElectricalAppliance / 2)
//        }
//    }
//    turnOffSleepMode() {
//        if (this.sleepMode == false || this.status == false) {
//            console.log(`Your laptop is not in sleep mode or turned off`)
//        } else {
//            this.sleepMode = false;
//            ElectricalApliances.generalConsumption += (this.consumptionOfTheElectricalAppliance / 2)
//        }
//    }
//    turnOff() {
//        if (this.sleepMode == false || this.status == false) {} else {
//            this.sleepMode = false;
//            ElectricalApliances.generalConsumption += (this.consumptionOfTheElectricalAppliance / 2)
//        }
//        console.log(`${this.name} is turned off`);
//        if (this.status) {
//            this.status = false;
//            ElectricalApliances.generalConsumption -= this.consumptionOfTheElectricalAppliance;
//        }
//    }
//}
//const kettle = new AplianceWithBacklight("kettle", 150);
//const laptop = new AplianceWithSleepmode("laptop", 200);
//kettle.mission = "Boil";
//laptop.mission = "Attract";

//Задание 1
//const parser = new DOMParser();
//const xmlString = `<list>
//  <student>
//    <name lang="en">
//      <first>Ivan</first>
//      <second>Ivanov</second>
//    </name>
//    <age>35</age>
//    <prof>teacher</prof>
//  </student>
//  <student>
//    <name lang="ru">
//      <first>Петр</first>
//      <second>Петров</second>
//    </name>
//    <age>58</age>
//    <prof>driver</prof>
//  </student>
//</list>`
//const xmlDOM = parser.parseFromString(xmlString, "text/xml");
//const list = xmlDOM.querySelector("list");
//const students = list.querySelectorAll("student");
//
//const studentIvanName = students[0].querySelector("name");
//const studentIvanFirst = studentIvanName.querySelector("first");
//const studentIvanSecond = studentIvanName.querySelector("second");
//const studentIvanAge = students[0].querySelector("age");
//const studentIvanProf = students[0].querySelector("prof");
//
//const studentPetrName = students[1].querySelector("name");
//const studentPetrFirst = studentPetrName.querySelector("first");
//const studentPetrSecond = studentPetrName.querySelector("second");
//const studentPetrAge = students[1].querySelector("age");
//const studentPetrProf = students[1].querySelector("prof");
//
//const studentIvanLangValue = studentIvanName.getAttribute("lang");
//const studentPetrLangValue = studentPetrName.getAttribute("lang");
//
//
//class Student{
//    constructor(fName, sName, age, prof, lang){
//        this.name =`${fName.textContent} ${sName.textContent}`;
//        this.age = age.textContent;
//        this.prof = prof.textContent;
//        this.lang = lang;
//    }
//}
//const studentIvan = new Student(studentIvanFirst, studentIvanSecond, studentIvanAge, studentIvanProf, studentIvanLangValue);
//const studentPetr = new Student(studentPetrFirst, studentPetrSecond, studentPetrAge, studentPetrProf, studentPetrLangValue);
//
//let resArr = [studentIvan, studentPetr]
//
//const rusult = {
//    list: list
//}
//console.log(rusult);

//Задание 2
//const JSONString = `{
// "list": [
//  {
//   "name": "Petr",
//   "age": "20",
//   "prof": "mechanic"
//  },
//  {
//   "name": "Vova",
//   "age": "60",
//   "prof": "pilot"
//  }
// ]
//}`;
//const data = JSON.parse(JSONString);
//const list = data.list;
//
//const petrName = list[0].name;
//const petrAge = list[0].age;
//const petrProf = list[0].prof;
//
//const vovaName = list[1].name;
//const vovaAge = list[1].age;
//const vovaProf = list[1].prof;
//
//class Boys{
//    constructor(name, age, prof){
//        this.name = name;
//        this.age = age;
//        this.prof = prof;
//    }
//}
//const boyPetr = new Boys(petrName, petrAge, petrProf);
//const boyVova = new Boys(vovaName, vovaAge, vovaProf);
//
//const resArr = [boyPetr,boyVova];
//const result = {
//    list: resArr
//}
//console.log(result);

//Задание 3
//function useRequest(url, callback) {
//    let xhr = new XMLHttpRequest();
//    xhr.open("GET", url);
//    xhr.onload = function () {
//        if (xhr.status >= 400) {
//            console.error(xhr.response);
//        } else {
//            const res = JSON.parse(xhr.response);
//            if (callback) {
//                callback(res);
//            }
//        }
//    }
//    xhr.onerror = () => {
//        console.error(xhr.response)
//    }
//    xhr.send();
//}
//const btn = document.querySelector(".button");
//const img = document.querySelector(".images");
//let images = '';
//
//function displayRes(apiData) {
//    let input = document.querySelector(".input").value;
//    input = +input;
//    if (input >= 1 & input <= 10) {
//        for (let elem of apiData) {
//            const imgBlock = `<img class="container__img" src="${elem.download_url}">`;
//            images += imgBlock;
//        }
//    } else {
//        const imgBlock = '<p>число вне диапазона от 1 до 10</p>';
//        images += imgBlock;
//    }
//    img.innerHTML = images;
//}
//btn.addEventListener("click", ()=>{useRequest("https://picsum.photos/v2/list?limit=10",displayRes);})

//Задание 4
//let size = [];
//const img = document.querySelector(".images");
//function checker(size){
//    size =+size;
//    if ((size<=300)&(size>=100)&!(size.isNaN)){
//        return true;
//    } else{
//        return false;
//    }
//};
//function pusher(inp){
//    let num = document.querySelector(inp).value;
//    num=+num;
//    size.push(num);
//};
//function resetting(inp){document.querySelector(inp).value = ''};
//function counter(inp){
//    if (size.length==2 || size.length==0){
//        size=[];
//        pusher(inp);
//        resetting(inp);
//        return "введите второе число от 100 до 300"
//    }else if (size.length==1){
//        pusher(inp);
//        resetting(inp);
//        if (checker(size[0])&checker(size[1])){
//            fetch(`https://picsum.photos/${size[0]}/${size[1]}`)
//                .then((response)=>{
//                    img.innerHTML = `<img src="${response.url}"> <p>Введите число от 100 до 300 для новой картинки</p>`;
//                })
//                .catch(()=>{
//                return "ошибка"
//                })
//
//        } else{
//            return "одно из чисел или оба вне диапазона от 100 до 300"
//        }
//    }
//
//};
//document.querySelector(".button").addEventListener('click', async ()=>{
//    let res = await counter(".input");
//    img.innerHTML = res;
//});

//Задание 5
//let local;
//function checker(input){
//    let num = document.querySelector(input).value;
//    num=+num;
//    if ((num<=10)&(num>=1)&!(num.isNaN)){
//        return true
//    } else{
//        return false
//    }
//};
//function resetting(input1, input2){
//    document.querySelector(input1).value = '';
//    document.querySelector(input2).value = '';
//};
//function picShower(input1, input2){
//    if (checker(input1)&checker(input2)){
//        fetch (`https://picsum.photos/v2/list?page=${document.querySelector(input1).value}&limit=${document.querySelector(input2).value}`)
//            .then((response)=>{
//                const res = response.json();
//                return res;
//            })
//            .then((json)=>{
//                local = JSON.stringify(json);
//                localStorage.clear();
//                localStorage.setItem("images",local);
//                let result = '';
//                for (let elem of json) {
//                    const imgBlock = `<img class="container__img" src="${elem.download_url}">`;
//                    result += imgBlock;
//                }
//                document.querySelector('.block').innerHTML = result;
//            })
//            .catch(()=>{return "error";})
//    } else if (checker(input1)) {
//        return "Лимит вне диапазона от 1 до 10";
//    } else if (checker(input2)) {
//        return "Номер страницы вне диапазона от 1 до 10";
//    } else {
//        return "Номер страницы и лимит вне диапазона от 1 до 10";
//    }
//}
//document.querySelector(".button_5task").addEventListener('click', async ()=>{
//    let result = await picShower("#input1","#input2");
//    document.querySelector('.block').innerHTML = result;
//    resetting("#input1","#input2");
//});
//if (localStorage.length==1){
//    let baseLocal = localStorage.getItem("images");
//    baseLocal = JSON.parse(baseLocal);
//    let result = '';
//    for (let elem of a=baseLocal) {
//        const imgBlock = `<img class="container__img" src="${elem.download_url}">`;
//        result += imgBlock;
//    }
//    document.querySelector('.block').innerHTML = result;
//
//}
