var findLargest = function(n, s){
    
    if(s == 0){
        return -1;
    }
    
    let digits = Array(n).fill(9);
    let sum = 0;
    let currentDigit = 0;

    for(let i = digits.length;i >= 0; i--){
        for(let j = digits[i]; j >= 0; j--){
            currentDigit = digits[j];
        }
        
    }
}

const entrada1 = {
    "n": 2,
    "s": 9
}

const entrada2 = {
    "n": 3,
    "s": 20
}

const entrada3 = {
    "n": 4,
    "s": 0
}

console.log(findLargest(entrada1.n, entrada1.s))
console.log(findLargest(entrada2.n, entrada2.s))
console.log(findLargest(entrada3.n, entrada3.s))
