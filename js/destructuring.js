const fish = {
    name: 'King Hilsa',
    address: 'Chandpur',
    color: 'silver',
    phone: '01717658899',
    price: 4000
}

// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;

// const { phone, name, price, address } = fish;

/* console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone); */

// console.log(address)
// object destructuring
const { age, name } = { name: 'Guri Dey', age: 12, profession: 'student' };

console.log(name);

const { address } = fish;
console.log(address);

// array destructuring
// const [first, another, names] = [45, 98, 'hello guri'];
const [first, another] = [45, 98, 78, 66];
console.log(another);

const nayoks = ['sakib', 'bappi', 'raj'];

const [king, lost, notun] = nayoks;
console.log(notun)