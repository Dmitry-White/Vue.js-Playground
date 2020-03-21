import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';

const PORT = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

const messages = [
  { user: 'Jim', text: "yes" },
  { user: 'Jim', text: "no" },
  { user: 'Jim', text: "s*x" },
  { user: 'Jim', text: "I dunno" }
];
const users = [
  { username: 'Jim', password: 1 }
];

app.get('/messages', (_, res) => res.send(messages));

app.get('/messages/:id', (req, res) => res.send(messages[req.params.id]));

app.post('/messages', (req, res) => {
  const {
    body: { message },
    headers: { authorization }
  } = req;

  const user = users[authorization];

  const messageObj = {
    user: user.username,
    text: message,
  };

  messages.push(messageObj);

  res.json(messageObj);
});

app.post('/register', (req, res) => {
  const { body: userData } = req;
  const usersLength = users.push(userData);
  const userId = usersLength - 1;

  const token = jwt.sign(userId, '123');

  res.json(token);
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));