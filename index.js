const express = require('express');
const app = express()

app.get('/', (req, res)=> res.send('second commit runner to deployn.....'));

const portn = process.env.port || 8010;
app.listen(portn, ()=>{
    console.log('my api is running on '+ portn);
})
