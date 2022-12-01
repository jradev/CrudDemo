import React, { useContext, useEffect, useState } from "react";
import { FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Container, Manga } from "@/components";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
export default function(props){    

    const navigation = useNavigation()

    const onCreateManga = () => {
        navigation.push('CreateEditManga')
    }

    return(
        <Container>
            <View style={styles.header}>
                <Text style={styles.headerText}>Manga List</Text>
                <TouchableOpacity style={styles.button} onPress={onCreateManga}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
            </View>
            {/* <FlatList 
            data={}
            renderItem={({item}) => <Manga item={item}/>}
            /> */}
            <View style={styles.container}>
                <Manga />
            </View>

        </Container>
    )
}


