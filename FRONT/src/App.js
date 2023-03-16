import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
// import Card from './components/Card.jsx'
import Cards from './components/Cards'
import Nav from './components/Nav'
import About from './components/About'
import Detail from './components/Detail'
import Form from './components/Form'
import Favorites from './components/Favorites'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from "axios"
// import SearchBar from './components/SearchBar.jsx'
// import characters, { Rick } from './data.js'


function App() {

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = 'daqcarrillo@gmail.com';
  const password = 'daqc0409';
  
  function login(userData) {
     if (userData.password === password && userData.username === username) {
        setAccess(true);//cuando esto llega a true y activa mi hook useNavigate
        navigate('/home');//aca es donde dirigimos a home, recuerda q FORM esta la en ruta raiz para q pueda renderizar y rutear
     } else {
      alert('Usuario y contraseña incorrecta. ')
     }
  }
  useEffect(() => { // si el acceso no esta correcto o no estan bien, entonces te quedas en la ruta raiz. 
    !access && navigate('/');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [access]);

  let location = useLocation();
  const [characters, setCharacters] = useState([]);//crear estados <---- se hace de esta forma 
  
  function onSearch(id) {
    axios.get(`http://localhost:3001/rickandmorty/onsearch/${id}`)
      .then ((responde)=> {const data = responde.data
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      })
      .catch ((error)=>{
        console.log(error)
      }
      )
    }
  
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id))
  }

  return (
    <div className='TwoApp' style={{ padding: '55px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        {location.pathname !== '/' && <Nav onSearch={onSearch} />}
      </div>
      <Routes>
        <Route path='/' element={<Form login={login}/>} ></Route>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:detailId' element={<Detail />} />
        <Route path='/favorites'element={<Favorites/>}/>
      </Routes>
      {/* recuerda que los : son para recibir el id */}
    </div>
  )
}

export default App
