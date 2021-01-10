let startNum = 7;
let finishNum = 15;
let counter = function(){
  console.log(startNum)
  startNum+=1;

}
const TIME = (finishNum - startNum + 1) * 1000;
const intervalId = setInterval(counter,1000)
setTimeout(function(){clearInterval(intervalId)}, TIME)
