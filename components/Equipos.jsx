import React, {useEffect, useState} from 'react';
import {Equipo} from './Equipo';
import EquiposJSON from '../equipos.json'

export const Equipos = () => {

  const [equipos, setEquipos] = useState([])
  
  const [seleccion, setSeleccion] = useState(0)

  useEffect(()=>{

    if(equipos.length === 0){
      setEquipos(EquiposJSON) 
    }

  },[equipos])

  return (<>
        {
            equipos.map(equipo => {return <Equipo key={equipo.id} {...equipo} seleccion={seleccion} setSeleccion={setSeleccion} />})//
        }
  </>);
}