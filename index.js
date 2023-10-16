const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const users = require('./data/data.json')
const dummy = require('./data/dummy.json')

app.get('/', (req, res) => {
  res.send('CA server is running 🚀')
})

app.get('/allUsers', (req, res) => {
  res.send(users)
})

// get data by user name
app.get('/user/:username', (req, res) => {
  const name = req.params.username
  const user = users.find((user) => user.name == name)
  if(user){
    res.send(user)
  }
  else(
    res.status(404).json({ user: false })
  )
})

app.get('/dues', (req, res) => {
  res.send(dummy)
})

app.listen(port, () => {
  console.log(`CA server is running on ${port}🚀`)
})