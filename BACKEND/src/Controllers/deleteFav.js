const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {
  const { id } = req.params;
  try {
    const eliminar = await Favorite.destroy({where: {id}})
    const oldFav = await Favorite.findAll();
    return res.status(200).json(oldFav);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
    deleteFav
}
