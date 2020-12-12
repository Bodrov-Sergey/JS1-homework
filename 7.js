let even=0, odd=0, nul=0;
let arr = [1, 2, 3, 54, 12, 7, 0, NaN, null, '0', 'hi'];
arr.forEach(function(item, index, array){
    item = +item;
    if(Number.isNaN(item)){
        
    }else if(item!=0){
        if (item%2==0){
            even++;
        } else {
            odd++
        }
    } else{
        nul++
    }

});
console.log(`even: ${even}, odd: ${odd}, nul: ${nul}`)
