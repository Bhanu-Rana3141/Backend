const express = require('express');
const app = express();


app.set('view engine', 'ejs');


const user = {
    isLoggedIn: true, 
    username: 'Jake' 
};

app.get('/', (req, res) => {
    res.render('navigation', {
        isLoggedIn: user.isLoggedIn,
        username: user.username
    });
});


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});