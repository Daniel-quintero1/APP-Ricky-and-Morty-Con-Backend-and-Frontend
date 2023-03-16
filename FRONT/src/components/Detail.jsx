import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Detail() {
    const navigate = useNavigate();
    const { detailId } = useParams();
    // console.log(detailId);
    const [chartacter, setCharacter] = useState();
    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) {
                    setCharacter(char);
                } else {
                    window.alert('No hay personajes con ese ID');
                }
            })
            .catch((err) => {
                window.alert('No hay personajes con ese ID');
            });
        return setCharacter({});
    }, [detailId]);    

const handleClick = () => {
    navigate('/home')
};
    return (
        <div>
            <button onClick={handleClick}>Go Home</button>
            {chartacter ? ( 
            <div>
                <div>
                <h1>{chartacter.name}</h1>
                <h5>{chartacter.status}</h5>
                <h5>{chartacter.gender}</h5>
                <h5>{chartacter.specie}</h5>
                <h5>{chartacter.origin?.name}</h5>
                </div>
            <div>
                <img src={chartacter.image} alt={chartacter.name} />
            </div>
            </div>
            ) : (" ")}
        </div>
    )
}