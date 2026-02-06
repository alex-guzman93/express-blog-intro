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

// Array oggetto lista dei post

const post = [
    {
        id: 1,
        title: "",
        content:
            immage: "",
        tags: ["", ""],
    }, {
        id: 2,
        title: "",
        content:
            immage: "",
        tags: ["", "", "no"],
    }, {
        id: 3,
        title: "",
        content:
            immage: "",
        tags: ["o", "", ""],
    }, {
        id: 4,
        title: "",
        content:
            immage: "",
        tags: ["", ""],
    }, {
        id: 5,
        title: "",
        content:
            immage: "",
        tags: ["", "", "", "", ""],
    }
];
res.json(post)