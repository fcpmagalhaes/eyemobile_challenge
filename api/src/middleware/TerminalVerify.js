// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  const { login } = req.authentication;
  if (login === 'terminal') {
    next();
  } else {
    return res.status(401).json({ error: 'User not allowed to this operation' });
  }
};
