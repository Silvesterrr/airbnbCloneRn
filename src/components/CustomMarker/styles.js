import { StyleSheet  } from "react-native"

const styles = StyleSheet.create({
      pointerview: isSelected => ({
        backgroundColor: isSelected ? 'black': "white",
        padding: 5,
        borderRadius: 20,
        borderColor: 'grey',
        borderWidth: 1
      }),
      pointertxt: isSelected => ({
        fontWeight: "bold",
        color: isSelected ? 'white': "black"
      })
})


export default styles;

