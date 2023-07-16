const express = require('express');
const app = express(); // express is used to run our server
app.use(express.json());


const bodyParser = require('body-parser'); // used for form posts
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const cors = require('cors'); // cors is used to access server from different domains
const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200
}
app.use(cors(corsOptions));

const router = require('./routes/router');
app.use('/', router);
app.use('/shop', router);
app.use('/product/:id', router);

// backend runs on a different server
const port = 8080;
app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})