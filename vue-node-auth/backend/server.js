import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const PORT = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

const messages = [
  { user: 0, text: "yes" },
  { user: 0, text: "no" },
  { user: 0, text: "s*x" },
  { user: 0, text: "I dunno" }
];
const users = [];

app.get('/messages', (_, res) => res.send(messages));

app.get('/messages/:id', (req, res) => res.send(messages[req.params.id]));

app.post('/messages', (req, res) => {
  const {
    body: { message },
    headers: { authorization }
  } = req;

  const messageObj = {
    user: authorization,
    text: message,
  };

  messages.push(messageObj);

  res.json(messageObj);
});

app.post('/register', (req, res) => {
  const { body: userData } = req;
  const usersLength = users.push(userData);

  res.json({ ...userData, id: usersLength - 1 });
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));