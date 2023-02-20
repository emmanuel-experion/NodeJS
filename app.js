import express from 'express';
import dotenv from 'dotenv';
import v1Routes from './apps/index.js';
import response from './utilities/response.js';
import logger from './config/logger.js';

dotenv.config();

const app = express();

const port = process.env.PORT || 80;
app.listen(port, () => {
  logger.info(`Server started on port ${port}`);
});

app.use(express.json());
app.use('/v1', v1Routes);
app.use(response);
