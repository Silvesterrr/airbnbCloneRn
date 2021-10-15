import React, {useState} from 'react'
import { View, Text, TextInput, FlatList, SafeAreaView, Pressable } from 'react-native'
import styles from './styles';

import search from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo'

import { useNavigation } from '@react-navigation/core';
const DestinationSearch = () => {

    const [inputText, setInputText] = useState('');

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.textinput} 
                placeholder="Where are you going?"
                value={inputText}
                onChangeText={setInputText}
            />
            <FlatList
                data={search}
                renderItem={({item}) => (
                    <Pressable style={styles.row} onPress={() => navigation.navigate('Guests')}>
                        <View style={styles.iconcontainer}>
                            <Entypo name={'location-pin'} size={30} />
                        </View>
                        <Text style={styles.locationtxt}>{item.description}</Text>
                    </Pressable>
                    
                )}
            />
        </View>
       
    )
}

export default DestinationSearch
