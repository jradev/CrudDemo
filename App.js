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



const App = () => {

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle={'dark-content'}
      />

      <Dashboard />
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
});

export default App;
