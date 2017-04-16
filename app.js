const express = require('express')
const app = express()

app.get('/', function (request, response) {
  response.send('Hello World!')
})

app.listen(3000, function () {
  // This function is run when the app starts up.
  console.log('Server running')
})