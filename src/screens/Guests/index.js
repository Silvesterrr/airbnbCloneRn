import React, {useState} from 'react'
import { View, Text, Pressable } from 'react-native'

import styles from './styles'

const Guests = () => {
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    return (
        <View style={styles.container}>
            {/* Row 1: adults */}
            <View style={styles.row}>
                {/* Titles */}
                <View>
                    <Text style={styles.adults}>Adults</Text>
                    <Text style={styles.ages}>Ages 13 or above</Text>
                </View>
                {/* Btns with value */}
                <View  style={styles.btns}>
                    {/* - */}
                    <Pressable onPress={() =>setAdults(Math.max(0,adults - 1))} style={styles.button}>
                        <Text style={styles.btntxt}>-</Text>
                    </Pressable>
                    {/* value */}
                    <Text style={styles.value}>{adults}</Text>
                    {/* + */}
                    <Pressable onPress={() => setAdults(adults + 1)} style={styles.button}>
                        <Text style={styles.btntxt}>+</Text>
                    </Pressable>
                </View>
            </View>
            {/* Row 1: adults */}
            {/* Row 1: children */}
            <View style={styles.row}>
                {/* Titles */}
                <View>
                    <Text style={styles.adults}>Children</Text>
                    <Text style={styles.ages}>Ages 2 to 12</Text>
                </View>
                {/* Btns with value */}
                <View  style={styles.btns}>
                    {/* - */}
                    <Pressable onPress={() =>setChildren(Math.max(0,children - 1))} style={styles.button}>
                        <Text style={styles.btntxt}>-</Text>
                    </Pressable>
                    {/* value */}
                    <Text style={styles.value}>{children}</Text>
                    {/* + */}
                    <Pressable onPress={() => setChildren(children + 1)} style={styles.button}>
                        <Text style={styles.btntxt}>+</Text>
                    </Pressable>
                </View>
            </View>
            {/* Row 1: children */}
            {/* Row 1: infants */}
            <View style={styles.row}>
                {/* Titles */}
                <View>
                    <Text style={styles.adults}>Infants</Text>
                    <Text style={styles.ages}>Ages under 2</Text>
                </View>
                {/* Btns with value */}
                <View  style={styles.btns}>
                    {/* - */}
                    <Pressable onPress={() =>setInfants(Math.max(0,infants - 1))} style={styles.button}>
                        <Text style={styles.btntxt}>-</Text>
                    </Pressable>
                    {/* value */}
                    <Text style={styles.value}>{infants}</Text>
                    {/* + */}
                    <Pressable onPress={() => setInfants(infants + 1)} style={styles.button}>
                        <Text style={styles.btntxt}>+</Text>
                    </Pressable>
                </View>
            </View>
            {/* Row 1: infants */}
        </View>
    )
}

export default Guests
