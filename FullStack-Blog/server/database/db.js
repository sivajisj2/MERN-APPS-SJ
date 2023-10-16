const mongoose = require('mongoose') 
console.log("db");
const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.2ub8jnh.mongodb.net/04-STORE-API?retryWrites=true`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

module.exports = Connection;