'use strict'
const cors = require('cors');
const morgan = require ('morgan');
const authRoutes = require('./auth/auth.routes');
const clientesRoutes = require('./routes/clientesRoutes');
const empleadosRoutes = require('./routes/empleadosRoutes');
const express = require('express');
const propierties = require('./config/properties');
const DB = require('./config/db');
//const Mysql = require('./config/dbmysql');
// init DB
DB();
//Mysql();

const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const { default: pool } = require('./config/db');
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);
app.use(morgan('dev'));
app.use(cors());
app.use('/api', router);
authRoutes(router);
clientesRoutes(router);
empleadosRoutes(router);
router.get('/', (req, res) => {
  res.send('Hello from home');
});
//app.use('/empleados', empleadosRoutes);
app.use(router);
app.listen(propierties.PORT, () => console.log(`Server runing on port ${propierties.PORT}`));


