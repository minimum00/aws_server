const express = require('express')
const app = express()
const routes = require('./routes/routes.js')
const cors = require('cors')
const { randomBytes } = require('crypto');
const bodyParser = require('body-parser');



const PORT = 5000

// app.get('/',(req,res) =>{
//     res.send('hello')
// })

app.use(cors())

app.use(express.json())

app.use('/api',routes)

app.get('/',(req,res) =>{
    res.write('hello in Ec2')
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
