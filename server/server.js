const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config({ path: '.env.development' });

const app = express();
app.use(cors());
app.use(express.json());

console.log("🚀 process.env:",process.env)
const PORT = process.env.PORT || 5000;
const DB_URI = process.env.MONGO_URI;
console.log("🚀 ~ DB_URI:", DB_URI)

mongoose.connect(DB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('Error:', err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const todoSchema = new mongoose.Schema({
    text: String,
    completed: Boolean,
  });
  
  const Todo = mongoose.model('Todo', todoSchema);
  
  app.post('/todos', async (req, res) => {
    const newTodo = new Todo({
      text: req.body.text,
      completed: false,
    });
    await newTodo.save();
    res.json(newTodo);
  });
  
  app.get('/todos', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
  });
  