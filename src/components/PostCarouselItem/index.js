// rnfe
import React from 'react'
import { View, Text, Image, useWindowDimensions } from 'react-native'
import styles from './styles.js'

const PostCarouselItem = (props) => {
    const post = props.post;
    const width = useWindowDimensions().width;
    return (
        <View style={[styles.container, {width: width-60}]}>
            <View style={styles.innerContainer}>
                {/* {image} */}
                <Image 
                    style={styles.image} 
                    source={{uri: post.image}}
                />
                <View style={{marginHorizontal:10, flex:1 }}>
                    <Text style={styles.bedrooms}>
                        {post.bed} bed {post.bedroom} bedroom
                    </Text>

                    {/* {type & desc} */}
                    <Text style={styles.description} numberOfLines={2}>
                        {post.type}. {post.title}
                    </Text>
                    {/* {old price & new price} */}
                    <Text style={styles.prices}>
                        <Text style={styles.newprice}> ${post.newPrice} </Text>
                        / night
                    </Text>
                </View>
            </View>
            {/* {bed & Bedroom} */}
        </View>
    )
}

export default PostCarouselItem
