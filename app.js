const express = require('express')
const app = express()
const port = 3000

 // rotta index app
app.get('/', (req, res) => {
    res.send('Hello World!')
})


// rotta 
app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
    
})