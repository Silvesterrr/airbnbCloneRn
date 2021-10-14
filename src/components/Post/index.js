// rnfe
import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles.js'

const Post = () => {
    return (
        <View style={styles.container}>
            {/* {image} */}
            <Image 
                style={styles.image} source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg'}}
            />

            {/* {bed & Bedroom} */}
            <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>

            {/* {type & desc} */}
            <Text style={styles.description} numberOfLines={2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed dapibus sapien enim, vel consectetur nulla molestie gravida. 
                Quisque vel pretium sapien, vitae sodales eros.
            </Text>
            {/* {old price & new price} */}
            <Text style={styles.prices}>
                <Text style={styles.oldprice}>36$</Text>
                <Text style={styles.newprice}> 30$ </Text>
                / night
            </Text>
            {/* {Total price} */}
            <Text style={styles.totalprice}>360$</Text>
        </View>
    )
}

export default Post
