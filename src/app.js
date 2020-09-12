const express = require('express')
const { response } = require('express')

const app = express()
const port = process.env.PORT || 3000

app.get('', (req, res) => {
    res.send("hello Express!")
})

app.get('/help', (req, res) => {
    res.send({
        a: 'bla',
        b: 3,
        c: "nani deska"
    })
})

app.listen(port, () => {
    console.log('server is up at port '+ port)
})