console.log('Labutis');

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1) + min);
}

const cats = [
  { name: 'Pilkis', weight: 4 },

  { name: 'Murka', weight: 7 },

  { name: 'Keris', weight: 3 },
];
const words = ['yes', 'no'];

const cats2 = cats.map((c) => ({ ...c, weight: c.weight + 1 }));

console.log(cats2);

const cats3 = cats.map((c) => ({ ...c, weight: rand(3, 10) }));
console.log(cats3);

// const cats4 = cats.map((c) => ({
//     ...c,
//     takesPill: words[Math.floor(Math.random() * words.length)],
// }));
// console.log(cats4);

const cats5 = cats.map((c) => ({ ...c, takesPill: rand(0, 1) ? 'yes' : 'no' }));
console.log(cats5);

// const mas = [...Array(5)].map((_) => rand(100, 999));

// console.log(mas);

// // forEach metodas

// const fe = mas.forEach((e) => e);
// const map = mas.map((e) => e + 1);

// console.log(fe);
// console.log(map);

// // function arrayOfNumber(length, min, max) {
// //   const array = [];
// //   for (let i = 0; i < length; i++) {
// //     array.push(Math.floor(Math.random() * (max - min + 1) + min));
// //   }

// //   return array;
// // }
// // console.log(arrayOfNumber(10, 100, 999));

