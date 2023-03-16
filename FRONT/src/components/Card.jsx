import stilo from './Card.module.css'
import { Link } from 'react-router-dom'
import { DeletePersonaje, AddPersonaje } from '../redux/action';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import CARDS from '../components/Cards.module.css'

function Card(props) {
   // console.log(props); nsootros en el parametro que entra en la funcion
   //debemos pasarle el ID de los que nos entra en prps. y ademas la busca en detail.
   const [isFav, setIsFav] = useState(false);
   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [props.myFavorites]);

   function handleFavorite() {
      if (isFav) {
         setIsFav(false);
         props.DeletePersonaje(props.id);
      } else {
         setIsFav(true);
         props.AddPersonaje(props)
      }
   }

   return (
      <div>
         <div>
            {isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )}
         <button className={stilo.buttonInicio} onClick={props.onClose} >X</button>
         </div>
         <Link to={`/detail/${props.id}`}>
            <h2 className={stilo.tittle} >{props.name}</h2>
         </Link>
         <div className={CARDS.Tarjeta}>
         <h2>{props.especies}</h2>
         <h2>{props.gender}</h2>
         <li>
            <ul className={stilo.ImageR}>
               <img className={stilo.ImagenInterna} src={props.image} alt={props.name} />
            </ul>
         </li>
         </div>
      </div>
   );
}
function mapStateToProps(state) {
   return {
      myFavorites: state.myFavorites
   }
}
function mapDispatchToProps(dispatch) {
   return {
      AddPersonaje: function (personaje) {
         dispatch(AddPersonaje(personaje))
      },
      DeletePersonaje: function (ID) {
         dispatch(DeletePersonaje(ID))
      }
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(Card);
