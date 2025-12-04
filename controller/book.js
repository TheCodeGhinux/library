import { createBookService, getBookByIdService, getBookByNameService, getBooksService } from "../services/book.js";

export const createBook = async (req, res) => {

  // Logic to create a book
  try {
    const book = await createBookService(req, res);
    res.status(201).json({message: 'Book created', book});
  } catch (error) {
    res.status(500).json({message: 'Error creating book: ' + error.message});
  }
}

export const getBooks = async (req, res) => {
  // Logic to get list of books
  try {
    const books = await getBooksService();
    res.status(200).json({message: 'Books fetched successfully', books});
  } catch (error) {
    res.status(500).json({message: 'Error fetching books: ' + error.message});
  }
}

export const getBookByName = async (req, res) => {
  // Logic to get book by name
  try {
    const books = await getBookByNameService(req, res);
    res.status(200).json({message: 'Book fetched successfully', books});
  } catch (error) {
    res.status(500).json({message: 'Error fetching book: ' + error.message});
  }
}

export const getBookById = async (req, res) => {

  // Logic to get book by ID
  try {
    const book = await getBookByIdService(req, res);
    res.status(200).json({message: 'Book fetched successfully', book});
  } catch (error) {
    res.status(500).json({message: 'Error fetching book: ' + error.message});
  }

}