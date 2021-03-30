const express = require('express');
const { expr } = require('jquery');
const path = require('path')
const app = express()
const port = process.env.PORT || 3000


// app.get('/webapps', function(req, res) { 
//   res.redirect('https://www.cs.trinity.edu/~mbarton/WebApps/')
// });

app.listen(port, () => {
  //console.log(`matthewbarton.dev listening at http://localhost:${port}`)
  console.log('app listening on port ' + port);
})


app.use(express.static('public'))