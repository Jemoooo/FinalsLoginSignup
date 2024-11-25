const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, unique: true, required: true, lowercase: true },
        password: { type: String, required: true },
    },
    { timestamps: true } // Adds createdAt and updatedAt fields
);

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
