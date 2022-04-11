import React from 'react';
//import { MotiImage } from 'moti';

import { StyleSheet, View, Text } from 'react-native';
import PagerView from 'react-native-pager-view';

// importe de Screen falas
import FalaMaca from '../screens/falar/Maca';
import FalaMorango from '../screens/falar/Morango';
import FalaElefante from '../screens/falar/Elefante';

//importe de componenentes
import { Maca } from './nomes/Maca';
import { Elefante } from './nomes/Elefante';
import { Morango } from './nomes/Morango';

const MinhaPagina = () => {
    return (

        <View style={{ flex: 1 }}>
            <PagerView style={styles.viewPager} initialPage={0}>
                <View style={styles.page} component={Maca}>
                    <Maca />
                    <FalaMaca />
                </View>
                <View style={styles.page} component={Elefante}>
                    <Elefante />
                    <FalaElefante />
                </View>
                <View style={styles.page} component={Morango}>
                    <Morango />
                    <FalaMorango />
                </View>
            </PagerView>
        </View>
    );
};

const styles = StyleSheet.create({
    viewPager: {
        flex: 1,
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default MinhaPagina;