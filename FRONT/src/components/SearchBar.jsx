import { useState } from "react"
import stilo from './Card.module.css'

export default function SearchBar(props) {
   // const { onSearch } = props
   const [characters, setCharacters] = useState("");
   const handleChange = (e) => {
   setCharacters(e.target.value)
   }
   return (

      <div>
         <input type='search' 
         value={characters} 
         onChange={handleChange} />
         <div className={stilo.menuli}>
         <button onClick={() => props.onSearch(characters)}>Agregar</button>
         </div>
      </div>
   );
}
