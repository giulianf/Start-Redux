import cors from 'cors';
let bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
// define if we import http or https depending of the environment
const http = process.env.NODE_ENV == 'development' ? require('http') : null;
const https = process.env.NODE_ENV == 'production' ? require('https') : null;
import { error, debug, info } from './common/UtilityLog';

// SSL credentials
const privateKey  = fs.readFileSync(path.join(__dirname ,'sslcert', 'server.key'));
const certificate  = fs.readFileSync(path.join(__dirname ,'sslcert', 'server.crt'));

const credentials = {key: privateKey, cert: certificate};

// Instantiate Node Express
const app = express();
const server = process.env.NODE_ENV == 'production' ? https.createServer(credentials, app) : http.createServer(app) ;

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json({limit: '10mb'}));

// Define cors origin of the appli
const originCors = process.env.NODE_ENV == 'production' ? f('https://www.ufiix.be') : f('%s://%s:%s', process.env.SUFFIXE, process.env.SERVER_CORS_HOST, process.env.SERVER_CORS_PORT);

app.use(cors({
     origin: originCors,
    credentials: true
}) );

// start the server
const suffixe = process.env.SUFFIXE ;
const port = process.env.SERVER_PORT ;
const host = process.env.SERVER_HOST;
const env = process.env.NODE_ENV;
const version = process.env.npm_package_version;

// getVersion();
server.listen(port, err => {
  if (err) {
    return error(err);
  }
   info(`*************************************************`);
   info(`Server running on ${suffixe}://${host}:${port} [${env}]`);
   info(`Server listening (cors) on ${originCors} [${env}]`);
   info(`Version of Katapulta: ${version}`);
   info(`*********************************`);
});
