const bodyParser = require("body-parser");
const express =require("express");

const setupAndStartServer = async ()=>{

const app = express();
const PORT = 3000;

app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended: true}));

app.listen(PORT, ()=>{

console.log(`Server started at ${PORT}`);

})

}



setupAndStartServer();