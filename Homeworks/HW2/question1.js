function findUserById(users, id){
	/* ... Your implementation here */
    let callback1 = (x)=> x.id == id;
    let userMatch = users.find(callback1) || null;
    let name;
    !(userMatch || (name = userMatch) ) || (name = userMatch.name);

    return name;

}


function computeBMIs(users){
    /* ... Your implementation here */
    var bmiArray = [];
    let callback1 = (x) => x.weight/ (x.height * x.height);   
    bmiUsers = users.map(callback1);
    return bmiUsers;
}

var users = [
    {id: 1, name: "Marta", height: 1.74, weight: 59}, 
    {id: 2, name: "Josh", height: 1.80, weight: 88},
    {id: 3, name: "Achilles", height: 1.68, weight: 63}, 
    {id: 4, name: "Julius", height: 1.93, weight: 97},
];

id = 2;

console.log(findUserById(users, id));
console.log(computeBMIs(users));