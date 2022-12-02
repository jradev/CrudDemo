import React, { useMemo, useReducer } from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContext } from '@/context';

const MANGA_KEY = 'mangas'

const App = () => {

  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'GET_MANGA': 
          return {
            ...prevState,
            mangas: action.payload,
          };
        case 'UPDATE_MANGA': 
          return {
            ...prevState,
            mangas: action.payload,
          };
        case 'DELETE_MANGA': 
          return {
            ...prevState,
          };
        default: 
          return {
            ...prevState
          }
      }
    },
    {
      mangas: []
    }
  );


  const action = useMemo(
    () => ({
      getMangas: async () => {

        let mangas = await AsyncStorage.getItem(MANGA_KEY) || '[]'
        if(mangas){
          mangas = JSON.parse(mangas)
        }
        mangas = mangas?.filter(m => m && m !== 'null' && m !== null)
      
        dispatch({
          type: 'GET_MANGA',
          payload: mangas
        })
        return mangas
        
      },
      createManga: async (data) => {
        let mangas = await AsyncStorage.getItem(MANGA_KEY) || '[]'
        if(mangas){
          mangas = JSON.parse(mangas)
        }
        await AsyncStorage.setItem(MANGA_KEY, JSON.stringify([
          ...mangas,
          data
        ]))
        console.log('CREATE_MANGA')
        dispatch({
          type: 'CREATE_MANGA'
        })
        action.getMangas()
      },
      updateManga: async (item) => {
        let mangas = await AsyncStorage.getItem(MANGA_KEY) || '[]'
        if(mangas){
          mangas = JSON.parse(mangas)
        }

        selectedItemIndex = mangas.findIndex((obj => obj.id === item.id));

        mangas[selectedItemIndex] = item

        console.log('UPDATE MANGA')
        await AsyncStorage.setItem(MANGA_KEY, JSON.stringify(mangas))
        
        dispatch({
          type: 'UPDATE_MANGA'
        })

        action.getMangas()
        
      },

      deleteManga: async (id) => {
        let mangas = await AsyncStorage.getItem(MANGA_KEY) || '[]'
        if(mangas){
          mangas = JSON.parse(mangas)
        }
        mangas = mangas.filter((i) => i.id !== id)

        await AsyncStorage.setItem(MANGA_KEY, JSON.stringify(mangas))
        console.log('DELETE_MANGA')
        dispatch({
          type: 'DELETE_MANGA'
        })
        action.getMangas()
      },
    }),
    []
  );

  return (
    <NavigationContainer>
        <AppContext.Provider value={{ state, action }}>
          <AppNavigation />
        </AppContext.Provider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
});

export default App;
