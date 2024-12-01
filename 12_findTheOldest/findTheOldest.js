const findTheOldest = function(people) {
    const mapped = people.map(person => {
        if ('yearOfDeath' in person) {
            person.age = person.yearOfDeath - person.yearOfBirth;
        } else {
            person.age = new Date().getFullYear() - person.yearOfBirth;
        };

        return person;
        
    })
        
    mapped.sort((a, b) => b.age - a.age)

    return mapped[0];
};

// Do not edit below this line
module.exports = findTheOldest;
