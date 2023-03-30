const server = require("./server");
const { sequelize } = require("./src/DB_connection");

const Port = 3001;
sequelize
  .sync({ alter: true })
  .then(() => {
    server.listen(Port, () => {
      console.log("Server raised in port " + Port);
    });
  })
  .catch((err) => console.log(err.message));
