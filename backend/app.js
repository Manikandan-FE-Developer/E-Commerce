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

connectDatabase();

app.use(express.json());
app.use(cors());

app.use('/api/v1/',products);
app.use('/api/v1/',orders);
app.use('/api/v1/',user);

app.get("/", (req, res) => {
    res.send("<h1>E-Commerce Website...</h1>");
})

app.listen(process.env.PORT, () => { 
    console.log(`Server listening to port ${process.env.PORT} in ${process.env.NODE_ENV}`);
})

// mongodb://0.0.0.0:27017/e-commerce

// const express = require("express");
// const dotenv = require("dotenv");
// const path = require("path");
// const cors = require("cors");
// const connectDatabase = require('./config/connectDatabase');

// // Load environment variables
// dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

// const app = express();

// // Middleware to parse JSON requests
// app.use(express.json());

// // CORS Configuration
// const corsOptions = {
//     origin: 'https://e-commerce-r0a8.onrender.com', // Your frontend Render URL
//     optionsSuccessStatus: 200
// };
// app.use(cors(corsOptions));

// // Connect to the database
// connectDatabase()
//   .then(() => console.log("Database connected successfully"))
//   .catch(err => {
//     console.error(`Database connection error: ${err.message}`);
//     process.exit(1);
//   });

// // Import routes
// const products = require('./routes/product');
// const orders = require('./routes/order');
// const user = require('./routes/user');

// // Use routes
// app.use('/api/v1/products', products);
// app.use('/api/v1/orders', orders);
// app.use('/api/v1/users', user);

// // Default Route
// app.get("/", (req, res) => {
//     res.send("<h1>E-Commerce Website...</h1>");
// });

// // Error Handling Middleware
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Internal Server Error');
// });

// // Start the server
// const PORT = process.env.PORT || 8000;
// const server = app.listen(PORT, () => {
//     console.log(`Server listening on port ${PORT} in ${process.env.NODE_ENV} mode`);
// });

// // Graceful Shutdown
// process.on('SIGINT', () => {
//     console.log('Shutting down server...');
//     server.close(() => {
//         console.log('Server shut down gracefully');
//         process.exit(0);
//     });
// });