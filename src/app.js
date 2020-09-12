const express = require('express')
const { response } = require('express')

const app = express()

app.get('', (req, res) => {
    res.send("hello Express!")
})

app.get('/help', (req, res) => {
    res.send({
        a: 'bla',
        b: 3
    })
})

app.listen(3000, () => {
    console.log('server is up at port 3000')
})