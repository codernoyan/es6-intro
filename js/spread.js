const max = Math.max(12, 78, 85, 999);
// console.log(max);
const numbers = [12, 78, 85, 999];
const largest = Math.max(...numbers);
/* console.log(...numbers);
console.log(largest);
 */
/* const numbers2 = numbers;
numbers.push(52);
numbers.push(7777);
console.log(numbers);
console.log(numbers2); */

const numbers2 = [...numbers];

numbers.push(55);
numbers2.push(7777);

console.log(numbers);
console.log(numbers2);

const numbers3 = [...numbers];

const numbers4 = [8, 66, 25, ...numbers, 111, 45, 85, 78];
console.log(numbers4);

const min = Math.min(...numbers4);
console.log(min);