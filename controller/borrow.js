export const borrowBook = async(req, res) => {

  console.log('Borrow book request received from user:', req.user['name']);
  res.status(200).json({message: 'Book borrowed',})
}