// // // console.log("prueba de que sirve");
// // const { create } = require("domain");
// // const { json } = require("express");
// // var fs = require("fs");
// var http = require("http");
// const { getCharById } = require("./src/Controllers/getCharById");
// const { getCharDetail } = require("./src/Controllers/getCharDetail");
// // const characters = require("./src/Utils/data");

// http.createServer((req, res)=>{
//  res.setHeader('Access-Control-Allow-Origin', '*');
 
//  if (req.url.includes('onsearch')) {
//      var idName = req.url.split("/").pop() // /rickandmorty/character/5--> 5
//      getCharById(res, idName)
//     }
// if (req.url.includes("detail")) {
//     var idDetail = req.url.split("/").pop() // /rickandmorty/character/5--> 5
//     getCharDetail(res, idDetail)
//  }
// //  if (req.url === "rickandmorty/character") {
// //     var idName = req.url.split("/").pop() // /rickandmorty/character/5--> 5
// //     if(idName == characters.id){
// //     return res.writeHead(200, {"Content-type":"application/json"})
// //     .end(JSON.stringify(characters))
// //     }
// //  }
// }).listen(3001, ()=>{
//     console.log("aca estoy esta el back");
// })
const express = require("express");
const morgan = require("morgan");
const cors = require("cors")
const { router } = require("./src/Routes/index.js");
const server = express();


server.use(morgan("dev"));
server.use(express.json());
server.use(cors()); // middlerware para que no me bloque el llamado de la http.
server.use("/rickandmorty", router);


module.exports = server;



