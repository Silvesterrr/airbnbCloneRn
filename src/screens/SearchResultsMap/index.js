import React from 'react'
import { View } from 'react-native'
import styles from './styles'
import MapView from 'react-native-maps'

const SearchResultsMap = () => {
    return (
        <View style={styles.container}>
            <MapView style={styles.map} />
        </View>
    )
}

export default SearchResultsMap;
