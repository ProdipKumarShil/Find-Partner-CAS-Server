const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const users = require('./data/data.json')

app.get('/', (req, res) => {
  res.send('CA server is running 🚀')
})

app.get('/allUsers', (req, res) => {
  res.send(users)
})

// get data by user name
app.get('/user/:username', (req, res) => {
  const name = req.params.username
  console.log(name)
})

app.listen(port, () => {
  console.log(`CA server is running on ${port}🚀`)
})