import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const PORT = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

const messages = ["yes", "no", "s*x", "I dunno"];
const users = [];

app.get('/messages', (_, res) => res.send(messages));

app.get('/messages/:id', (req, res) => res.send(messages[req.params.id]));

app.post('/messages', (req, res) => {
  const { body: { message }, headers: { authorization } } = req;
  console.log(authorization);
  messages.push(message);

  res.json(message);
});

app.post('/register', (req, res) => {
  const { body: userData } = req;
  const usersLength = users.push(userData);

  res.json({ ...userData, id: usersLength - 1 });
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));