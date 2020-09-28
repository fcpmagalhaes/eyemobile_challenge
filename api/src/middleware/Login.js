const jwt = require('jsonwebtoken');

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decode = jwt.verify(token, 'secret');
    req.authentication = decode;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Authentication failure' });
  }
};
