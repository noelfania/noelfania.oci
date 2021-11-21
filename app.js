const express = require('express')
const app = express()
const port = 9999

app.get('/', (req, res) => {
  res.send('Hello NOSEUMDOCHI!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})