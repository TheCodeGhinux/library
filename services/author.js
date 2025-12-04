import Author from "../models/Author.js";

export const createAuthorService = async (req, res) => {

  const { name, birthYear, country } = req.body;

  const existingAuthor = await Author.findOne({ name });
  if (existingAuthor) {
    res.status(400).json({message: 'Author already exists'});
  }

  const author = await Author.create({ name, birthYear, country });

  return author;
}

export const getAuthorsService = async () => {

  const authors = await Author.find();

  return authors;
}

export const getAuthorByIdService = async (id) => {

  const author = await Author.findById(id);

  if(!author) {
    res.status(404).json({message: 'Author not found'});
  }

  return author;
}

export const updateAuthorService = async (id, updateData) => {

  const author = await Author.findByIdAndUpdate(id, updateData, {new: true});

  if(!author) {
    res.status(404).json({message: 'Author not found'});
  }

  return author;
}