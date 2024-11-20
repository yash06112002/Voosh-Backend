const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    authType: { type: String, enum: ['local', 'google'], required: true },
    googleId: { type: String },
});

module.exports = mongoose.model('User', UserSchema);
