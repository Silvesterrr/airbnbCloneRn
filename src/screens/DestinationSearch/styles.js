import { StyleSheet, StatusBar } from "react-native"

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        margin: 20
    },
    textinput: {
        fontSize: 20,
        marginBottom: 20
    },
    row: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey'
    },
    iconcontainer: {
        backgroundColor: "#e7e7e7",
        padding: 8,
        borderRadius: 10,
        marginRight: 15
    },
    locationtxt: {
        
    }
})

export default styles;