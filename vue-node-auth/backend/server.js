import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const PORT = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/messages', (_, res) => {
  const messages = ["yes", "no", "s*x", "I dunno"];

  res.send(messages);
});

app.post('/messages', (req, res) => {
  const { body } = req;
  console.log(body);

  res.json(body);
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));