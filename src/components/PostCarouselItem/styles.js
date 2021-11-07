// import { StyleSheet } from "react-native"

// const styles = StyleSheet.create({
    
// })

// export default styles;
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        height: 120,
        padding:5,
        shadowColor: "#000",
        shadowOffset:{
        width: 0,
        height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,   
    },
    innerContainer:{
        elevation: 8,
        flexDirection: "row",
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: "hidden",

    },
    image: {
        height: '100%',
        aspectRatio: 1,
        resizeMode: "cover",
    },
    bedrooms: {
        marginVertical: 10,
        color: '#5b5b5b',
    },
    description: {
        fontSize: 15,
        
    },
    prices: {
        fontSize: 15,
        marginVertical: 7,
    },  
    oldprice: {
        color: '#5b5b5b',
        textDecorationLine: "line-through",
    },
    newprice: {
        fontWeight: "bold",
        color: '#000'
    },
    totalprice: {
        color: '#5b5b5b',
        textDecorationLine: "underline",
    },
})

export default styles;