import express from 'express'
import { createCar, getAllCars, updateCar } from './src/cars.js'

const app = express()
const PORT = 3002
//this tells the code that the info in the body of the request is json
app.use(express.json())

//put routes here
app.get('/cars', getAllCars)
app.post('/cars', createCar)
app.patch('/cars/:id', updateCar)

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT} ...`)
})
