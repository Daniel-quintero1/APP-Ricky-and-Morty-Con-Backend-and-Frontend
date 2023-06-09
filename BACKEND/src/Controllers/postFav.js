const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  const { id, name, origin, status, image, species, gender } = req.body;
  if (![name, origin, status, image, species, gender].every(Boolean))
    return res.status(401).json({message: "Faltan datos"});
  try {
    const newFav = await Favorite.findOrCreate({where: {
      id,
      name,
      origin,
      status,
      image,
      species,
      gender,
    }
    });
    const oldFav = await Favorite.findAll();
    return res.status(200).json(oldFav);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  postFav,
};
