import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import path from 'path';
import router from './server/routes';

const { PORT } = process.env;

const app = express();

// Serve storybook production bundle
app.use('/storybook', express.static('dist/storybook'));

// Serve app production bundle
app.use(express.static('dist/app'));

app.use('/api', router);

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'app/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
