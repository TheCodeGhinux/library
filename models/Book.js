import mongoose from "mongoose";


const BookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, minLength: 2, maxLength: 200 },
    publishedYear: { type: Number, required: true },
    totalCopies: { type: Number, required: true, min: 0 },
    availableCopies: { type: Number, required: true, min: 0 },
    isbn: { type: String, required: true },
    authorId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Author',
      required: true,
    },
    status: {
      type: String,
      enum: ['available', 'unavailable', 'borrowed'],
      default: 'available',
    },
  },
  { timestamps: true }
);


export default mongoose.model('Book', BookSchema)
// - ISBN: required, must be 13 digits  - Published year: required, between 1800 and current year  - Available copies: required, cannot be negative  - Total copies: required, must be >= available copies  - Author ID: must exist in authors array