import React, {useState} from 'react'
import { View, Text, TextInput, FlatList, SafeAreaView } from 'react-native'
import styles from './styles';

import search from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo'

const DestinationSearch = () => {

    const [inputText, setInputText] = useState('');
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
                    <View style={styles.row}>
                        <View style={styles.iconcontainer}>
                            <Entypo name={'location-pin'} size={30} />
                        </View>
                        <Text style={styles.locationtxt}>{item.description}</Text>
                    </View>
                    
                )}
            />
        </View>
       
    )
}

export default DestinationSearch
