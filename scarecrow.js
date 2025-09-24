var minimumScarecrows = function(n, field){
    const fieldArr = field.split("").sort();
    let scarecrow = 0;
    let fertile = 0;
    let fertileCount = 0;
    for(let i = 0; i < n - 1; i++){
        if(fieldArr[i] == "."){
            fertile = true;
            fertileCount++;
            scarecrow++;
            while(fertile){
               if(fertileCount == 3){
                    break;
               }
            }
        }
    }

    return scarecrow;

};

const entrada1 = {
    "n": 3,
    "field": ".#."
};

const entrada2 = {
    "n": 11,
    "field": "...##....##"
};



const entrada3 = {
    "n": 2,
    "field": "##"
};

console.log(minimumScarecrows(entrada1.n, entrada1.field));
console.log(minimumScarecrows(entrada2.n, entrada2.field));
console.log(minimumScarecrows(entrada3.n, entrada3.field));