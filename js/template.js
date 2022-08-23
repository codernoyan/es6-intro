const person = 'Adam Sand';
const person2 = "Ben White";
const person3 = `Donald Trump`;

const multiLine = 'First Line Text \n' +
    'Second line of code \n' +
    'Third line of code \n' +
    'Fourth line of string';

// console.log(multiLine);

const newMultiLine = `First line of code
second line of code
third line of code
fourth line of code`;

// console.log(newMultiLine);

const a = 20;
const b = 30;
const nums = [25, 45, 78, 96, 444, 66];

const summary = 'sum of: ' + a + ' and ' + b + ' is ' + (a + b);
// console.log(summary);

const newSummary = `sum of ${a} and ${nums.length} is ${a + nums.length}`;
console.log(newSummary);