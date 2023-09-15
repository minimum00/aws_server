const express = require('express')
const app = express()
const routes = require('./routes/routes.js')
const cors = require('cors')
const { randomBytes } = require('crypto');
const bodyParser = require('body-parser');



const PORT = 4001

// app.get('/',(req,res) =>{
//     res.send('hello')
// })

app.use(cors())

app.use(express.json())

app.use('/api',routes)

app.get ('/posts', (req, res) => {
    res.send(posts)
    })

app.post('/posts',(req, res) => {
    const id = randomBytes(4).toString('hex');
    const {title} = req.body;

    posts[id] = {
        id, title
    }
    res.status(201).send(posts[id])
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
