const express = require('express');
const path = require('path');
const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files from the "public" directory for images
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
// Sample product data
const products = [
    {
      name: "Product 1",
      description: "Description for product 1",
      image: "/images/product1.png"
    },
    {
      name: "Product 2",
      description: "Description for product 2",
      image: "/images/product2.png"
    },
    {
      name: "Product 3",
      description: "Description for product 3",
      image: "/images/product3.png"
    }
  ];
  
  // Route to render the product catalog
  app.get('/catalog', (req, res) => {
    res.render('catalog', { products });
  });
  