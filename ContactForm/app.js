const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// GET route to render the contact form
app.get('/contact', (req, res) => {
    res.render('contact');
  });
  
  // POST route to handle form submission
  app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
  
    // Basic validation
    if (!name || !email || !message) {
      return res.send("Please fill out all fields.");
    }
  
    // Render the thank you page with the form data
    res.render('thankyou', { name, email, message });
  });
  