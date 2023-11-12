const express = require('express');
const bodyParser = require('body-parser');

//local imports
const connectDB = require('./db.js');
const employeeRoutes = require('./controllers/employee.controller.js');
const { errorHandler } = require('./middlewares');

const app = express();
const PORT = 3000;

//middlewares
app.use(bodyParser.json());
app.use('/api/employees', employeeRoutes);
app.use(errorHandler);//catch errors in the above routes


connectDB()
.then(()=>
    {
        console.log('Database connected successfully!')
        app.listen(PORT, ()=>console.log(`Server is listening on port: ${PORT}`));
    })
    .catch((error)=>console.log(`Error connecting to database: ${error}`));