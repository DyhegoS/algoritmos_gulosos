var lemonadeChange = function(bills){
    let cashier = new Map();

    for(let i = 0; i < bills.length; i++){
        if(bills[i] > 5){
            let change = bills[i] - 5;           
            if(cashier.has(change)){
                cashier.set("cas")
            }
            
        }

        cashier.set("cashier", bills[i]);
    }

}

const entrada1 = {
    "bills": [5, 5, 5, 10, 20]
}

const entrada2 = {
    "bills": [5, 5, 10, 10, 20]
}

console.log(lemonadeChange(entrada1.bills));
console.log(lemonadeChange(entrada2.bills));