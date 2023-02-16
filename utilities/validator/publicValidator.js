import joi from 'joi';
import validateRequest from './validator.js';

const verifyAccount = (req, res, next) => {
  const loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(6).max(20).required(),
  });
  validateRequest(req, res, next, loginSchema);
};

export default verifyAccount;
