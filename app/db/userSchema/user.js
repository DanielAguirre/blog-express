const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastnam: { type: String, required: true },
  userName: { type: String, required: true },
  mail: { type: String, required: true },
  age: { type: Number, default: 0 },
  
});


module.exports = mongoose.model('User', bookSchema);
