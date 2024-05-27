const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URL).then((con) => {
        console.log("MongoDB connected to host: "+con.connection.host);
    })
};

module.exports = connectDatabase;

// const mongoose = require('mongoose');

// const connectDatabase = () => {
//     return new Promise((resolve, reject) => {
//         mongoose.connect(process.env.DB_URL)
//         .then((con) => {
//             console.log("MongoDB connected to host: " + con.connection.host);
//             resolve();
//         })
//         .catch((err) => {
//             console.error("MongoDB connection error:", err);
//             reject(err);
//         });
//     });
// };

// module.exports = connectDatabase;