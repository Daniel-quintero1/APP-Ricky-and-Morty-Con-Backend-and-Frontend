const { User } = require("../DB_connection");

const postUser = async (req, res) => {
  const { id, email, password } = req.body;
  if (![email, password].every(Boolean))
    return res.status(400).send("Faltan datos");
  try {
    const usuario = await User.findOrCreate({ where: { id, email, password } }); //findOne, devuelve la primera instancia que cumple con las opciones que pasan por parametro
    //mientras que el Find, devolveria todas las instancias que cumplan con esas codiciones
    console.log(usuario);
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  postUser,
};
