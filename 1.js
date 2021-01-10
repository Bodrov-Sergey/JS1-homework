let even=0, odd=0, nul=0, i=0;
let arr = [2, 2, 3, 54, 12, 7, 0, NaN, null, '0', 'hi'];
function transfInNum(){
    arr[i] = +arr[i];
};
function parityCalc(){
    if(Number.isNaN(arr[i])){
        //empty
    }else if(arr[i]!=0){
        if (arr[i]%2==0){
            even++;
        } else {
            odd++;
        }
    } else{
        nul++;
    }
    i++;

};
 while (i<arr.length){
    transfInNum();
    parityCalc();
};
console.log(`even: ${even}, odd: ${odd}, nul: ${nul}`)
