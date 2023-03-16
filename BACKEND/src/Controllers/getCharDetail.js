// var getCharDetail = (res, id)=>{
//     return fetch(`https://rickandmortyapi.com/api/character/${id}`)
//       .then((response) => response.json())
//       .then((data) =>{
//         var personajes = {
//           id: data.id,
//           name: data.name,
//           gender: data.gender,
//           species: data.species,
//           image: data.image,
//           origin: data.origin,
//           status: data.status
//         }
//         return personajes
//       })
//       .then((personajes)=>{
//         console.log(personajes);
//         const jsonPersonajes = JSON.stringify(personajes)
//         res.writeHead(200, {"Content-Type":"application/json"})
//         res.end(jsonPersonajes)
//       })
//       .catch((error)=>{
//         console.error(error)
//         res.writeHead(500, {"Content-Type":"text/plain"}) 
//         res.end(JSON.stringify({error: error.message}))
//       }
//       )
// }
// /*
//  Sí, esa forma debería funcionar correctamente. Al usar 
//  return en la primera promesa, el objeto personajes 
//  se convierte en el valor que se pasa a la siguiente promesa. 
//  De esta forma, se puede acceder al objeto 
//  personajes en la segunda promesa para serializarlo y enviarlo en la respuesta. 
//  */

const axios = require("axios");
// const url = "https://rickandmortyapi.com/api/character/";

async function getCharDetail (req, res){
  const {id} = req.params;
  try {
    const responde = await axios(`https://rickandmortyapi.com/api/character/${id}`)
    var character = { // creo una nueva propiedad para entrar al data y buscar la propiedad.
      id: responde.data.id,
      name: responde.data.name,
      gender: responde.data.gender,
      status: responde.data.status,
      species: responde.data.species,
      image: responde.data.image,
      origin: responde.data.origin
    }
    res.status(200).json(character) //recuerda que recibo las propiedades del personaje.
  } catch (error) {
    res.status(500).send(error.message)
  }
}


module.exports = {
    getCharDetail
}