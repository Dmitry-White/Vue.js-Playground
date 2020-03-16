import express from 'express';
import cors from 'cors';

const PORT = 3000;
const app = express();

app.use(cors());

app.get('/messages', (_, res) => {
  const messages = ["yes", "no", "s*x", "I dunno"];

  res.send(messages);
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));