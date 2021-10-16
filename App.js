import React from 'react';
import { View } from 'react-native';
import {Equipos} from './components/Equipos'

import Padding from './components/styles/Padding'

export default function App() {

  return (
    <View style = {Padding.aplicacion}>
      <Equipos/>
    </View>
  );

}


