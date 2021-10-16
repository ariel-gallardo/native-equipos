import React from 'react'
import { Jugador } from "./Jugador"

export const Jugadores = ({Lista}) => {
    return <>
        {
            Lista.map((jugador, index) => {return <Jugador key = {index} {...jugador} />;})
        }
    </>
}