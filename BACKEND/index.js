
const server = require('./server')

const Port = 3001

server.listen(Port, () => {
    console.log("Server raised in port " + Port);
  });