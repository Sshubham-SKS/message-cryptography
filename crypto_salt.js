const { scryptSync, randomBytes, timingSafeEqual} = require('crypto');

function signup (email, password){
    // Generate a salt for the user's email and hash it with scrypt.
    const salt = randomBytes(16).toString('hex');
    const hashedpassword = scryptSync(password, salt, 64).toString('hex');

    const user = { email, password : `${salt}: ${hashedpassword}`};
}

function login(email, password) {
const user = users.find (v => v.email === email);

//salt now been taken from database.
const [ salt, key] = user.password.split(`:`);

const hashedpassword = scryptSync(password, salt, 64)

// to privent timing attack : it take time to solve and decode, so in that time attacke use to crack it.

const keyBuffer = Buffer.from(key, 'hex');
const match = timingSafeEqual(hasheBuffer, keyBuffer);

if(match){
    return 'login sucessfull!'
}
else{
    return 'login fail!'
}
}