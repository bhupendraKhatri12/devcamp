const express = require("express")
const dotenv = require("dotenv");


//load env varibale
dotenv.config({path:'./config/config.env'});
const app = express();


const PORT = process.env.PORT||5000;

app.get("/",(req,res)=>{
    res.send("Hllello");
})


app.listen(PORT,()=>{console.log('Runing on port :' +PORT);
});

