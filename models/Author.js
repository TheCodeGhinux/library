import mongoose from "mongoose";


const AuthorSchema = new mongoose.Schema({
  name: { type: String, required: true, minLength: 2, maxLength: 100 },
  birthYear: { type: Number, required: true },
  country: { type: String, required: true, minLength: 3 },
},
  {timestamps: true}
);

export default mongoose.model('Author', AuthorSchema)