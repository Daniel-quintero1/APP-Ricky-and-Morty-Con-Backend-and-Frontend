import { ADD_PRODUCT, DELETE_PRODUCT, FILTER, ORDER, LOGIN} from "./store";

export function AddPersonaje(personaje, idUser) {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:3001/rickandmorty/fav?idUser=${idUser}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(personaje),
      });
      const data = await response.json();
      dispatch({ type: ADD_PRODUCT, payload: data });
    } catch (error) {
      console.error(error);
    }
  };
}
export function DeletePersonaje(ID, idUser) {
  return async (dispatch) => {
    try{
        await fetch(`http://localhost:3001/rickandmorty/fav${ID}?idUser=${idUser}`,{
        method: "DELETE",
        })
    dispatch ({ type: DELETE_PRODUCT, payload: ID });
  } catch (error){
    console.log(error);
  }
}
}
export function filterCards(status) {
  return {
    type: FILTER,
    payload: status,
  };
}
export function orderCards(id) {
  return {
    type: ORDER,
    payload: id,
  };
}
export function login(email, password) {
  return async (dispatch) => {
  try {  const log = await fetch(
      `http://localhost:3001/rickandmorty/login?email=${email}&password=${password}`
    ).then((response) => response.json());
    if (log.access) dispatch({ type: LOGIN, payload: log.id });
  } catch (error){
    console.log(error);
}
}
}