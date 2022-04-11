import React from 'react';
import { MotiImage } from 'moti';

import ImgElefante from '../../../assets/nomes/elefante.png'

import { styles } from './styles';
export function Elefante() {

    return (
        <MotiImage
            style={styles.imagem}
            source={ImgElefante}
            resizeMode="contain"

            from={{
                opacity: 0,
                translateY: 3000
            }}
            animate={{
                opacity: 1,
                translateY: 4
            }}
            transition={{
                type: 'spring',
                //duration:3000
            }}
        />
    );
}