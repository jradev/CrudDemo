import React, { useContext, useEffect, useState } from "react";
import { FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Container, Manga } from "@/components";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
export default function(props){    

    const navigation = useNavigation()

    return(
        <Container>
            <View style={styles.header}>
                <Text style={styles.headerText}>Create Manga</Text>
            </View>
            <ScrollView style={styles.parent}>
                <TextInput 
                placeholder='Title'
                style={styles.input}
                />
                <TextInput 
                placeholder='Author'
                style={styles.input}
                />
                <TextInput 
                multiline={true}
                placeholder='Description'
                style={[styles.input,styles.description]}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Create</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button,styles.back]} onPress={() => navigation.goBack()}>
                    <Text style={[styles.buttonText, styles.backText]}>Go Back</Text>
                </TouchableOpacity>
            </ScrollView>
        </Container>
    )
}


