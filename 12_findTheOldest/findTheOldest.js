const findTheOldest = function(people) {
    today = new Date();
    n = people.length;
    for (i = 0; i < n; i++) {
        if (people[i].yearOfDeath === undefined) {
            people[i].age = today.getFullYear() - people[i].yearOfBirth;
        }
        else{
            people[i].age = people[i].yearOfDeath - people[i].yearOfBirth;
        }
        console.log(people[i])
    }
    oldest = people[0];
    for (i = 0; i < (n-1); i++) {
        if (oldest.age > people[i+1].age) {
            oldest = oldest;
        }
        else {
            oldest = people[i+1];
        }
    }
    console.log(oldest.age, oldest.name);
    return oldest;
}
    

// Do not edit below this line
module.exports = findTheOldest;
