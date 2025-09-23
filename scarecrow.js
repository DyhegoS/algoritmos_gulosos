var minimumScarecrows = function(n, field){
    const fieldArr = field.split("");
    let scarecrow = 0;

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