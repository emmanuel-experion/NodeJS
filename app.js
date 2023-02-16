import express from 'express';
import dotenv from 'dotenv';
import routes from './apps/index.js';
import authMiddleware from './middleware/authMiddleware.js';
import response from './utilities/response.js';
import logger from './config/logger.js';

dotenv.config();

const app = express();

const port = process.env.PORT || 80;
app.listen(port, () => {
  logger.info(`Server started on port ${port}`);
});

app.use(authMiddleware);
app.use(express.json());
app.use(routes);
app.use(response);
