const bcrypt = require('bcrypt');
const password = "YOUR_PASSWORD_HERE";
bcrypt.hash(password, 10, (err, hash) => {
    if (err) throw err;
    console.log(hash);
});
