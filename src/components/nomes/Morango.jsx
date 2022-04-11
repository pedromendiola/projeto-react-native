import React from 'react';
import { MotiImage } from 'moti';
import ImgMorango from '../../../assets/nomes/morango.png'

import { styles } from './styles';
export function Morango() {

  return (
    <MotiImage
            style={styles.imagem}
            source={ImgMorango}
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