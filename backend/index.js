const express = require('express')
const app = express()
const cors = require('cors')


app.use(cors())

app.use(express.urlencoded({ extended: false }))
app.use(express.json())



app.get('/', (req, res) => {
    res.json({Msg:"Hello from nodejs"})
})


app.post('/getData', (req, res) => {
    console.log(req.body)
})

app.get('/data', (req, res) => {
    res.json({
        name: 'aman',
        age: 21,
        salary:24000
    })
})

app.listen(8400, () => {
    console.log("Server Connected on 8400")
 })