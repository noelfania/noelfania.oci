const express = require('express')
const app = express()

const port = 9999
app.use(express.json()) 

app.get('/', (req, res) => {
  
  console.log(req.body)
  res.json(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})