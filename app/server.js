const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());

app.use(corss())

app.use('/api', userRoutes)

app.listen(3000, () => console.log(`Listening at port: 3000`))