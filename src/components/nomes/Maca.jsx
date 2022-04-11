import React from 'react';
import { Image } from 'react-native';
import ImgMaca from '../../../assets/nomes/maca.png'

import { styles } from './styles';
export function Maca() {

    return (
        <Image
            style={styles.imagem} source={ImgMaca} resizeMode="center"
        />
    );
}