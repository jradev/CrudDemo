import { StyleSheet } from "react-native";
import { Colors } from "@/Themes";
const styles = StyleSheet.create({
    container: {
        minWidth: 65
    },
    filter: {
        alignSelf: 'flex-end',
        backgroundColor: Colors.primary,
        borderRadius: 4,
        paddingVertical: 6,
        paddingHorizontal: 10,
        marginLeft: 10
    },
})


export default styles