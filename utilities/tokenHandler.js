import jwt from 'jsonwebtoken';

const createToken = (data) =>
  jwt.sign(data, process.env.JWT_SECRET_KEY, {
    expiresIn: '7d',
    algorithm: 'HS256',
    audience: 'http://localhost',
    issuer: 'http://localhost',
  });

const verifyToken = (token) =>
  jwt.verify(token, process.env.JWT_SECRET_KEY, {
    audience: 'http://localhost',
    issuer: 'http://localhost',
  });

export default { createToken, verifyToken };
