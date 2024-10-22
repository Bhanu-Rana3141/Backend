
const express = require('express');
const app = express();


app.set('view engine', 'ejs');


app.get('/', (req, res) => {

    const user = {
        name: 'Bhanu Rana',
        time: new Date().toLocaleTimeString(),
        welcomeMessage: 'Welcome to our  website!',
    };

    
    res.render('welcome', { user });
});


const PORT = 2100;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
