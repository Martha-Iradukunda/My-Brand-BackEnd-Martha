const mongoose = require("mongoose");
const databaseConnection = async() => {
    mongoose.set("strictQuery", false);

    try {
        await mongoose.connect(process.env.MONGODB_URL, {

            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('database connected')

    } catch (err) {
        console.log(err.message)
    }
}


module.exports = databaseConnection;