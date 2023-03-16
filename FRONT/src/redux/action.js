import { ADD_PRODUCT, DELETE_PRODUCT, FILTER, ORDER } from "./store";

export function AddPersonaje (personaje){
    return async(dispatch) => {
        try {
            const response = await fetch(`http://localhost:3001/rickandmorty/fav`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(personaje)
            })
            const data = await response.json();
            dispatch({type: ADD_PRODUCT, payload: data})
        } catch (error) {
            console.error(error)
        }
    } 
}

export function DeletePersonaje (ID) {
    return{
        
        type: DELETE_PRODUCT,
        payload: ID,
    }
};
export function filterCards (status){
    return{
        type: FILTER,
        payload: status,
    }
};
export function orderCards (id){
    return {
        type: ORDER,
        payload: id,
    }
};
