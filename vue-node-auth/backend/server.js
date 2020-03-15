import express from 'express';
import cors from 'cors';

const PORT = 3000;
const app = express();

app.use(cors());

app.get('/messages', (_, res) => {
  const messages = ["hello", "hi"];

  res.send(messages);
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));