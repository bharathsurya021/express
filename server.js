const express = require('express');
const app = express()
const characters = require('./characters.json')

const document = `<html>
  <head>
    <title>Test page</title>
  </head>

  <body>
    <h1>Welcome! I am saanvi</h1>
  </body>
</html>`
app.get('/', (req, res) => {
  res.send('Hello');
})
app.get('/message', (req, res) => {
  res.send(document)
})
app.get('/characters', (req, res) => {
  res.send(characters)
})
app.get('/characters/:id', (req, res) => {
  characters.find(character => {
    const cid = parseInt(req.params.id)

    console.log(cid);
    if (character.id === cid) {
      return res.json(character)
    }
    else {
      return res.send("not found")
    }
  })
})
app.get('/characters/bloodtype/:bloodroute', (req, res) => {
  characters.find(character => {
    let bloodtype = character.blood
    if (bloodtype === req.params.bloodroute) {
      return res.send(character)
    }
    else {
      return res.send("bloodtype not found")
    }


  })
})

const port = 3000

app.listen(port, () => {
  console.log(`Listening on :${port}`)
})

