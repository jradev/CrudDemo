import { useContext, useEffect } from "react";
import { Alert, Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { AppContext } from "@/context";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import { COMIC_TYPE } from "@/constants";


const Manga = (props) => {   
    const { action } = useContext(AppContext)
    const { item } = props
    
    const navigation = useNavigation()

    const COMIC_VALUE = COMIC_TYPE?.filter(i => i.value === item?.type)[0]?.label || null

    const onDeleteManga = () => {

        Alert.alert(
            "Delete Confirmation",
            "Are you sure you want to delete this item?",
            [
              {
                text: "Cancel",
                onPress: () => {},
                style: "cancel"
              },
              { text: "OK", onPress: () => {
                action.deleteManga(item.id)            
            }}
            ]
          );
    
    }

    const onEditManga = () => {
        navigation.push('CreateEditManga', {item})
    }
    return(
        <View style={styles.container}>
            <View style={styles.containerLeft}>
                <Text numberOfLines={2} style={styles.title}>{item?.title}</Text>
                { COMIC_VALUE &&
                    <View style={styles.comic}>
                    <Text style={styles.comicText}>{COMIC_VALUE}</Text>
                </View>}
                <Text numberOfLines={1} style={styles.author}>Author: {item?.author || 'N/A'}</Text>
                <Text numberOfLines={3} style={styles.description}>{item?.description || 'No description available.'}</Text>                
            </View>
            <View style={styles.containerRight}>
                <TouchableOpacity style={styles.button} onPress={onEditManga}>
                    <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={onDeleteManga}>
                    <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Manga


