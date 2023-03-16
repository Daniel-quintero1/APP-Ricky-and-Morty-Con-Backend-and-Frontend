//metodologia NODE.js solamente
// var getCharById = (res, ID)=>{
//     return fetch(`https://rickandmortyapi.com/api/character/${ID}`)
//       .then((response) => response.json())
//       .then((data) =>{
//         var personajes = {
//           id: data.id,
//           name: data.name,
//           gender: data.gender,
//           species: data.species,
//           image: data.image
//         }
//         return personajes
//       })
//       .then((personajes)=>{
//         console.log(personajes);
//         const jsonPersonajes = JSON.stringify(personajes);// esto se aplica para convertir todo los personajes en JSON y poder leerse
//         res.writeHead(200, {"Content-Type":"application/json"})
//         res.end(jsonPersonajes)
//       })
//       .catch((error)=>{
//         res.writeHead(500, {"Content-Type":"text/plain"})
//         res.end(JSON.stringify({error: error.message}))
//       }
//       )

// }
// module.exports = {
//     getCharById
// }
const axios = require("axios");
// const url = "https://rickandmortyapi.com/api/character/";

async function getCharById (req, res){
  const {id} = req.params;
  try {
    const responde = await axios(`https://rickandmortyapi.com/api/character/${id}`)
    var character = { // creo una nueva propiedad para entrar al data y buscar la propiedad.
      id: responde.data.id,
      name: responde.data.name,
      gender: responde.data.gender,
      species: responde.data.species,
      image: responde.data.image
    }
    res.status(200).json(character) //recuerda que recibo las propiedades del personaje.
  } catch (error) {
    res.status(500).send(error.message)
  }
}



module.exports = {
  getCharById
}
  
