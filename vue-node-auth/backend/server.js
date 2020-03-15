import express from 'express';

const PORT = 3000;
const app = express();

app.get('/messages', (_, res) => {
  const messages = ["hello", "hi"];

  res.send(messages);
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));