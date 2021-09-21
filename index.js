/* eslint-disable no-console */
// Question 1 - What is the output of each of the console log?
const color = 'red';
const animal = 'dog';
{
  const color = 'blue';
  const animal = 'cat';

  console.log(`log 1 - color: ${color}`); // log 1 - color: blue
  console.log(`log 2 - animal: ${animal}`); // log 2 - animal: cat
}
console.log(`log 3 - color: ${color}`); // log 1 - color: red
console.log(`log 4 - animal: ${animal}`); // log 1 - animal: dog

// Question 2 - What is the output of the console log?
const pr = new Promise((resolve, reject) => {
  setTimeout(() => resolve('foo'), 1000);
  setTimeout(() => resolve('bar'), 500);
});

pr.then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  },
);