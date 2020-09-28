const jwt = require('jsonwebtoken');
require('dotenv/config');

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    req.authentication = decode;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Authentication failure' });
  }
};
