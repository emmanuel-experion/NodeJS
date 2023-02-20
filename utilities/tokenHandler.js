import jwt from 'jsonwebtoken';
import { TOKEN_OPTIONS } from '../config/constants.js';

const createToken = (data) =>
  jwt.sign(data, process.env.JWT_SECRET_KEY, {
    expiresIn: TOKEN_OPTIONS.EXPIREY,
    algorithm: TOKEN_OPTIONS.ALGORITHM,
    audience: TOKEN_OPTIONS.AUDIENCE,
    issuer: TOKEN_OPTIONS.ISSUER,
  });

const verifyToken = (token) =>
  jwt.verify(token, process.env.JWT_SECRET_KEY, {
    audience: TOKEN_OPTIONS.AUDIENCE,
    issuer: TOKEN_OPTIONS.ISSUER,
  });

export default { createToken, verifyToken };
