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
        paddingVertical: 6,
        paddingHorizontal: 10
    },
    buttonText: {
        color: Colors.white
    },
    filter: {
        alignSelf: 'flex-end',
        backgroundColor: Colors.primary,
        borderRadius: 4,
        paddingVertical: 6,
        paddingHorizontal: 10,
        marginLeft: 10
    },
    listItem: {
        alignSelf: 'flex-end',
        flexDirection: 'row',
    },
    listHeader: {
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    }
})


export default styles
