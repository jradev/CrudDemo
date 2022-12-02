import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import { FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Container, Manga, EmptyManga, Selection } from "@/components";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import RNPickerSelect from 'react-native-picker-select';
import { AppContext } from "@/context";
import { COMIC_TYPE, SORT_TYPE } from "@/constants";
import { Colors } from "@/Themes";
export default function(props){    

    const {state, action} = useContext(AppContext)

    const filterRef = useRef()
    const sortRef = useRef()

    const [filter, setFilter] = useState()
    const [sortBy, setSortBy] = useState()
    
    const [comicList, setComicList] = useState()
    
    const navigation = useNavigation()

    useEffect(() => {
        let result = state.mangas
        
        if(filter) result = state.mangas?.filter((item) => item.type === filter)

        setComicList((oldValue) => filter || sortBy ? result : state.mangas)
    }, [filter, sortBy, state.mangas])

    useEffect(() => {
        const navigationFocus = navigation.addListener('focus', () => {
            setFilter(null) 
            setSortBy(null)
            action.getMangas()
        });
  
        return navigationFocus;
          
    }, [])


    const onCreateManga = () => {
        navigation.push('CreateEditManga')
    }

    const onClearFilter = () => {
        setSortBy(null)
        setFilter(null)
    }

    const onChangeSort = (value) => {
        setSortBy(value)

    }

    const renderHeader = () => {
        return (
            <View style={styles.listHeader}>

                <View style={styles.listItem}>
                <View>
                <Selection 
                data={COMIC_TYPE}
                label={'Filter'}
                onValueChange={setFilter}
                />
                </View>
                <View>
                <Selection 
                value={sortBy}
                data={SORT_TYPE}
                label={'Sort'}
                onValueChange={onChangeSort}
                />
                </View>
                {
                (sortBy || filter) ? 
                <TouchableOpacity style={[styles.button, styles.clear]} onPress={onClearFilter}>
                    <Text style={styles.clearText}>Clear</Text>
                </TouchableOpacity>
                : null
                }
                </View>
            </View>
        )
    }

    return(
        <Container>
            <View style={styles.header}>
                <Text style={styles.headerText}>Comic List</Text>
                <TouchableOpacity style={styles.button} onPress={onCreateManga}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.container}>
                <FlatList 
                ListHeaderComponent={renderHeader}
                keyExtractor={item => item.id}
                data={comicList?.filter((item) => filter ? item.type === filter : true).sort((a,b) => {
                    if(sortBy === 'title'){
                        return a?.title?.toLowerCase().localeCompare(b?.title?.toLowerCase())
                    }else if (sortBy === 'author'){
                        return a?.author?.toLowerCase().localeCompare(b?.author?.toLowerCase())
                    }else{
                        return true
                    }
                })}
                extraData={comicList}
                renderItem={({item}) => (<Manga 
                    item={item}/>)}

                ListEmptyComponent={<EmptyManga />}
                />
            </View>

        </Container>
    )
}


