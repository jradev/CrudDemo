import { useEffect } from "react";
import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";


const Manga = (props) => {   
    return(
        <View style={styles.container}>
            <View style={styles.containerLeft}>
                <Text numberOfLines={2} style={styles.title}>Legend of the Northern Blade</Text>
                <Text numberOfLines={1} style={styles.author}>Author: Ugak</Text>
                <Text numberOfLines={3} style={styles.description}>Description</Text>                
            </View>
            <View style={styles.containerRight}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Manga


