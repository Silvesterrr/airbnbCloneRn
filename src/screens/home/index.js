import React from 'react'
import { 
    View, 
    ImageBackground, 
    Text, 
    Pressable } from 'react-native'

import styles from './styles'
import Fontisto from 'react-native-vector-icons/Fontisto'

import { useNavigation } from '@react-navigation/core'
const HomeScreen = (props) => {
    const navigation = useNavigation();
    return (
        <View>
            <ImageBackground 
                source={require('../../../assets/images/wallpaper.jpg')} 
                style={styles.image}
            > 
                <Text style={styles.title}>Go Near</Text>
                <Pressable style={styles.button} onPress={() => console.warn("exlore btn clicked")}>
                    <Text style={styles.buttonText}>Explore nearby stayes</Text>
                </Pressable>
                
                
            </ImageBackground>
            <Pressable style={styles.searchBtn} onPress={() => navigation.navigate('dest-search')}>
                <Fontisto name="search" size={25} color={"#f15454"} />
                <Text style={styles.searchBtnTxt}>Where are you going?</Text>
            </Pressable>
            
            
        </View>
    )
}

export default HomeScreen;