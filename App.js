import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Dashboard } from '@/screens';
import { AppNavigation } from '@/navigation';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';


const App = () => {

  return (
    <NavigationContainer>
        <AppNavigation />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
});

export default App;
