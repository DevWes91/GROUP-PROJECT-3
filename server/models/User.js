const mongoose = require('mongoose');

const userSchema = new Schema({
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
      type: String,
      required: true,
      minlength: 5
    },
    recipes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Recipe'
      }
    ],
    favorites: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Recipe'
      }
    ]
  });

  const User = mongoose.model('User', userSchema);

  module.exports = User;