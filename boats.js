var numRescueBoats = function (people, limit) {
    people.sort((a, b) => a - b);

    let boatList = []
    let boat = []
    let boatLimit = limit;
    let boatFull = false;
    
    for (let i = 0; i < people.length; i++) {  
        if(people[i] < boatLimit){
            boat.push(people[i]);
            boatLimit -= people[i];
        }else{
            boatFull = true;
        }
        
        console.log(boatList)
        if(boatFull){
            boatList.push(boat);
        }
        
    }

    return boatList;


}

const entrada1 = {
    "people": [1, 2],
    "limit": 3
}
const entrada2 = {
    "people": [3, 2, 2, 1],
    "limit": 3
}
const entrada3 = {
    "people": [3, 5, 3, 4],
    "limit": 5
}

console.log(numRescueBoats(entrada1.people, entrada1.limit))
console.log(numRescueBoats(entrada2.people, entrada2.limit))
console.log(numRescueBoats(entrada3.people, entrada3.limit))