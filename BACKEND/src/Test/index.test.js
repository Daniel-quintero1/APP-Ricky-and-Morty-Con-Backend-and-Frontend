const server = require('../../server');
const session = require('supertest');
const agent = session(server);

// describe( 'GET rickandmorty/{id}', function(){
//     it('Responde con status: 200', agent.get('/rickandmorty/1').expect(200))

//     it('Responde un objeto con las propiedades: "id", "name", "species", "gender" e "image"', agent.get('/rickandmorty/1').expect(200))
// })

describe('Pruebas para la URL  /rickandmorty/{id}', function() {
    it('Debería responder con el estado 200', function() {
      agent.get('/rickandmorty/onsearch/1')
        .expect(200); 
    });
  
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender" e "image"', function() {
      agent.get('/rickandmorty/onsearch/1').then((res)=>{
        expect(res.body).toEqual({
          "id": 1,
          "name": "Rick Sanchez",
          "species": "Human",
          "gender": "Male",
          "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        })
      })      
    });
  });
  
  