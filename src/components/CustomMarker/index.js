import React from "react";
import { View, Text } from "react-native";
import {Marker} from 'react-native-maps'
import styles from "./styles";

const CustomMarker = (props) => {
    const {isSelected, coordinate, price, onPress} = props;
    return (
        <Marker
        coordinate={coordinate}
        onPress={onPress}
        >
        <View style={styles.pointerview(isSelected)}>
            <Text style={styles.pointertxt(isSelected)}>${price}</Text>
        </View>
        </Marker>
    );
};

export default CustomMarker;
