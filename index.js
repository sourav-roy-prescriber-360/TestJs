const express = require('express')
const app = express()
const port = 3000
const colors=require('./colors/index');
app.get('/', (req, res) => {
  console.log(colors.getRandomColor());
  // res.send('<div><h1 style="color: $colors.getRandomColor();">Hello World!</h1><p>Added a little style!</p></div>');
  // res.send(colors.getRandomColor());
  // res.set('text/html').send('<body bgcolor=$colors.getRandomColor()></body>');
  res.send('<body bgcolor="$colors.getRandomColor();"></body>');
})

app.listen(port)

