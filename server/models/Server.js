















// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const app = express();
// const cors = require('cors');
// app.use(cors());
// app.use(express.urlencoded({ extended: true }))
// app.use(express.json());

// // MongoDB connection
// mongoose.connect('mongodb://127.0.0.1:27017/portfolio', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// // Schema definition
// const userSchema = new mongoose.Schema({
//   name: String,
//   role: String,
//   email: String,
// });

// const User = mongoose.model('User', userSchema);

// // Middleware setup
// app.use(bodyParser.json());

// // Route to handle form submission
// app.post('/', async (req, res) => {
//   try {
//     const { name, role, email } = req.body;
//     const existingUser = await User.findOne({ email });

//     if (existingUser) {
//       res.send('exist');
//     } else {
//       const newUser = new User({ name, role, email });
//       await newUser.save();
//       res.send('saved');
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('error');
//   }
// });

// // Start server
// const PORT = 8000;
// app.listen(PORT, () => {
//   console.log(`Server running at http://127.0.0.1:${PORT}`);
// });