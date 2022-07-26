import express from 'express'

const app = express()
const PORT = 3002
app.use(express.json())

app.get('/', (req, res) => {
  res.send(`Express is working!!!!! now nodemon is working`)
})



app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT} ...`)
})
