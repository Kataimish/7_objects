// Задание 1

let persons = [
  { name: "Michael", age: 30 },
  { name: "Anton", age: 29 },
  { name: "Svetlana", age: 31 },
  { name: "Egor", age: 27 },
  { name: "Igor", age: 42 },
  { name: "Tatiana", age: 15 },
];

function getInfo(pers) {
  function getResult(arr) {
    return arr.reduce(function (a, b) {
      if (a.age > b.age) {
        return a;
      }
      return b;
    });
  }
  const answer = getResult(persons);
  console.log(answer.name);

  function getMaxAge(arr) {
    return (
      arr.reduce(function (a, b) {
        return a + b.age;
      }, 0) / arr.length
    );
  }
  console.log(getMaxAge(persons));

  let newList = {};
  newList.name = answer.name;
  newList.age = getMaxAge(persons);
  console.log(newList);
}
getInfo(persons);
