//ojo los controllers solo lo vamos a exportar
//controloadores - Controllers
let { fav } = require("../Utils/fav.js");

const getChars = () => {
  return fav;
};

let id = 1;
const createChar = (image, name, gender, species) => {
  const newFav = {
    id: id++,
    image,
    name,
    gender,
    species,
  };
  fav.push(newFav);
  return newFav;
};

const deleteFav = (id) => {
    const favs = fav.find((f) => f.id === parseInt(id)); //devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
    if (!favs) return { error: "No se encuenta el personaje" };
    fav = fav.filter((f) => f.id !== parseInt(id));//pisamos el fav / crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
    return fav;
  };


module.exports = { getChars, createChar, deleteFav };