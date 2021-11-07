import React, {useState, useEffect, useRef} from 'react'
import { View, Text, FlatList, useWindowDimensions } from 'react-native'
import MapView, {Marker} from 'react-native-maps'

import styles from './styles'
import CustomMarker from '../../components/CustomMarker'
import PostCarouselItem from '../../components/PostCarouselItem'
import places from '../../../assets/data/feed'



const SearchResultsMap = () => {

    const [selectedPlaceId,setSelectedPlaceId] = useState(null);

    const width = useWindowDimensions().width;

    const flatlist = useRef();

    const map = useRef();

    const viewConf = useRef({itemVisiblePercentThreshold: 100});
    const onViewChanged = useRef(({viewableItems}) => {
        if (viewableItems.length>0){
            const selectedPlace = viewableItems[0].item;
            setSelectedPlaceId(selectedPlace.id);
        }});

        
    const Cont = (index) => {
        flatlist.current.scrollToIndex({index}); 

        const selectedPlace = places[index];
        const region = {
            latitude: selectedPlace.coordinate.latitude,
            longitude: selectedPlace.coordinate.longitude,
            latitudeDelta: 0.8,
            longitudeDelta: 0.8
        }
        map.current.animateToRegion(region);
    }
    useEffect(() => {
        if (!selectedPlaceId || !flatlist){
            return
        }
        const index = places.findIndex(place => place.id === selectedPlaceId)
        setTimeout(() => Cont(index), 300);
        
    }, [selectedPlaceId])
    return (
        <View style={styles.container}>
            <MapView 
                ref={map}
                style={styles.map} 
                initialRegio ={{
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
                    ref={flatlist}
                    data={places}
                    renderItem={({item}) => <PostCarouselItem post={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{  height: 150}}
                    snapToInterval={width-60}
                    snapToAlignment={'center'}
                    decelerationRate={'fast'}
                    overScrollMode={'never'}
                    viewabilityConfig={viewConf.current}
                    onViewableItemsChanged={onViewChanged.current}
                />

            </View>

        </View>
    )
}

export default SearchResultsMap;
