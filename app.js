const express = require('express')
const app = express()
const port = 3000

 // rotta index app
app.get('/', (req, res) => {
    res.send("<h1>Server del mio blog</h1>")
})


// rotta port
app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
    
})

