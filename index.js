import express from 'express'
import connection from './Database/db.js';
import mongoose from 'mongoose'
import Router from './routes/route.js'
import bodyParser from 'body-parser'
import cors from 'cors';

const app=express();
const PORT = 8080 || process.env.PORT;
mongoose.set('strictQuery', true);
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
app.use('/',Router);


app.get("/",(req,res)=>{
  res.send("Hello , Welcome in course management");
});


app.listen(PORT,()=>{
    console.log("successfully connected at",PORT);
})

connection();





