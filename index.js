const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send(`Hello CI/CD! Version: ${process.env.APP_VERSION || 'local'}`));

app.listen(port, () => console.log(`Server listening on ${port}`));
