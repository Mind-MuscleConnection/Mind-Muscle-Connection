const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    username: String,
    password: String,
    currentPlan: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Template'
    }
  }
);

const User = mongoose.model('User', userSchema);
module.exports = User;