x=2;
n=10;
const degreeFunc = (num, degree) => {
    const number = num;
    for (let i =1; i<degree; i++){
        num = num * number;
    };
    return num;
}
console.log(degreeFunc(x,n));
