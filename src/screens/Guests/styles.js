import { StyleSheet, StatusBar } from "react-native"

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: "lightgrey"
    },
    adults :{
        fontWeight: "bold",
    },
    ages: {
        color: "#8d8d8d"
    },
    btns: {
        flexDirection: "row",
        alignItems: "center"
    },
    button: {
        borderWidth: 1,
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        borderColor: '#676767'
    },
    value: {
        marginHorizontal: 20,
        fontSize: 16
    },
    btntxt: {
        fontSize: 20,
        color: "#474747"
    }
})

export default styles;