import React, {useState} from 'react'
import { View, Text, Pressable } from 'react-native'

import styles from './styles'

import { useNavigation } from '@react-navigation/core'
const Guests = () => {
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.rows}>
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
                {/* Row 2: children */}
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
                {/* Row 2: children */}
                {/* Row 3: infants */}
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
                {/* Row 3: infants */}
            </View>

            <Pressable style={styles.search} onPress={() => navigation.navigate()}>
                <Text style={styles.searchtxt}>Search</Text>
            </Pressable>

        </View>
    )
}

export default Guests
