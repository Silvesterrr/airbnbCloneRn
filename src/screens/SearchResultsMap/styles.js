import { StyleSheet, Dimensions  } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
      pointerview: {
        backgroundColor: "#fff",
        padding: 5,
        borderRadius: 20,
        borderColor: 'grey',
        borderWidth: 1
      },
      pointertxt: {
        fontWeight: "bold"
      }
})

export default styles;