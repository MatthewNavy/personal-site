const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
//const { expr } = require('jquery');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.get('/contact', function(req, res) { 
  res.sendFile(path.join(__dirname, '/public/contact.html'));
});

app.get('/resume', function(req, res) { 
  res.sendFile(path.join(__dirname, '/public/resume.html'));
});

app.get('/pdfs', function(req, res) { 
  res.sendFile(path.join(__dirname, '/public/pdfs.html'));
});

app.get('/books', function(req, res) { 
  res.sendFile(path.join(__dirname, '/public/books.html'));
});

app.get('/', function(req, res) {''
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

let messageCount = 0;
const transporter = nodemailer.createTransport({
  service: 'AOL',
  auth: {
    user: 'mbardev@aol.com',
    pass: process.env.NODE_MAILER // I'll know if you logged on :)
  }
});

app.post('/sendMessage', function(req, res) {
  const fullname = req.body.fullname;
  const username = req.body.username;
  const domain = req.body.domain;
  const message = req.body.message;
  

  const emailText = fullname + "\n" + username + "@" + domain + "\n" + message;
  
  const mailOptions = {
    from: 'mbardev@aol.com',
    to: 'matthewrobbarton@gmail.com',
    subject: 'Message #' + messageCount,
    text: emailText
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      res.sendStatus(404);
    } else {
      console.log('Email sent');
      messageCount += 1;
      res.redirect('/contact');
    }
  });

  
});

app.listen(port, () => {
  //console.log(`matthewbarton.dev listening at http://localhost:${port}`)
  console.log('app listening on port ' + port);
});

app.use(express.static('public'));
