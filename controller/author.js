import { createAuthorService, getAuthorByIdService, getAuthorsService } from "../services/author.js";

export const getAuthors = async (req, res) => {

  // Logic to get list of authors
  try {
    const authors = await getAuthorsService();
    res.status(200).json({message: 'Authors fetched successfully', authors});
  } catch (error) {
    res.status(500).json({message: 'Error fetching authors: ' + error.message});
  }
}


export const createAuthor = async (req, res) => {
  try {
    const author = await createAuthorService(req, res);
    res.status(201).json({message: 'Author created', author});
  } catch (error) {
    res.status(500).json({message: 'Error creating author: ' + error.message});
  }
}

export const getAuthorById = async (req, res) => {

  // Logic to get author by ID
  const {id} = req.params;

  try {
    const author = await getAuthorByIdService(id);
    res.status(200).json({message: 'Author fetched successfully', author});
  } catch (error) {
    res.status(500).json({message: 'Error fetching author: ' + error.message});
  }

}

export const updateAuthor = async (req, res) => {

  // Logic to update an author
  const {id} = req.params;

  res.status(200).json({message: `Author with ID: ${id} updated`});
}

export const deleteAuthor = async (req, res) => {

  // Logic to delete an author
  const {id} = req.params;

  res.status(200).json({message: `Author with ID: ${id} deleted`});
}