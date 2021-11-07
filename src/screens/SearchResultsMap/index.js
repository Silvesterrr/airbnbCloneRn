import React, {useState} from 'react'
import { View, Text, FlatList, useWindowDimensions } from 'react-native'
import MapView, {Marker} from 'react-native-maps'

import styles from './styles'
import CustomMarker from '../../components/CustomMarker'
import PostCarouselItem from '../../components/PostCarouselItem'
import places from '../../../assets/data/feed'



const SearchResultsMap = () => {

    const [selectedPlaceId,setSelectedPlaceId] = useState(null);

    const width = useWindowDimensions().width;
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
                    key={place.id}
                    isSelected={place.id === selectedPlaceId}
                    coordinate={place.coordinate} 
                    price={place.newPrice} 
                    onPress={() => setSelectedPlaceId(place.id)}
                    />
                ))}
            </MapView>
            <View style={{position: 'absolute', bottom: 10, left:0}}>
                <FlatList 
                    data={places}
                    renderItem={({item}) => <PostCarouselItem post={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{  height: 150}}
                    snapToInterval={width-60}
                    snapToAlignment={'center'}
                    decelerationRate={'fast'}
                />

            </View>

        </View>
    )
}

export default SearchResultsMap;
