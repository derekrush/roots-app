require('@babel/register')({
  presets: ['@babel/preset-env'],
  ignore: ['node_modules']
});

//Made a change
// Import the rest of our application.
module.exports = require('./server.js');
