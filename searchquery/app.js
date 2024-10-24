const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const items = [
    { name: 'the break', type: 'book' },
    { name: 'Venom', type: 'movie' },
    { name: 'The Catcher in the Rye', type: 'book' },
    { name: 'Animal', type: 'movie' },
    { name: 'The Lord of the Rings', type: 'book' },
];

app.get('/search', (req, res) => {
    const query = req.query.q || '';
    const results = items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
    res.render('search', { query, results });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});