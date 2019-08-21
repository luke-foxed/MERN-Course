const jwt = require('jsonwebtoken');
const config = require('config');

// 'next' refers to the next piece of middleware
module.exports = function(req, res, next) {
  const token = req.header('x-auth-token'); // get token from header
  if (!token) {
    return res.status(401).json({ msg: 'No token, auth denied' });
  }

  try {
    const decoded = jwt.verify(token, config.get('jwtSecret')); // verify token
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
