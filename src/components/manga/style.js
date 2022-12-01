import { StyleSheet } from "react-native";
import { Colors } from "@/Themes";
const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        minHeight: 80,
        borderBottomColor: Colors.gray,
        borderBottomWidth: 1,
        paddingHorizontal: 10,
        paddingTop: 6
    },
    title: {
        fontSize: 18,
        color: Colors.primary,
        fontWeight: '500'
    },
    author: {
        paddingTop: 6,
        fontSize: 14,
        opacity: 0.5
    },
    description: {
        paddingTop: 6,
        fontSize: 14,
        color: Colors.black
    },
    containerLeft: {
        maxWidth: '80%',
        
        overflow: 'hidden'
    },
    containerRight: {
        marginBottom: 10
    },
    button: {
        borderColor: Colors.primary,
        borderWidth: 1,
        borderRadius: 4,
        paddingVertical: 6,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent :'center',
        marginVertical: 5
    },
    buttonText: {
        color: Colors.primary
    }
})


export default styles
