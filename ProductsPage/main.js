const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

let products = [
    { name: "Product 1", price: 19.99 },
    { name: "Product 2", price: 29.99 },
    { name: "Product 3", price: 39.99 },
    { name: "Product 4", price: 49.99 },
];

app.get('/', (req, res) => {
    const searchQuery = req.query.search;
    let filteredProducts = products;

    if (searchQuery) {
        filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    res.render('product', { products: filteredProducts });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});