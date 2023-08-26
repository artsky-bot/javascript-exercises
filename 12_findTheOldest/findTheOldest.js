const findTheOldest = function (people) {
  let oldestAge = 0;
  let oldestPerson;
  const timer = new Date();
  people.reduce((age, person) => {
    if (person.yearOfDeath === undefined) {
      age = timer.getFullYear() - person.yearOfBirth;
    } else {
      age = person.yearOfDeath - person.yearOfBirth;
    }
    if (oldestAge < age) {
      oldestAge = age;
      oldestPerson = person;
    }
  }, 0);
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
