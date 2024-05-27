// const mongoose = require('mongoose');

// const connectDatabase = () => {
//     mongoose.connect(process.env.DB_URL).then((con) => {
//         console.log("MongoDB connected to host: "+con.connection.host);
//     })
// };

// module.exports = connectDatabase;

const mongoose = require('mongoose');

const connectDatabase = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDatabase;