//Rutas de controllers
const { Router } = require("express");
const { getCharById } = require("../Controllers/getCharById");
const { getCharDetail } = require("../Controllers/getCharDetail");
const { createChar, deleteFav } = require("../Controllers/getFav");
const { getChars } = require("../Controllers/getFav.js");


const router = Router();

router.get("/onsearch/:id", getCharById);
router.get("/detail/:id", getCharDetail);

router.post("/fav", (req, res) => {
  const { image, name, gender, species } = req.body;
  if (!image || !name || !gender || !species)
    return res.status(400).json({ error: "Faltan datos" });
  const personaje = createChar(image, name, gender, species);
  res.status(200).json(personaje);
});
router.get("/fav", (req, res) => {
  const chars = getChars();
  res.status(200).send(chars);
});

router.delete("/fav/:id", (req, res)=> {
    const {id} = req.params;
    const deleteFavorite = deleteFav(id);
    
   if(deleteFavorite["error"]){
    return res.status(400).json(deleteFavorite)
   }else {
    res.status(200).send(deleteFavorite);
    }
})
module.exports = { router };




