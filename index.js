require("dotenv").config(); 
//read from a .env file located at the root of the project
//merge key/value pairs
const server = require('./api/server.js');
//make the port assigned by the server
//heroku will place the .PORT environment value on their server
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
