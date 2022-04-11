import React from 'react';
import { Image } from 'react-native';
import ImgMorango from '../../../assets/nomes/morango.png'

import { styles } from './styles';
export function Morango() {

  return (
    <Image
      style={styles.imagem} source={ImgMorango} resizeMode="center"
    />
  );
}