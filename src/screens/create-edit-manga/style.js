import { Platform, StyleSheet } from "react-native";
import { Colors } from "@/Themes";
const styles = StyleSheet.create({
    headerText: {
        color: Colors.black,
        fontSize: 24
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginTop: Platform.select({ios: 0, android: 72}),
        marginBottom: 32
    },
    container: {
        width: '100%',
        height: '100%'
    },
    button: {
        backgroundColor: Colors.primary,
        borderRadius: 4,
        width: '90%',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 10,
        paddingVertical: 8,
        paddingHorizontal: 10,
        justifyContent: 'center'
    },
    buttonText: {
        color: Colors.white,
        fontSize: 18
    },
    back: {
        backgroundColor: Colors.gray,
    },
    backText: {
        color: Colors.black
    },
    parent: {
        width: '100%',
        flexGrow: 1
    },
    input: {
        width: '100%',
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderColor: Colors.gray,
        borderWidth: 1,
        borderRadius: 4,
        fontSize: 18,
        marginBottom: 10
    },
    description: {
        minHeight: 300
    }
})


export default styles
