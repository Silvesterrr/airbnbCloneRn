// rnfe
import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import styles from './styles.js'
import { useNavigation } from '@react-navigation/core'
const Post = (props) => {
    const post = props.post;

    const navigation = useNavigation();

    const goToPostPage = () => {
        navigation.navigate('Post', {postId: post.id});
    }
    return (
        <Pressable onPress={goToPostPage} style={styles.container}>
            {/* {image} */}
            <Image 
                style={styles.image} source={{uri: post.image}}
            />

            {/* {bed & Bedroom} */}
            <Text style={styles.bedrooms}>{post.bed} bed {post.bedroom} bedroom</Text>

            {/* {type & desc} */}
            <Text style={styles.description} numberOfLines={2}>
                {post.type}. {post.title}
            </Text>
            {/* {old price & new price} */}
            <Text style={styles.prices}>
                <Text style={styles.oldprice}>${post.oldPrice}</Text>
                <Text style={styles.newprice}> ${post.newPrice} </Text>
                / night
            </Text>
            {/* {Total price} */}
            <Text style={styles.totalprice}>${post.totalPrice}</Text>
        </Pressable>
    )
}

export default Post
