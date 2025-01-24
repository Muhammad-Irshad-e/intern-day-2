//import expression 
const express = require('express')
require('./connecton')
var cors = require('cors')

var eModel =require('./model/employee') 
//initialize express
const app = express()

app.use(cors())

app.use(express.json())
//Api creation
app.get('/', (req, res) => {
    res.send('Hello World')
})
app.get('/trial', (req, res) => {
    res.send(' This is a trial')
})

app.post('/add', async (req, res) => {
    try {
        await eModel(req.body).save()
        res.send({ message: "data added" })
    } catch (error) {
        console.log(error)
    }
}
)
app.get('/view', async (req, res) => {
    try {
        var val = await eModel.find()

        res.send(val)
        console.log(val)

    } catch (error) {
        console.log(error)

    }
})
app.delete('/delete/:id', async (req, res) => {
    try {
        await eModel.findByIdAndDelete(req.params.id)
        console.log(req.params.id)

        res.send({message: 'Data Deleted successfully'})

    } catch (error) {
        console.log(error)

    }
})

app.put('/update/:id', async (req, res) => {
    try {
        await eModel.findByIdAndUpdate(req.params.id,req.body)
        console.log(req.params.id)

        res.send({ message: 'Data Updated successfully' })

    } catch (error) {
        console.log(error)

    }
})

//port setting
app.listen(3006, () => {
    console.log("server is running on port 3006")
})