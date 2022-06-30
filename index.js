const express = require('express')
const app = express()
// const bodyParser = require("body-parser")
const port = process.env.PORT || 4000
const router = require("./routes/users")

//use express to parse json
app.use(express.json())
app.use(router)


app.get('/', (req, res) => res.send('default route'))

app.listen(port, () => {
  console.log('app is listening on:', port)
})