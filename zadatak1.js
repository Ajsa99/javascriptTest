const array1 = [
  { id: "333222111", name: "Sulejman", age: "22" },
  { id: "321123432", name: "Stefan", age: "25" },
  { id: "222312543", name: "Semir", age: "32" },
];

function getObjects(array, key, value) {
  for (var i = 0; i < array.length; i++) {
    const objekat = array[i];
    if (objekat[key] === value) {
      return objekat;
    }
  }
  return [];
}

console.log(getObjects(array1, "name", "Semir"));
// result: [ { id: '222312543', name: 'Semir', age: '32' } ]

console.log(getObjects(array1, "name", "Suad"));
// result: [ ]
