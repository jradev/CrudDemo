import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "@/Themes";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: Math.abs(height * 0.50),
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: width / 3,
        height: width / 3,
        marginVertical: 16
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
        width: '70%',
        color: Colors.gray
    }
})


export default styles
