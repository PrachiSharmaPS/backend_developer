const User = require('../model/UserItinerary');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const authController = {};

authController.signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if user already exists
    const user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({ message: 'User already exists' });
    }
    
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      email,
      password: hashedPassword
    });

    await newUser.save();

    // Create token
    const token = jwt.sign(
      { email: newUser.email, userId: newUser._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(201).json({ token, userId: newUser._id });

  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

authController.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Create token
    const token = jwt.sign(
      { email: user.email, userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({ token, userId: user._id });

  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = authController;