import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: {type: String, required: true, minLength: 3},
  role: {type: String, enum: ['member', 'librarian', 'admin'], default: 'member'},
  address: {type: String},
  phone: {type: String},
  email: {type: String, required: true, unique: true},
  password: {type: String, rwquired: true}
})

export const User = mongoose.model('User', UserSchema)
