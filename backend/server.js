// server.js
const app = require('./app');
const port = process.env.PORT || 3000;
// port is 3000 unless defined by environment variable
const host = process.env.HOST || '0.0.0.0';

var server = app.listen(port, host, () => {
    console.log("Express is listening on " + host + ":" + port);
});