const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./routers/authRouter');
const usersRouter = require('./routers/userRouter');
var cors = require('cors');

const PORT = process.env.PORT || 8080;
const uri = "mongodb+srv://admin:admin@itransition-task4.oncn2vx.mongodb.net/?retryWrites=true&w=majority";

const app = express();

app.use(cors({
  origin: '*',
}));
app.use(express.json());
app.use('/auth', authRouter);
app.use('/users', usersRouter);

const start = async() => {
  try {
    await mongoose.connect(uri)
    app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`))
  } catch (error) {
    console.log(error);
  }
}

start();