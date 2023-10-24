const { createCipheriv, randomBytes, createDecipheriv, Cipher } = require('crypto');

//cipher

const message = ' I like turtle';
const key = randomBytes(32);
const iv = randomBytes(16);
console.log('message:- I like turtle');

const cipher = createCipheriv('aes256', key, iv);
//randomizes the ouput even the same message , make attacker diffucult to attack.

//encrypt

const encryptedMessage = cipher.update(message, 'utf8', 'hex') + cipher.final('hex');
console.log(`Encrypted: ${encryptedMessage}`);


//decrypt

const deciper = createDecipheriv('aes256', key, iv);
const decryptedMessage = deciper.update(encryptedMessage, 'hex', 'utf8') + deciper.final('utf-8');

console.log(`Deciphered: ${decryptedMessage.toString('utf-8')}`);