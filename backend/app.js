const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const connectDatabase = require('./config/connectDatabase');

dotenv.config({path: path.join(__dirname, 'config', 'config.env')});

const products = require('./routes/product');
const orders = require('./routes/order');
const user = require('./routes/user');

connectDatabase()
.then(() => console.log("Database connected successfully"))
.catch(err => {
  console.error(`Database connection error: ${err.message}`);
  process.exit(1);
});

app.use(express.json());

const corsOptions = {
    origin: 'https://e-commerce-r0a8.onrender.com', 
    optionsSuccessStatus: 200
  };
  
app.use(cors(corsOptions));

app.use('/api/v1/',products);
app.use('/api/v1/',orders);
app.use('/api/v1/',user);

app.get("/", (req, res) => {
    res.send("<h1>E-Commerce Website...</h1>");
})

app.listen(process.env.PORT, () => { 
    console.log(`Server listening to port ${process.env.PORT} in ${process.env.NODE_ENV}`);
})

process.on('uncaughtException', err => {
    console.error(`Uncaught Exception: ${err.message}`);
    process.exit(1);
});




// mongodb://0.0.0.0:27017/e-commerce