import logger from '../../config/logger.js';
import ResponseModel from '../responseModel.js';

// eslint-disable-next-line consistent-return
const validateRequest = (req, res, next, schema) => {
  const { error, value } = schema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    logger.error(error.details);
    return res
      .status(400)
      .json(new ResponseModel(null, null, ['Invalid Credentials']));
  }
  logger.info(value);
  req.body = value;
  next();
};

export default validateRequest;
