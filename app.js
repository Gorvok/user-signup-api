const express = require('express');
const bodyParser = require('body-parser');
const setupDocs = require('@gorvok/docs')
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');
const { validateEmail, validatePhone, validateBirthday, validatePassword } = require('@gorvok/validation-middlewares');

const app = express();
const port = 8080; // Port number

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Swagger documentation route
setupDocs(app);
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.get('/', (req, res) => {
    res.status(200).json({ message: "API is running" });
});

const { signup } = require('./signup'); // Import the signup function
app.post('/signup', validateEmail, validatePhone, validateBirthday, validatePassword, signup);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
