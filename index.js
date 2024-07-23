require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const menuRoute = require('./src/routes/menuRoute')
app.use(express.json())
app.use('/menu', menuRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
