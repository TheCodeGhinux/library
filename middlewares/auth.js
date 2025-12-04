import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
// import { configDotenv } from 'dotenv'

// configDotenv
dotenv.config()

export const requireAuth = (req, res, next) => {

  // const token = req.headers['authorization']
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

  // Bearer <token>
  if(!token) {
    return res.status(401).json({status: false, message: 'Not authenticated'});
  }

  try {
    // console.log("Token: ", token);
    
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    // console.log("decoded token: ", decoded)
    req.user = decoded
    next()
  } catch (error) {

    console.log("Error from decoding: ", error);
    
    return res
      .status(401)
      .json({ status: false, message: 'Not authenticated' });
  }
}

export const requireLibrarian = (req, res, next) => {
  if(!req.user) {
    return res.status(401).json({ status: false, message: 'Not authenticated' });
  }

  if (req.user?.role !== 'librarian' && req.user?.role !== 'admin') {
    return res.status(403).json({ status: false, message: 'Access denied. Librarian role required.' });
  }
  next();
}