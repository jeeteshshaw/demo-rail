/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { FC, useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'


import { NavigationContainer, useTheme, DarkTheme, DefaultTheme } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { FlatList } from 'react-native';
import { OptionList } from './Static/data';
import { TouchableHighlight } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import BottomTab from './navigation/BottomTab';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App: FC = () => {
  const [ShowSplashScreen, setShowSplashScreen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
      
    }, 2000);  
  
  }, [])
  
  return (
    <NavigationContainer theme={{
      ...DefaultTheme,
      colors:{
        background:"#fff",
        border:"#747474",
        card:"#FFF",
        text:"#000",
        primary:DefaultTheme.colors.primary,
        notification:DarkTheme.colors.notification
      }
    }}>
       <Stack.Navigator>
        <Stack.Screen name="BottomTab" component={BottomTab} 
        options={{
          header:()=>(
            <View style={{ height: 75, backgroundColor: "#fff", flexDirection:"row", alignItems:"center", justifyContent:"space-between", paddingHorizontal:16, elevation:10, borderBottomRightRadius:20, borderBottomLeftRadius:20, borderColor:"#fff" }}>
              <View style={{flexDirection:"row", alignItems:"center"}}>
              <Image source={require("./assets/logo_fako.png")}  style={{width:50, height:50, resizeMode:"contain"}} />
              <Text style={{color:DefaultTheme.colors.primary, fontSize:20}}> Trainman Demo</Text>
              </View>
              <TouchableOpacity ><Text style={{color:"#F67325", fontSize:16, borderWidth:1, borderRadius:10, padding:5, paddingHorizontal:15, borderColor:"#F67325"}}>PNR</Text></TouchableOpacity>
            </View>
          )
        }}
        />
      </Stack.Navigator>
    
    </NavigationContainer>
  )
}

export default App

