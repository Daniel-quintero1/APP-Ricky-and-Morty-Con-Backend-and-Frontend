import React from "react";
import { validation } from "./Validation";

export default function Form(props) {
    const [userData, setUserData] = React.useState({
        username: '',
        password: '',
    });
    const handleInputChange = (e) => {
        setUserData({ 
            ...userData,
            [e.target.name]: e.target.value
        })
        setErrors(
            validation({
                ...userData,
                [e.target.name]: e.target.value,
            })
        )
    }
    const [errors, setErrors] = React.useState({
        username: '',
        password: '',
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        props.login(userData);
      }

    return (
        <form onSubmit={handleSubmit} >

                <label  htmlFor="username">Username:</label>
                <input 
                    id='username'
                    name="username"
                    value={userData.username}
                    placeholder="Ingrese el usuario..."
                    onChange={handleInputChange} />
                    <p>{errors.username}</p>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id='password'
                    value={userData.password}
                    name="password"
                    placeholder="Ingrese el Password..."
                    onChange={handleInputChange}/>
                    <p>{errors.password}</p>
                <button type="submit">Enviar</button>   
        </form>
       
    )
}