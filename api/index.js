const app = require('../server');
const serverless = require('serverless-http');

// Exporta a função handler para o Vercel
module.exports.handler = serverless(app);