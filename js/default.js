/* function add(first, second) {
    console.log(first, second);
    second = second || 0;
    // if (second === undefined) {
    //     second = 0;
    // }
    const total = first + second;
    return total;
} */

// set default argument to parameter
function add(first = 0, second = 0) {
    const total = first + second;
    return total;
}

const result = add();
console.log(result);

function fullName(first, last = 'Chowdhury') {
    const name = first + ' ' + last;
    return name;
}

const name = fullName('Aslam', 'Khan');
console.log(name);