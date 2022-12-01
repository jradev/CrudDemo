import React, { useContext, useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Container } from "@/components";
import styles from "./style";
export default function(props){    

    return(
        <Container>
            <ScrollView style={{width: '100%', height: '100%'}}>
                <Text>Test</Text>
            </ScrollView>
        </Container>
    )
}


