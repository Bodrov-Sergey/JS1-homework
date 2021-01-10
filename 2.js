function numIsPrime(num) {
    for (let i = 2; i < num - 1; i++) {
        if (num % i == 0) {
            num = "not prime";
            return num;
        }
    }
    if (num == 2 || num==0) {
        num = "not prime";
    } else {
        num = "prime";
    }
    return num;
};
let n = 8;
n = Math.abs(n);
if (n <= 1000) {
    console.log(numIsPrime(n));
} else {
    console.log("ERROR. NUMBER IS NOT CORRECT")
}
