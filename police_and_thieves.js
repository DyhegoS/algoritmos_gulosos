var catchThieves = function (arr, n, k) {
    let count = 0;
    let thieves = []
    
    for(let i = 0; i < n; i++){
        if(arr[i] === "T"){
            thieves.push("T");
        }
    }

    for(let i = 0; i < n; i++){
        
    }
}

const entrada1 = {
    "n": 5,
    "k": 1,
    "arr": ["P", "T", "T", "P", "T"]
}
const entrada2 = {
    "n": 6,
    "k": 2,
    "arr": ["T", "T", "P", "P", "T", "P"]
}

console.log(catchThieves(entrada1.arr, entrada1.n, entrada1.k))
console.log(catchThieves(entrada2.arr, entrada2.n, entrada2.k))
