//connecting to atlas

const dotenv=require('dotenv');
const mongoose=require('mongoose')
dotenv.config({path:'./config.env'})//file name.
const app=require('./app.js');
//console.log(app.get('env'));//development
//console.log(process.env);//shows the def env variables that are set for any proces that runs in node.
mongoose.connect(process.env.CONN,{useNewUrlParser:true})
.then((con)=>{
console.log("Connection Sucessfull");
})
.catch((err)=>{
console.log(err);
})
//command used to add a document from mongoose to atlas
const PORT=process.env.PORT || 3000; 
app.listen(PORT, () => {
    console.log("Server Started...");
  });
  