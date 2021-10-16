import React from "react";
import { Avatar } from "react-native-elements";
import { ListItem } from "react-native-elements";
import { Icon } from "react-native-elements/dist/icons/Icon";

export const Jugador = ({nombre}) => {
  return (
    <ListItem>
      <Icon name = 'user' type = 'font-awesome'/>
      <ListItem.Content>
        <ListItem.Title>{nombre}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );
};
