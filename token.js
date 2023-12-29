const jwt = require('jsonwebtoken');

// Replace 'your-secret-key' with a strong, secret key
const secretKey = 'your-secret-key';

// Replace 'your-user-id' with the user ID or any user-specific information
const userId = 'your-user-id';

// Set the payload for the token
const payload = {
  user: userId,
};

// Set the options for the token
const options = {
  expiresIn: '1h', // Token expiration time (e.g., 1 hour)
};

// Generate the JWT token
const token = jwt.sign(payload, secretKey, options);

console.log('Generated JWT token:', token);
