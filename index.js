const express = require('express')
const app = express()
const port = 3000

app.get('/t', (req, res) => {
    res.send("Hello world")
})
app.listen(port, () => console.log(`Now listening on port ${port}`))