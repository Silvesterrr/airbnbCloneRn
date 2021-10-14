import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 500,
        resizeMode: 'cover',
        justifyContent: "center",
        
    },
    title: {
        fontSize: 80,
        fontWeight: 'bold',
        color: "#fff",
        width: '70%',
        marginLeft: 25
    },
    button: {
        backgroundColor: "white",
        width: 200,
        height: 40,
        marginLeft: 25,
        marginTop: 25,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    searchBtn: {
        backgroundColor: "white",
        height: 60,
        width: Dimensions.get('screen').width - 20,
        marginTop: 25,
        borderRadius: 20,
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 50,
        left: 0,
        zIndex: 100,
    },
    searchBtnTxt: {
        fontSize: 16,
        fontWeight: 'bold'
    },
});

export default styles;