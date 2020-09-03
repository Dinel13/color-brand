const express = require ('express');
const bodyParser = require('body-parser');
const moongose = require('mongoose')
const userControler = require('./users-controller')


const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); // semua url disinkan
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
    next();
  });

  app.use('/api/hasil', userControler.simpan)


  moongose
  .connect(
    "mongodb+srv://salahuddin:XqW3wRaJLiJiWDD1@cluster0.x7u26.mongodb.net/colorbrand?retryWrites=true&w=majority"
      )
  .then(() => app.listen(5000))
  .catch((err) => console.log(err));