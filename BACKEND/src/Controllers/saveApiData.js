const axios = require("axios");
const getApiData = async (req, res) => {
  const URL = "https://rickandmortyapi.com/api/character";
//   const { id } = req.params;
  try {
    const responde = await axios(URL);
    const idx100 = responde.map((x)=> x.id <= 100)
    
    var character = { // creo una nueva propiedad para entrar al data y buscar la propiedad.
        id: responde.data.id,
        name: responde.data.name,
        status: responde.data.status,
        origin: responde.data.origin,
        gender: responde.data.gender,
        species: responde.data.species,
        image: responde.data.image
      };
    res.status(200).json(character);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
