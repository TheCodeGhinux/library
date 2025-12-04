import {registerUser, loginUser} from "../services/auth.js";

export const register = async (req, res) => {

  try {
    const user = await registerUser(req, res);
    res.status(201).json({nessage: 'User registered', user})
  } catch (error) {
    res.status(500).json({message: 'Server error', error: error.message});
  }
}

export const login = async (req, res) => {
  try {
    const {token, user} = await loginUser(req, res);
    res.status(200).json({ message: 'Login successful', user, token });
  } catch (error) {
    res.status(500).json({message: 'Server error', error: error.message});
  }
}