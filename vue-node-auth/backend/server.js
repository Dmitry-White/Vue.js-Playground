import express from 'express';

const PORT = 3000;
const app = express();

app.get('/', (_, res) => res.send('Test'));

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));