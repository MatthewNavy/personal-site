const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// app.get('/', (req, res) => {
//   res.send('hey');
// })

app.listen(port, () => {
  //console.log(`matthewbarton.dev listening at http://localhost:${port}`)
  console.log('app listening on port ' + port);
})

app.use(express.static('public'))