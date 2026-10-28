const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./Config/databaseConfig');
const app = express();


const productRoute = require('./Routes/ProductRoute');
const userRoute = require('./Routes/UserRoute');


dotenv.config(); // Load environment variables from .env file
connectDB(); // Connect to MongoDB

app.use(express.json()); //middleware to parse JSON request bodies


app.use('/product', productRoute); //use the product route for all requests starting with /products
app.use('/user', userRoute); //use the user route for all requests starting with /users

app.listen(process.env.PORT, () => {
    console.log('Server is running on port ${process.env.PORT}');
});

