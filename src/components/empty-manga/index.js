import { useEffect } from "react";
import {  Image, Text, View } from "react-native";
import styles from "./style";


const EmptyManga = (props) => {   

    return(
        <View style={styles.container}>
            <Image 
            style={styles.image}
            source={require('../../assets/image/no-results.png')}
            />
            <Text style={styles.text}>No comic list found. Add to view available list</Text>
        </View>
    )
}

export default EmptyManga


