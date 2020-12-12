
let newWord = prompt("введите слово");
let lengthWord = newWord.length;
lengthWord-=1;
let result= "";
while (lengthWord>=0) {
    result+=newWord.slice(lengthWord, lengthWord+1);
    lengthWord-=1;
}
console.log(result);
