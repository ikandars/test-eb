const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/name', (req, res) => res.send('Hello gia!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
