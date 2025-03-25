const app = require('./src/app');
require('dotenv').config();
console.log(process.env.GOOGLE_GEMINI_KEY);


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})