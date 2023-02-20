import ResponseModel from '../utilities/responseModel.js';
import tokenHandler from '../utilities/tokenHandler.js';
import logger from '../config/logger.js';

// eslint-disable-next-line consistent-return
const authMiddleware = async (req, res, next) => {
  try {
    let token = req.headers.authorization;
    token = token ? token.split(' ')[1] : null;

    if (!token) {
      logger.info('No Token found in request header');
      return res
        .status(401)
        .json(new ResponseModel(null, null, ['Unauthorized access']));
    }
    const result = tokenHandler.verifyToken(token);
    req.user = result;
    next();
  } catch (err) {
    res
      .status(500)
      .json(new ResponseModel(null, null, ['Internal server error']));
    logger.error(err);
  }
};

export default authMiddleware;
