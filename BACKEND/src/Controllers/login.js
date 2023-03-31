const {User} = require("../DB_connection");

const login = async (req, res) => {
  const { email, password } = req.query;
  console.log(req.query);
  if (![email, password].every(Boolean))
    return res.status(400).send("Faltan datos");
  try {
    const newUser = await User.findOne({ where: { email } });
    if (!newUser) return res.status(404).send("Usuario no encontrado");
    if (newUser.password !== password)
      return res.status(403).send("Contraseña incorrecta");
    res.status(200).json({ access: true });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
    login
}