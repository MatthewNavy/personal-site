const express = require('express')
//const cors = require('cors')
const { expr } = require('jquery');
const path = require('path')
const app = express()
const port = process.env.PORT || 3000



//app.use(cors())

app.get('/contact', function(req, res) { 
  res.sendFile(path.join(__dirname, '/public/contact.html'))
  //res.json({hello: 'hey'})
});

app.listen(port, () => {
  //console.log(`matthewbarton.dev listening at http://localhost:${port}`)
  console.log('app listening on port ' + port);
})


app.use(express.static('public'))