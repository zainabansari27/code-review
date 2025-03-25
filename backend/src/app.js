const express = require('express');
const aiRoutes = require('./routes/ai.routes')
// require('dotenv').config();

// console.log(process.env.GOOGLE_GEMINI_KEY,"in app ");

const app = express();

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.use('/ai',aiRoutes);

module.exports = app;