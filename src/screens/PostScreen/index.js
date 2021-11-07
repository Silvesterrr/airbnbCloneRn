import React from 'react'
import { View, Text } from 'react-native'
import DetailedPost from '../../components/DetailedPost'
import styles from './styles'
import places from '../../../assets/data/feed'
import { useRoute } from '@react-navigation/core'



const PostScreen = () => {
    const route = useRoute();
    
    const post = places.find(place => place.id === route.params.postId);
    console.log(route.params)
    return (
        <View style={styles.container}>
            <DetailedPost post={post}/>
        </View>
    )
}

export default PostScreen
