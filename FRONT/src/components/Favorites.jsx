import { connect, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { filterCards, orderCards } from "../redux/action";
import CARDS from '../components/Cards.module.css'

export function Favorites({ myFavorites }) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/home')
    };

const dispatch = useDispatch();

const handleSubmit = (e) => {
    const name = e.target.name;
    const value = e.target.value;
  if(name === 'ordenes') return dispatch(orderCards(value))
  if ( name === 'filter') return dispatch(filterCards(value))
}
    return (
        <div >
            <div>
                <select onClick={handleSubmit} name="ordenes">
                    <option value="Ascendiente">Ascendente</option>
                    <option value="Descendiente">Descendente</option>
                </select>
                <select onClick={handleSubmit} name="filter">
                    <option value="Male">Male</option>
                    <option value="Famele">Famele</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>
            <button onClick={handleClick}>Go Home</button>
            <h1>Favorites</h1>
            {myFavorites?.map((personaje) =>
                <div  className={CARDS.Tarjeta}>
                    <h3>{personaje.name}</h3>
                    <h3>{personaje.gender}</h3>
                    <h3>{personaje.species}</h3>
                    <img src={personaje.image} alt={personaje.image} />
                </div>)}
        </div>
    )
}
function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites,

    }
}

export default connect(mapStateToProps, null)(Favorites)