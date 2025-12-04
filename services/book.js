import Author from "../models/Author.js";
import Book from "../models/Book.js";

export const createBookService = async (req, res) => {

  const {
    title,
    authorId,
    publishedYear,
    isbn,
    totalCopies,
    availableCopies,
    status,
  } = req.body;

  // Additional validation can be added here
  const existingBook = await Book.findOne({ isbn });
  if (existingBook) {
    res.status(400).json({message: 'Book with this ISBN already exists'});
  }

  const authorExists = await Author.findById(authorId);
  if (!authorExists) {
    res.status(400).json({message: 'Author does not exist'});
  }

  const book = await Book.create({
    title,
    authorId,
    publishedYear,
    isbn,
    totalCopies,
    availableCopies,
    status,
  });

  return book;
}

export const getBookByNameService = async (req, res) => {
  try {
    const { name } = req.params;

    // Using a case-insensitive partial match
    const books = await Book.find({
      title: { $regex: name, $options: 'i' },
    });

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    return books
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};


export const getBooksService = async () => {

  const books = await Book.find()
    .select('title authorId publishedYear isbn status')
    .populate({ path: 'authorId', select: 'id name' })
    .exec();

  return books;
}

export const getBookByIdService = async (req, res) => {
    const { id } = req.params;

  const book = await Book.findById(id)
    .select('title authorId publishedYear isbn status')
    .populate({ path: 'authorId', select: 'id name' })
    .exec();

  if(!book) {
    res.status(404).json({message: 'Book not found'});
  }

  return book;
}

export const updateBookService = async (id, updateData) => {

  const book = await Book.findByIdAndUpdate(id, updateData, {new: true});

  if(!book) {
    res.status(404).json({message: 'Book not found'});
  }

  return book;
}

export const deleteBookService = async (id) => {

  const book = await Book.findByIdAndDelete(id);

  if(!book) {
    res.status(404).json({message: 'Book not found'});
  }

  return book;
} 