import React from 'react';
import { MotiImage } from 'moti';

import ImgMaca from '../../../assets/nomes/maca.png'

import { styles } from './styles';
export function Maca() {

    return (
        <MotiImage
            style={styles.imagem}
            source={ImgMaca}
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