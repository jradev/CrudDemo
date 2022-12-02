import React, { useCallback, useContext, useEffect } from "react";
import { Alert, Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { AppContext } from "@/context";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import RNPickerSelect from 'react-native-picker-select';
import { COMIC_TYPE } from "@/constants";
import { Colors } from "@/Themes";


const Selection = (props) => {  
    
    const { data, value, label, onValueChange } = props

    return(
        <View style={styles.container}>
                <RNPickerSelect
                    onDonePress={() => {}}
                    value={value || null}
                    style={{viewContainer : styles.filter, inputIOS: {fontSize: 16, color: Colors.white} }} 
                    onValueChange={(v) => {
                        if(value !== v) onValueChange(v)
                    }}
                    items={data || []}
                    textInputProps={{color: Colors.white}}
                    InputAccessoryView={() => null}
                    placeholder={{label: label || 'Sort', value: null}}
                />
        </View>
    )
}

export default React.memo(Selection)


