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
const [] = [45, 98];