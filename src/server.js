const { connectToDB } = require('./common/db.js');
const { PORT } = require('./common/config');
const app = require('./app');
const { winstonLogger } = require('./common/logger.js');

connectToDB(() => {
  app.listen(PORT, () =>
    winstonLogger.info(`App is running on http://localhost:${PORT}`)
  );
});
