const mongoose = require('mongoose');
const DB = process.env.DATABASE;

mongoose.connect(DB,{ 
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex : true,
    useUnifiedTopology : true,
    useFindAndModify : false
}).
then(() => {
    console.log(`Database connected successfully.`);
}).
catch((err) => {
    console.log("Database Not connected");
});