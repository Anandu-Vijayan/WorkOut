const express =require('express')
const dotenv=require('dotenv');
const connectDB = require('./config/db');
const  dataUsers = require('./routers/dataUsers')



const app=express();
dotenv.config()
connectDB();
app.use(express.json());

app.use('/data',dataUsers)

const PORT=process.env.PORT;

app.listen(PORT,console.log(`server connected ${PORT}`));  