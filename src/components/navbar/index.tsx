import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, {FC} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RoutesParams } from '../../routes';

const Navbar :FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RoutesParams>>();
    return (
        <View style={styles.navbar}>
            <Text onPress={() => navigation.navigate('Home')}>Home</Text>
            <Text onPress={() => navigation.navigate('Search')}>Search</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar : {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        paddingLeft: 40,
        paddingRight: 40,
        paddingBottom : 10,
        zIndex : 10,
        top: '88%',
        width: '100%',
        height : '10%',
        backgroundColor : 'white'
    }
})

export default Navbar;