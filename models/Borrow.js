import mongoose from "mongoose";

const BorrowSchema = new mongoose.Schema(
  {
    borrowerId: {type: mongoose.SchemaTypes.ObjectId, required: true, ref: 'User'},
    bookId: { type: mongoose.SchemaTypes.ObjectId, required: true, ref: 'Book'},
    borrowName: { type: String, required: true, minlength: 2 },
    status: {type: String, enum: ['borrowed', 'returned'], default: 'borrowed'},
    borrowedDate: {type: Date, default: Date.now},
    returnedDate: {type: Date},
  },
  { timestamps: true }
);


export const Borrow = mongoose.model('Borrow', BorrowSchema)