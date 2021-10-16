import React from "react";
import { Modal } from "react-native";
import { Avatar, ListItem, Button, Text, Card } from "react-native-elements";
import { Jugadores } from "./Jugadores";

export const Equipo = ({ id, nombre, logo, estado, jugadores, seleccion, setSeleccion }) => {

  const seleccionarEquipo = () => {
    setSeleccion(id)
  }

  const cerrarModal = () => {
    setSeleccion(0)
  }

  return (
    <ListItem bottomDivider onPress={seleccionarEquipo}>
      <Avatar source={{ uri: logo }} rounded />
      <ListItem.Content>
        <ListItem.Title h4>{nombre}</ListItem.Title>
        <ListItem.Subtitle style = {{color: estado ? 'green' : 'red'}}>{estado ? "Activo" : "Inactivo"}</ListItem.Subtitle>
        <Modal visible={seleccion === id}>
          <Card>
            <ListItem.Title h1 h1Style = {{textAlign: 'center', paddingBottom: 30}}>{nombre}</ListItem.Title>
            <Card.Divider/>
            <Card.Title>Jugadores</Card.Title>
            <Jugadores Lista={jugadores} />
            <Button title="Cerrar" onPress={cerrarModal} />
          </Card>
        </Modal>
      </ListItem.Content>
      <ListItem.Chevron color = 'blue'/>
    </ListItem>
  );
};
