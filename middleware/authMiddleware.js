import ResponseModel from '../utilities/responseModel.js';
import tokenHandler from '../utilities/tokenHandler.js';

// eslint-disable-next-line consistent-return
const authMiddleware = async (req, res, next) => {
  try {
    if (!req.url.startsWith('/api/v1/pm')) {
      return next();
    }

    let token = req.headers.authorization;
    token = token ? token.split(' ')[1] : null;

    if (!token) {
      return res
        .status(401)
        .json(new ResponseModel(null, null, ['Unauthorized access']));
    }
    const result = tokenHandler.verifyToken(token);
    req.user = result;
    next();
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json(new ResponseModel(null, null, ['Internal server error']));
  }
};

export default authMiddleware;
