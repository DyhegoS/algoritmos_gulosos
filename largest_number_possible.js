var findLargest = function(n, s){
    let sum = 0;
    let result
    if(s == 0){
        return -1;
    }
    
    let digits = Array(n).fill(9);
    for(let i = 0; i < n; i++){
        sum += digits[i]
    }

    if(sum == s){
        console.log(sum)
        
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
