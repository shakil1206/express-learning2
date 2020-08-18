const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get("/hello",(req, res)=>{
    res.send("Hello, I am Shakil Ahmed");
})


app.get("/thank",(req,res)=>{
    res.send("Welcome, To my Website!");
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})