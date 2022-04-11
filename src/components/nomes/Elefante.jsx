import React from 'react';
import { Image } from 'react-native';
import ImgElefante from '../../../assets/nomes/elefante.png'

import { styles } from './styles';
export function Elefante() {

    return (
        <Image
            style={styles.imagem} source={ImgElefante} resizeMode="center"
        />
    );
}