const dotenv = require('dotenv');
const path = require('path');
const express = require('express');

//router
const projectRoutes = require('./routes/projectRouter');
const userRoutes = require('./routes/userRouter');

const app = express();

app.use(
    express.urlencoded({
        extended: true
    })
 );
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Content-Type', 'application/json');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', '*');  // enables all the methods to take place
    return next();
});

dotenv.config({ path : './config.env'});
const PORT = process.env.PORT || 3001;

require('./DB/dbconnect');

//routes middleware
app.use("/api", userRoutes);
app.use("/api", projectRoutes);

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    // Error goes via `next()` method
    setImmediate(() => {
        next(new Error('Something went wrong'));
    });
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});

app.listen(PORT, () => {
    console.log(`Server start on ${PORT}`);
});