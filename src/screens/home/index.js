import React from 'react'
import { 
    View, 
    ImageBackground, 
    Text, 
    Pressable } from 'react-native'
import Icon  from 'react-native-vector-icons/FontAwesome'
import styles from './styles'

const HomeScreen = (props) => {
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
            <Pressable style={styles.searchBtn} onPress={() => console.warn("exlore btn clicked")}>
                <Icon name="search" size={25} color={"#f15454"} />
                <Text style={styles.searchBtnTxt}>Where are you going?</Text>
            </Pressable>
            
            
        </View>
    )
}

export default HomeScreen;