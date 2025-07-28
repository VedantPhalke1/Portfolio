const mongoose = require('mongoose');

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const userSchema = new mongoose.Schema({
  name: String,
  role: String,
  email: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;




