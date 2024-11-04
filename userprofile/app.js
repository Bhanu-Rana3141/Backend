const express = require('express');
const app = express();
app.set('view engine', 'ejs');
const users = {
    'drake': { age: 25, hobby: 'Reading' },
    'jay': { age: 20, hobby: 'Cycling' },
    'jungwon': { age: 15, hobby: 'Gaming' }
};

app.get('/profile/:username', (req, res) => {
    const username = req.params.username;
    if (users[username]) {
        const { age, hobby } = users[username];
        res.render('profile', { username, age, hobby });
    } else {
        res.send('User not found');
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});