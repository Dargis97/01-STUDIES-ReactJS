console.log('Labas');

const data = [
  { id: 1, type: 'man', name: 'Lina', color: 'blue' },
  { id: 2, type: 'car', name: 'Opel', color: 'red' },
  { id: 3, type: 'animal', name: 'Vilkas', color: 'green' },
  { id: 4, type: 'fish', name: 'Ungurys', color: 'yellow' },
  { id: 5, type: 'man', name: 'Tomas', color: 'green' },
  { id: 6, type: 'animal', name: 'Bebras', color: 'red' },
  { id: 7, type: 'animal', name: 'Barsukas', color: 'green' },
  { id: 8, type: 'car', name: 'MB', color: 'blue' },
  { id: 9, type: 'car', name: 'ZIL', color: 'red' },
  { id: 10, type: 'man', name: 'Teta Toma', color: 'yellow' },
];

const data2 = [
  { id: 1, list: [8, 8, 22], color: 'red' },
  { id: 2, list: [74, 5, 220, 7], color: 'blue' },
  { id: 3, list: [8, 1, 0, 0, 8, 22], color: 'red' },
];

// console.log(data);
// data.forEach((e) => console.log(e.name));

const newData1 = data.map((c) => ({
  ...c,
  color: c.color == 'red' ? { ...c, color: 'orange' } : { ...c },
}));
// console.log(newData1);

const newData2 = data.map((c) =>
  c.id % 2 == 0 && c.type == 'car' ? { ...c, color: 'black' } : { ...c }
);
// console.log(newData2);

const newData3 = data.map((c) =>
  c.name.length < 4 ? { ...c, name: c.name.padEnd(8, '*') } : { ...c }
);

// console.log(newData3);

const newData4 = data2.map((c) => ({ ...c, list: [...c.list, 0] }));
// console.log(newData4);

const newData5 = data2.filter((c) => c.color == 'red');

// console.log(newData5);

// const newData6 = data
//   .filter((c) => c.type == 'animal')
//   .forEach((e) => console.log(e.name));

const newData7 = data.filter((c) => c.color == 'green' && c.type == 'animal');
// console.log(newData7);

const newData8 = data
  .filter((c) => c.type == 'car' || c.type == 'man')
  .map((e) => (e.color != 'red' ? { ...e, color: 'black' } : { ...e }));

// console.log(newData8);

const newData9 = data.filter((c) => c.id != 6);

// console.log(newData9);

const newData10 = [...data];
const newData11 = [...data];
const newData12 = [...data];
const newData13 = [...data];

// newData10.sort((a, b) => {
//   if (a.name > b.name) {
//     return 1;
//   }
//   if (a.name < b.name) {
//     return -1;
//   }
//   return 0;
// });
// sortinimas pagal abecele
newData10.sort((a, b) => a.name.localeCompare(b.name));
// console.log(newData10);

// sortinimas pagal number
newData11.sort((a, b) => b.id - a.id);
// console.log(newData11);

newData12.sort((a, b) => b.name.length - a.name.length);
// console.log(newData12);

newData13.sort((a, b) => (b.type == 'car' ? 1 : -1));
console.log(newData13);
