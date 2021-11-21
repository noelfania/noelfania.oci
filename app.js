const express = require('express')
const app = express()
const port = 9999

app.get('/', (req, res) => {
  res.send('Hello, jenkin is working! && PM2 working!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})