//Rutas de controllers
const { Router } = require("express");
const { getCharById } = require("../Controllers/getCharById");
const { getCharDetail } = require("../Controllers/getCharDetail");
// const { createChar } = require("../Controllers/getFav");
// const { getChars } = require("../Controllers/getFav.js");
const { login } = require("../Controllers/login");
const { postFav } = require("../Controllers/postFav");
const { postUser } = require("../Controllers/postUser");
const { deleteFav } = require("../Controllers/deleteFav");

const router = Router();

router.get("/onsearch/:id", getCharById);
router.get("/detail/:id", getCharDetail);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);
router.get("/login", login);
router.post("/login", postUser);

module.exports = { router };
// router.post("/fav", async (req, res) => {
//   const { image, name, gender, species } = req.body;
//   if (!image || !name || !gender || !species)
//     return res.status(400).json({ error: "Faltan datos" });
//   const personaje = await postUser(image, name, gender, species);
//   res.status(200).json(personaje);
// });
// router.get("/fav", (req, res) => {
//   const chars = getChars();
//   res.status(200).send(chars);
// });
// router.get("/login", async (req, res) => {
//   const { email, password } = req.query;
//   if (![email, password].every(Boolean))
//     return res.status(400).send("Faltan datos");
//   const newLogin = await login(email, password);
//   if (!newLogin) return res.status(403).send("Usuario o Contraseña Incorrecta");
//   res.status(200).json({ access: true });
// });

// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   if (![email, password].every(Boolean))
//     return res.status(400).send("Faltan datos");
//   const newLogin = await postUser(email, password);
//   res.status(200).json(newLogin);
// });

// router.delete("/fav/:id", async (req, res) => {
//   const { id } = req.params;
//   const deleteFavorite = await deleteFav(id);

//   if (deleteFavorite["error"]) {
//     return res.status(400).json(deleteFavorite);
//   } else {
//     res.status(200).send(deleteFavorite);
//   }
// });

