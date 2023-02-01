import { Easing, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator, MaterialBottomTabScreenProps } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home, { SettingsScreen } from '../Screens/Home/Home';

const Tab = createMaterialBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
    initialRouteName="Feed"
    activeColor="#F67325"
    shifting={true}
    // sceneAnimationType='opacity'
    // sceneAnimationEnabled={true}
    // sceneAnimationEasing={Easing.bounce}
    inactiveColor="#000"
    screenOptions={{
      // tabBarBadge:10,
      tabBarLabel:"#fff",
      tabBarColor:"#fff",
      
    }}
    style={{
      // borderTopLeftRadius:20,
      // borderTopRightRadius:20
      // paddingTop:20, 
    }}
    barStyle={{ backgroundColor: '#0275d8', }}
  >
    <Tab.Screen
      name="Feed"
      component={Home}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={Home}
      options={{
        tabBarLabel: 'Updates',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="bell" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Home}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
  )
}

export default BottomTab

const styles = StyleSheet.create({})