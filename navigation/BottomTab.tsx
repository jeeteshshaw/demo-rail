import { Easing, StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import { createMaterialBottomTabNavigator, MaterialBottomTabScreenProps } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home, { SettingsScreen } from '../Screens/Home/Home';
// import { useTheme } from 'react-native-paper';
import {  useTheme } from '@react-navigation/native';
import Notification from '../Screens/Notification/Notification';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator()

const BottomTab = () => {
  // useState
  const {colors} = useTheme()
  return (
    <Tab.Navigator
    initialRouteName="Feed"
    
    // activeColor={"#F67325"}
    // shifting={true}
    // sceneAnimationType='opacity'
    // sceneAnimationEnabled={true}
    // sceneAnimationEasing={Easing.bounce}
    // inactiveColor="#cccccc"
   
    screenOptions={{
      // tabBarBadge:10,
      tabBarLabel:"#F67325",
      // tabBarColor:"#F67325",
      tabBarActiveTintColor:"#F67325",
      tabBarLabelStyle:{fontWeight:"700", fontSize:12},
      tabBarStyle:{
        height:55,
        borderTopWidth:1, 
        borderTopColor:"#F67325", 
      },
      headerShown:false
    }}
   
    // labeled={true}
    // sceneAnimationEasing={Easing.linear}
    // screenListeners={{focus:({target})=>console.log(target)}}
    // barStyle={{ backgroundColor: "#fff", borderTopWidth:1, borderColor:"#F67325",  }}
  >
    <Tab.Screen
      name="Feed"
      component={Home}
      
      options={{
        
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={30} />
        ),
        
      }}
      
    />
    <Tab.Screen
      name="Notifications"
      component={Notification}
      
      options={{
        tabBarLabel: 'Notifications',
        tabBarBadge:10,
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="bell" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={SettingsScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
    />
     <Tab.Screen
      name="Setting"
      component={SettingsScreen}
      options={{
        tabBarLabel: 'Setting',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="cog" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
  )
}

export default BottomTab

const styles = StyleSheet.create({})