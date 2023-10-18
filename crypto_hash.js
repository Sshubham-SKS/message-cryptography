const { createHash} = require('crypto'); 

//create a string hash

function hash(input) {
    return createHash('sha256').update(input).digest('base64');
}

let password = '@Booki-Bee';
// console.log(`The hash of ${password} is: `,hash(password));
const hash1 = hash(password);
console.log(hash1)

//match two hash value

password = '@Booki-Bee';
const hash2 = hash(password);
const match = hash1 === hash2;
console.log(`does PASSWORD matches :-`, match ? 'Yes' : 'No')
