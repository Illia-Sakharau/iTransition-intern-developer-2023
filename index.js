const express = require('express');
const router = require('./router');
var cors = require('cors');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors({
  origin: '*',
}));
app.use(express.json());
app.use('/persons', router);

const start = async() => {
  try {
    app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`))
  } catch (error) {
    console.log(error);
  }
}

start();