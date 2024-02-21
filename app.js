const express = require('express');
const app = express();
const mongoose = require('mongoose');
const homeApp = require('./routes/HomeRoutes'); 
const getApp = require('./routes/GetRoutes'); 
const updateApp = require('./routes/UpdateRoutes'); 
const deleteApp = require('./routes/DeleteRoutes'); 
const cors = require('cors');
app.use(cors())

require('dotenv').config();

app.use(express.json());
app.use(homeApp); 
app.use(getApp); 
app.use(updateApp);
app.use(deleteApp);

// app.get('/', (req, res) => { 
//     res.send("Home"); 
// }); 
  
// app.get('/GetRoute', (req, res) => { 
//     res.send("get"); 
// }); 
  
// app.get('/UpdateRoute', (req, res) => { 
//     res.send("update"); 
// }); 







const port = process.env.PORT || 3000;

mongoose.connect(process.env.CONNECTION_STRING, {
    
   
})
.then(()=>{
    console.log('Database Connection is ready...')
})
.catch((err)=> {
    console.log(err);
})


app.listen(port, async () => {
    console.log(`server up on port ${port}`);
  });