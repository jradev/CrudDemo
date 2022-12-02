import React, { useContext, useEffect, useState } from "react";
import { Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Container, Manga } from "@/components";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import RNPickerSelect from 'react-native-picker-select';
import { getUniqueId } from "@/utils";
import { AppContext } from "@/context";
import { COMIC_TYPE } from "@/constants";
export default function(props){    

    const { route } = props

    const item = route.params?.item || null

    const navigation = useNavigation()

    const { state, action } = useContext(AppContext)

    const [title, setTitle] = useState(item?.title || null)
    const [author, setAuthor] = useState(item?.author || null)
    const [description, setDescription] = useState(item?.description || null)
    const [uniqueId, setUniqueId] = useState(item?.id || getUniqueId())
    const [comicType, setComicType] = useState(item?.type || null)


    const presentMessage = (message) => {
        Alert.alert(
            'Information',
            message
        );
    }

    const handleCreateEditManga = () => {

        if(!title || !title?.trim()){
            presentMessage('Comic title is required.')
            return false
        }

        if(!description || !description?.trim()){
            presentMessage('Comic description is required.')
            return false
        }

        if(!comicType){
            presentMessage('Type is required.')
            return false
        }

        // CHECK FOR EXISTING RECORD
        if(state.mangas?.filter(item => 
            item.title?.toLowerCase() === title?.toLowerCase() &&
            item.type === comicType
            ).length > 0){
            presentMessage(`Comic ${title} already exist, consider updating the old record.`)
            return false
        }
        
        let payload = {
            id: uniqueId,
            title: title,
            type: comicType,
            author: author,
            description: description
        }
        if(item?.id){
            action.updateManga(payload)
        }else{
            action.createManga(payload)
        }
        navigation.goBack()
    }

    useEffect(() => {
        console.log(state.mangas)
    },[state.mangas])


    return(
        <Container>
            <View style={styles.header}>
                <Text style={styles.headerText}>Create Comic</Text>
            </View>
            <ScrollView style={styles.parent}>
                <TextInput 
                placeholder='Title'
                value={title}
                onChangeText={setTitle}
                autoCorrect={false}
                autoCapitalize={'none'}
                spellCheck={false}
                autoComplete={''}
                style={styles.input}
                />

                <RNPickerSelect
                    style={{viewContainer : styles.input, inputIOS: {fontSize: 18} }} 
                    onValueChange={(value) => setComicType(value)}
                    items={COMIC_TYPE}
                    value={comicType}
                    placeholder={{label: 'Select type', value: null}}
                />
                
                <TextInput 
                placeholder='Author'
                value={author}
                onChangeText={setAuthor}
                autoCorrect={false}
                autoCapitalize={'none'}
                spellCheck={false}
                autoComplete={''}
                style={styles.input}
                />
                <TextInput 
                multiline={true}
                placeholder='Description'
                value={description}
                onChangeText={setDescription}
                autoCorrect={false}
                autoCapitalize={'none'}
                spellCheck={false}
                autoComplete={''}
                style={[styles.input,styles.description]}
                />
                <TouchableOpacity style={styles.button} onPress={handleCreateEditManga}>
                    <Text style={styles.buttonText}>{item?.id ? 'Update' : 'Create'}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button,styles.back]} onPress={() => navigation.goBack()}>
                    <Text style={[styles.buttonText, styles.backText]}>Go Back</Text>
                </TouchableOpacity>
            </ScrollView>
        </Container>
    )
}


