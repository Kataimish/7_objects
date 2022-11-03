// Задание 1

let persons = [
  { name: "Michael", age: 30 },
  { name: "Anton", age: 29 },
  { name: "Svetlana", age: 31 },
  { name: "Egor", age: 27 },
  { name: "Igor", age: 42 },
  { name: "Tatiana", age: 15 },
];

function getInfo(arr) {
  const getOldPers = arr.reduce((a, b) => {
    if (a.age > b.age) {
      return a;
    }
    return b;
  });
  const getAverAge = arr.reduce((a, b) => a + b.age, 0) / arr.length;
  const newList = {};
  newList.name = getOldPers.name;
  newList.age = getAverAge;
  return newList;
}
console.log(getInfo(persons));
