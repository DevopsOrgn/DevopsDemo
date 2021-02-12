const express = require('express');
const app = express()

app.get('/', (req, res)=> res.send('Simple test update checkin after runner listen.....'));

const portn = process.env.port || 8010;
app.listen(portn, ()=>{
    console.log('my api is running on '+ portn);
})
