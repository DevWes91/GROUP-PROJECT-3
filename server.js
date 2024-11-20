import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import api from './routes/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/index.html'))
);

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/'))
);

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);
