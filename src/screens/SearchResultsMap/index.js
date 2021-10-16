import React, {useState} from 'react'
import { View, Text } from 'react-native'
import MapView, {Marker} from 'react-native-maps'

import styles from './styles'
import CustomMarker from '../../components/CustomMarker'

import places from '../../../assets/data/feed'


const SearchResultsMap = () => {

    const [selectedPlaceId,setSelectedPlaceId] = useState(null);

    return (
        <View style={styles.container}>
            <MapView 
                style={styles.map} 
                initialRegion={{
                    latitude: 28.3279822,
                    longitude: -16.5124847,
                    latitudeDelta: 0.8,
                    longitudeDelta: 0.8,
                }}
            >
                {places.map(place => (
                    <CustomMarker 
                    isSelected={place.id === selectedPlaceId}
                    coordinate={place.coordinate} 
                    price={place.newPrice} 
                    onPress={() => setSelectedPlaceId(place.id)}
                    />
                ))}
            </MapView>
        </View>
    )
}

export default SearchResultsMap;
