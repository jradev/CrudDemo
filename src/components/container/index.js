import { useEffect } from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import styles from "./style";


const Container = (props) => {   
    const { children, backgroundColor } = props   
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: backgroundColor || '#fff'}}>
             <StatusBar translucent backgroundColor={'#fff'} />
            <View style={[styles.container, {backgroundColor: backgroundColor || '#fff'}]}>
                {children}
            </View>
        </SafeAreaView>
    )
}

export default Container


