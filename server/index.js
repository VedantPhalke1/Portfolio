

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./db');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/', async (req, res) => {
  try {
    const { name, role, email } = req.body;
    const newUser = new User({ name, role, email });
    await newUser.save();
    res.send('saved');
  } catch (error) {
    console.error(error);
    res.status(500).send('error');
  }
});


app.get('/search', async (req, res) => {
  const { query } = req.query;
  try {
    const users = await User.find({
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { role: { $regex: query, $options: 'i' } },
        { email: { $regex: query, $options: 'i' } },
      ],
    });
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Updated '/' endpoint to handle search
app.get('/', async (req, res) => {
  try {
    const { query } = req.query;
    let users;
    if (query) {
      users = await User.find({
        $or: [
          { name: { $regex: query, $options: 'i' } },
          { role: { $regex: query, $options: 'i' } },
          { email: { $regex: query, $options: 'i' } },
        ],
      });
    } else {
      users = await User.find();
    }
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




app.get('/count', async (req, res) => {
  try {
    const totalCount = await User.countDocuments();
    res.json({ count: totalCount });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}`);
});

