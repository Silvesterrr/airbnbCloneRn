import React, {useState} from 'react'
import { View, Text, TextInput, FlatList, SafeAreaView, Pressable } from 'react-native'
import styles from './styles';
import SuggestionRow from './SuggestionRow';
import { useNavigation } from '@react-navigation/core';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
const DestinationSearch = () => {



    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            
                <GooglePlacesAutocomplete
                    placeholder='Where are you going?'
                    onPress={(data, details = null) => {
                        console.log(data, details);
                        navigation.navigate('Guests');
                    }}
                    fetchDetails
                    styles={{
                        textInput: styles.textinput
                    }}
                    query={{
                        key: 'AIzaSyA7Hv4J7kEv8A-qwivi4nhNfkJndKv1qBM',
                        language: 'pl',
                        types: '(cities)'
                    }}
                    suppressDefaultStyles
                    enablePoweredByContainer={false}
                    renderRow={(item) => <SuggestionRow item={item} />}
                />

 
       
        </View>
       
    )
}

export default DestinationSearch
